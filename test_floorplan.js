const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  console.log('--- STARTING PLAYWRIGHT VERIFICATION ---');
  
  // Launch with msedge or system chromium
  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true
  }).catch(async (err) => {
    console.log('Falling back to default chromium...');
    return await chromium.launch({ headless: true });
  });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 }
  });
  const page = await context.newPage();

  // Load local index.html file
  const indexPath = path.resolve(__dirname, 'index.html');
  const fileUrl = `file://${indexPath.replace(/\\/g, '/')}`;
  console.log(`Navigating to: ${fileUrl}`);

  await page.goto(fileUrl, { waitUntil: 'networkidle' });

  // Ensure artifacts/screenshots dir exists
  const screenshotDir = path.resolve(__dirname, 'screenshots');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  // 1. Take initial screenshot of the whole page
  await page.screenshot({ path: path.join(screenshotDir, 'desktop_full_initial.png') });
  console.log('Saved: desktop_full_initial.png');

  // 2. Take element screenshot of the SVG floor plan container
  const mapElement = await page.$('#map-viewport');
  if (mapElement) {
    await mapElement.screenshot({ path: path.join(screenshotDir, 'current_svg_floorplan.png') });
    console.log('Saved: current_svg_floorplan.png');
  }

  // 3. Verify all 32 booths are present in SVG DOM
  const expectedBooths = [
    'B01', 'B02', 'B03', 'B04', 'B05', 'B06', 'B07', 'B08', 'B09', 'B10',
    'B11', 'B12', 'B13', 'B14', 'B15', 'B16', 'B17', 'B18',
    'G1', 'G2', 'G3', 'G4',
    'BFINTECH', 'BACC', 'BBA', 'BIB', 'BHRM', 'FOOD',
    'STAGE', 'GIFT', 'SALES1', 'SALES2'
  ];

  console.log(`Checking ${expectedBooths.length} booth elements in DOM...`);
  const missingBooths = [];
  for (const id of expectedBooths) {
    const el = await page.$(`#map-${id}`);
    if (!el) {
      missingBooths.push(id);
    }
  }

  if (missingBooths.length > 0) {
    console.error('FAIL: Missing booth elements:', missingBooths);
    process.exitCode = 1;
  } else {
    console.log(`SUCCESS: All ${expectedBooths.length} booth elements found in SVG!`);
  }

  // Also verify removed booths B19, B20, PHOTO, and BAF are NOT in DOM
  const b19El = await page.$('#map-B19');
  const b20El = await page.$('#map-B20');
  const photoEl = await page.$('#map-PHOTO');
  const bafEl = await page.$('#map-BAF');
  if (b19El || b20El || photoEl || bafEl) {
    console.error('FAIL: B19, B20, PHOTO, or BAF still found in SVG map!');
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: B19, B20, PHOTO stand, and BA&F are confirmed removed from SVG map!');
  }

  // Verify Sai Lakshmi and Dhivyah lead cards are removed from DOM
  const pageBodyText = await page.innerText('body');
  if (pageBodyText.includes('Sai Lakshmi') || pageBodyText.includes('Dhivyah')) {
    console.error('FAIL: Sai Lakshmi or Dhivyah still found in DOM text!');
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: Sai Lakshmi and Dhivyah lead cards are confirmed removed from DOM!');
  }

  // 3b. Verify UNITAR HUB LEVEL G label is rendered horizontally
  console.log('Verifying UNITAR HUB LEVEL G center label is horizontal...');
  const hubLabel = await page.$('#hub-center-label');
  if (!hubLabel) {
    console.error('FAIL: Missing #hub-center-label in SVG!');
    process.exitCode = 1;
  } else {
    const text = await page.$eval('#hub-center-label', el => el.textContent.trim());
    const transform = await hubLabel.getAttribute('transform');
    console.log(`Hub center label text: "${text}", transform: ${transform}`);
    if (text !== 'UNITAR HUB LEVEL G') {
      console.error(`FAIL: Expected text 'UNITAR HUB LEVEL G', got '${text}'`);
      process.exitCode = 1;
    } else if (transform && transform.includes('rotate')) {
      console.error('FAIL: Hub center label has rotation applied!');
      process.exitCode = 1;
    } else {
      console.log('SUCCESS: UNITAR HUB LEVEL G label is horizontal single line!');
    }
  }

  // 4. Verify DigitalPassport is strictly 18 vendor booths (B01-B18)
  console.log('Verifying DigitalPassport restriction to B01-B18...');
  const passportTotal = await page.evaluate(() => passport.getTotal());
  console.log(`Passport total count: ${passportTotal}`);
  if (passportTotal !== 18) {
    console.error(`FAIL: Expected passport total to be 18, got ${passportTotal}`);
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: Passport total is exactly 18 booths (B01-B18)!');
  }

  // 5. Verify Single-Line Navbar and Elongated Badge on 950px viewport (medium screen)
  console.log('Testing Single-Line Nav Links & Elongated Passport Badge (950px viewport)...');
  await page.setViewportSize({ width: 950, height: 800 });
  await page.waitForTimeout(200);

  // Check Floor Plan & Event Info nav height (should be single line ~16-20px, not stacked > 30px)
  const floorPlanHeight = await page.$eval('#nav-map span', el => el.getBoundingClientRect().height);
  const eventInfoHeight = await page.$eval('#nav-info span', el => el.getBoundingClientRect().height);
  console.log(`Nav "Floor Plan" height: ${floorPlanHeight}px, "Event Info" height: ${eventInfoHeight}px`);
  if (floorPlanHeight > 24 || eventInfoHeight > 24) {
    console.error('FAIL: Nav links wrapped onto multiple lines!');
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: Nav links strictly stay on one single line!');
  }

  // Set 17 stamps to test "17 / 18" badge
  await page.evaluate(() => {
    const booths = BOOTHS_DATA.filter(b => passport.isStampable(b.id)).slice(0, 17);
    booths.forEach(b => passport.stamps.add(b.id));
    passport.save();
    passport.updateUI();
  });

  const badgeText17 = await page.innerText('#passport-badge-count');
  const badgeHeight17 = await page.$eval('#passport-badge-count', el => el.getBoundingClientRect().height);
  console.log(`Passport badge text: "${badgeText17}", height: ${badgeHeight17}px`);
  if (badgeHeight17 > 24 || !badgeText17.includes('17 / 18')) {
    console.error(`FAIL: Badge wrapped onto multiple lines or text incorrect! Height: ${badgeHeight17}`);
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: Passport badge "17 / 18" displays cleanly on ONE single line without stacking!');
  }

  await page.screenshot({ path: path.join(screenshotDir, 'desktop_nav_single_line.png') });
  console.log('Saved: desktop_nav_single_line.png');

  // Reset back to 1280px viewport
  await page.setViewportSize({ width: 1280, height: 900 });

  // 6. Test Drawer Stamp Button behavior for Vendor Booth vs Non-Booth
  console.log('Testing Drawer Stamp Button for B01 (Vendor Booth)...');
  await page.click('#map-B01');
  await page.waitForTimeout(200);
  const b01BtnHidden = await page.$eval('#panel-stamp-btn', btn => btn.classList.contains('hidden'));
  if (b01BtnHidden) {
    console.error('FAIL: #panel-stamp-btn should be visible for B01!');
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: #panel-stamp-btn is visible for B01!');
  }

  console.log('Testing Drawer Stamp Button for B13 (Restored Vendor Booth)...');
  await page.click('#map-B13');
  await page.waitForTimeout(200);
  const b13BtnHidden = await page.$eval('#panel-stamp-btn', btn => btn.classList.contains('hidden'));
  if (b13BtnHidden) {
    console.error('FAIL: #panel-stamp-btn should be visible for B13!');
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: #panel-stamp-btn is visible for B13!');
  }

  console.log('Testing Drawer Stamp Button for FOOD (New Food & Refreshments booth)...');
  await page.click('#map-FOOD');
  await page.waitForTimeout(200);
  const foodBtnHidden = await page.$eval('#panel-stamp-btn', btn => btn.classList.contains('hidden'));
  if (!foodBtnHidden) {
    console.error('FAIL: #panel-stamp-btn should be hidden for FOOD!');
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: #panel-stamp-btn is hidden for FOOD!');
  }

  console.log('Testing Drawer Stamp Button for G4 (New Activity booth)...');
  await page.click('#map-G4');
  await page.waitForTimeout(200);
  const g4BtnHidden = await page.$eval('#panel-stamp-btn', btn => btn.classList.contains('hidden'));
  if (!g4BtnHidden) {
    console.error('FAIL: #panel-stamp-btn should be hidden for G4!');
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: #panel-stamp-btn is hidden for G4!');
  }

  console.log('Testing Drawer Stamp Button for STAGE (Non-booth location)...');
  await page.click('#map-STAGE');
  await page.waitForTimeout(200);
  const stageBtnHidden = await page.$eval('#panel-stamp-btn', btn => btn.classList.contains('hidden'));
  if (!stageBtnHidden) {
    console.error('FAIL: #panel-stamp-btn should be hidden for STAGE!');
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: #panel-stamp-btn is hidden for STAGE!');
  }

  console.log('Testing Drawer Stamp Button for BFINTECH (Degree Programme)...');
  await page.click('#map-BFINTECH');
  await page.waitForTimeout(200);
  const bfintechBtnHidden = await page.$eval('#panel-stamp-btn', btn => btn.classList.contains('hidden'));
  if (!bfintechBtnHidden) {
    console.error('FAIL: #panel-stamp-btn should be hidden for BFINTECH!');
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: #panel-stamp-btn is hidden for BFINTECH!');
  }

  console.log('Testing GIFT Counter (No Passport affiliation)...');
  await page.click('#map-GIFT');
  await page.waitForTimeout(200);
  const giftTitle = await page.$eval('#panel-title', el => el.innerText.trim());
  const giftCategory = await page.$eval('#panel-category', el => el.innerText.trim());
  const giftStampBtnHidden = await page.$eval('#panel-stamp-btn', btn => btn.classList.contains('hidden'));
  console.log(`GIFT Title: "${giftTitle}", Category: "${giftCategory}", Stamp button hidden: ${giftStampBtnHidden}`);
  if (giftTitle.includes('PASSPORT') || giftCategory.includes('Passport') || !giftStampBtnHidden) {
    console.error(`FAIL: GIFT counter still affiliated with passport! Title: ${giftTitle}, Category: ${giftCategory}`);
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: GIFT counter is independent ("GIFT COUNTER", "Special Booth") and unaffiliated with passport!');
  }

  // 7. Test 100% Completion & Rickroll Modal (Voucher Code Section DELETED)
  console.log('Testing 100% completion (collecting all 18 booth stamps)...');
  await page.evaluate(() => {
    const stampable = BOOTHS_DATA.filter(b => passport.isStampable(b.id));
    stampable.forEach(b => passport.stamps.add(b.id));
    passport.save();
    passport.updateUI();
  });

  const fullCount = await page.evaluate(() => passport.getCount());
  console.log(`Full stamp count: ${fullCount} / 18`);
  if (fullCount !== 18) {
    console.error(`FAIL: Expected full count 18, got ${fullCount}`);
    process.exitCode = 1;
  }

  console.log('Triggering prize redemption...');
  await page.evaluate(() => redeemPrize());
  await page.waitForTimeout(400);

  const voucherModalHidden = await page.$eval('#voucher-modal', modal => modal.classList.contains('hidden'));
  console.log(`Voucher modal visible: ${!voucherModalHidden}`);
  if (voucherModalHidden) {
    console.error('FAIL: Voucher modal not shown upon 100% completion!');
    process.exitCode = 1;
  }

  // Verify the deleted voucher section does NOT exist
  const voucherCodeEl = await page.$('#voucher-code');
  if (voucherCodeEl) {
    console.error('FAIL: #voucher-code element should be deleted from DOM!');
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: #voucher-code element is successfully deleted from DOM!');
  }

  const modalHtml = await page.$eval('#voucher-modal', m => m.innerHTML);
  if (modalHtml.includes('OFFICIAL VERIFICATION VOUCHER CODE')) {
    console.error('FAIL: "OFFICIAL VERIFICATION VOUCHER CODE" section still present in modal HTML!');
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: "OFFICIAL VERIFICATION VOUCHER CODE" section completely removed!');
  }

  await page.screenshot({ path: path.join(screenshotDir, 'voucher_modal_unlocked.png') });
  console.log('Saved: voucher_modal_unlocked.png');
  await page.evaluate(() => closeVoucherModal());

  // Reset stamps back to clean slate
  await page.evaluate(() => {
    passport.stamps.clear();
    passport.save();
    passport.updateUI();
  });

  // 8. Verify QR Standee is HIDDEN by default and ACCESSIBLE in realtime via URL altering
  console.log('Testing QR Standee hidden by default...');
  const isQrLinkHiddenDefault = await page.$eval('#qr-standee-link', el => el.classList.contains('hidden'));
  const isQrPillHiddenDefault = await page.$eval('#qr-organizer-pill', el => el.classList.contains('hidden'));

  console.log(`Default QR link hidden: ${isQrLinkHiddenDefault}, QR pill hidden: ${isQrPillHiddenDefault}`);
  if (!isQrLinkHiddenDefault || !isQrPillHiddenDefault) {
    console.error('FAIL: QR standee link/pill should be hidden by default!');
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: QR Standee entry points are hidden by default!');
  }

  // Alter URL in realtime via hash (#qr)
  console.log('Altering URL in realtime with #qr...');
  await page.evaluate(() => {
    window.location.hash = '#qr';
  });
  await page.waitForTimeout(350);

  const isQrLinkVisibleWithHash = await page.$eval('#qr-standee-link', el => !el.classList.contains('hidden'));
  const isQrPillVisibleWithHash = await page.$eval('#qr-organizer-pill', el => !el.classList.contains('hidden'));
  console.log(`With #qr - QR link visible: ${isQrLinkVisibleWithHash}, QR pill visible: ${isQrPillVisibleWithHash}`);
  if (!isQrLinkVisibleWithHash || !isQrPillVisibleWithHash) {
    console.error('FAIL: QR standee link/pill should be visible when hash contains #qr!');
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: QR Standee became visible in realtime after altering URL hash to #qr!');
  }

  // Remove hash (#) in realtime
  console.log('Removing hash to test hiding again in realtime...');
  await page.evaluate(() => {
    window.location.hash = '';
    history.replaceState(null, '', window.location.pathname);
  });
  await page.waitForTimeout(350);

  const isQrLinkHiddenAfterHashClear = await page.$eval('#qr-standee-link', el => el.classList.contains('hidden'));
  const isQrPillHiddenAfterHashClear = await page.$eval('#qr-organizer-pill', el => el.classList.contains('hidden'));
  console.log(`After clearing hash - QR link hidden: ${isQrLinkHiddenAfterHashClear}, QR pill hidden: ${isQrPillHiddenAfterHashClear}`);
  if (!isQrLinkHiddenAfterHashClear || !isQrPillHiddenAfterHashClear) {
    console.error('FAIL: QR standee link/pill should hide again after clearing hash!');
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: QR Standee hides again in realtime when URL hash is cleared!');
  }

  // 9. Verify Zero Phone Numbers in DOM
  const bodyText = await page.innerText('body');
  const phoneRegex = /\b01[0-9]-?[0-9]{7,8}\b/g;
  const foundPhones = bodyText.match(phoneRegex);
  if (foundPhones && foundPhones.length > 0) {
    console.error('FAIL: Detected contact numbers in DOM:', foundPhones);
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: Zero phone/contact numbers detected in DOM! (Verified constraint)');
  }

  // 10. Test Mobile Viewport (390x844 iPhone 12/13/14) & "Show Route" Scroll to Map
  console.log('Testing Mobile Viewport (390x844) & "Show Route" scroll to map...');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(300);

  // Scroll down to directory section
  await page.evaluate(() => {
    document.getElementById('directory-section').scrollIntoView();
  });
  await page.waitForTimeout(300);
  const scrollBeforeClick = await page.evaluate(() => window.scrollY);
  console.log(`Scroll position before clicking "Show Route": ${scrollBeforeClick}px`);

  // Click "Show Route" on B01 in directory
  console.log('Clicking "Show Route" button on B01 card...');
  const showRouteBtn = await page.$('#booth-grid button:has-text("Show Route")');
  if (showRouteBtn) {
    await showRouteBtn.click();
    await page.waitForTimeout(600); // Allow smooth scroll to settle
  } else {
    console.error('FAIL: Could not find Show Route button!');
    process.exitCode = 1;
  }

  const scrollAfterClick = await page.evaluate(() => window.scrollY);
  const mapSectionOffsetTop = await page.evaluate(() => {
    const el = document.getElementById('map-section');
    return el ? el.offsetTop : 0;
  });
  console.log(`Scroll position after clicking "Show Route": ${scrollAfterClick}px (map section top: ${mapSectionOffsetTop}px)`);

  // Verify that the viewport scrolled up towards map-section (should be around mapSectionOffsetTop - 64)
  const isScrolledToMap = Math.abs(scrollAfterClick - (mapSectionOffsetTop - 64)) < 120 || scrollAfterClick < mapSectionOffsetTop + 100;
  if (!isScrolledToMap) {
    console.error(`FAIL: Viewport did not scroll to map section! Expected near ${mapSectionOffsetTop - 64}, got ${scrollAfterClick}`);
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: On mobile, clicking "Show Route" smoothly scrolled directly to the map!');
  }

  await page.screenshot({ path: path.join(screenshotDir, 'mobile_show_route_scrolled_to_map.png') });
  console.log('Saved: mobile_show_route_scrolled_to_map.png');

  // 11. Test Mobile Horizontal Scroll & Header Passport Button (Text + Counts only)
  console.log('Testing Mobile Horizontal Overflow & Header Passport Button (360, 375, 390, 414px)...');
  const mobileWidths = [360, 375, 390, 414];
  for (const w of mobileWidths) {
    await page.setViewportSize({ width: w, height: 844 });
    await page.waitForTimeout(150);
    const overflowInfo = await page.evaluate(() => {
      const docW = document.documentElement.clientWidth;
      const scrollW = document.documentElement.scrollWidth;
      const bodyScrollW = document.body.scrollWidth;
      return { docW, scrollW, bodyScrollW, hasOverflow: scrollW > docW || bodyScrollW > docW };
    });
    if (overflowInfo.hasOverflow) {
      console.error(`FAIL: Horizontal overflow detected at ${w}px! docW=${overflowInfo.docW}, scrollW=${overflowInfo.scrollW}, bodyScrollW=${overflowInfo.bodyScrollW}`);
      process.exitCode = 1;
    } else {
      console.log(`SUCCESS: Zero horizontal overflow at ${w}px (scrollWidth === clientWidth === ${overflowInfo.docW})!`);
    }
  }

  // Check top-right passport button has NO svg icon (text + counts only)
  const headerPassportSvgCount = await page.$$eval('#header-passport-btn svg', svgs => svgs.length);
  const headerPassportText = await page.$eval('#header-passport-btn', btn => btn.innerText.replace(/\s+/g, ' ').trim());
  console.log(`Top-right passport button SVG count: ${headerPassportSvgCount}, text: "${headerPassportText}"`);
  if (headerPassportSvgCount !== 0) {
    console.error(`FAIL: Top-right header passport button contains ${headerPassportSvgCount} SVG icon(s), expected 0!`);
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: Top-right header passport button has NO SVG icon, strictly text and count!');
  }

  await page.screenshot({ path: path.join(screenshotDir, 'mobile_header_text_only_passport.png') });
  console.log('Saved: mobile_header_text_only_passport.png');

  await browser.close();
  console.log('--- PLAYWRIGHT VERIFICATION COMPLETE ---');

})();

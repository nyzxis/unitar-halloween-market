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

  // 3. Verify all 33 booths are present in SVG DOM
  const expectedBooths = [
    'B01', 'B02', 'B03', 'B04', 'B05', 'B06', 'B07', 'B08', 'B09', 'B10',
    'B11', 'B12', 'B14', 'B15', 'B16', 'B17', 'B18', 'B19', 'B20',
    'G1', 'G2', 'G3',
    'BFINTECH', 'BAF', 'BACC', 'BBA', 'BIB', 'BHRM',
    'STAGE', 'PHOTO', 'GIFT', 'SALES1', 'SALES2'
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
    console.log('SUCCESS: All 33 booth elements found in SVG!');
  }

  // 4. Verify DigitalPassport is strictly 19 vendor booths (B01-B20)
  console.log('Verifying DigitalPassport restriction to B01-B20...');
  const passportTotal = await page.evaluate(() => passport.getTotal());
  console.log(`Passport total count: ${passportTotal}`);
  if (passportTotal !== 19) {
    console.error(`FAIL: Expected passport total to be 19, got ${passportTotal}`);
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: Passport total is exactly 19 booths (B01-B20)!');
  }

  const badgeText = await page.innerText('#passport-badge-count');
  console.log(`Header badge counter text: "${badgeText}"`);
  if (!badgeText.includes('/ 19')) {
    console.error(`FAIL: Header badge counter does not show / 19: "${badgeText}"`);
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: Header badge counter displays "0 / 19"!');
  }

  // 5. Open Passport Modal & Verify 19 Stamp Slots
  console.log('Opening passport modal...');
  await page.evaluate(() => openPassportModal());
  await page.waitForTimeout(300);

  const slotCount = await page.$$eval('#passport-slots-grid > div', els => els.length);
  console.log(`Passport modal slot count: ${slotCount}`);
  if (slotCount !== 19) {
    console.error(`FAIL: Expected 19 passport slots, found ${slotCount}`);
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: Exactly 19 stamp slots rendered in passport modal!');
  }

  await page.screenshot({ path: path.join(screenshotDir, 'passport_modal_19slots.png') });
  console.log('Saved: passport_modal_19slots.png');
  await page.evaluate(() => closePassportModal());
  await page.waitForTimeout(200);

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

  // 7. Test Stamping B01 and milestone progress
  console.log('Testing Stamping B01...');
  await page.evaluate(() => passport.toggleStamp('B01'));
  const stampedCount = await page.evaluate(() => passport.getCount());
  console.log(`Stamped count after B01: ${stampedCount}`);
  if (stampedCount !== 1) {
    console.error(`FAIL: Expected count 1, got ${stampedCount}`);
    process.exitCode = 1;
  }
  const badgeAfterStamp = await page.innerText('#passport-badge-count');
  console.log(`Badge after stamp: "${badgeAfterStamp}"`);
  if (badgeAfterStamp !== '1 / 19') {
    console.error(`FAIL: Expected '1 / 19', got "${badgeAfterStamp}"`);
    process.exitCode = 1;
  }

  // 8. Test 100% Completion & Rickroll Modal (Voucher Code Section DELETED)
  console.log('Testing 100% completion (collecting all 19 booth stamps)...');
  await page.evaluate(() => {
    const stampable = BOOTHS_DATA.filter(b => passport.isStampable(b.id));
    stampable.forEach(b => passport.stamps.add(b.id));
    passport.save();
    passport.updateUI();
  });

  const fullCount = await page.evaluate(() => passport.getCount());
  console.log(`Full stamp count: ${fullCount} / 19`);
  if (fullCount !== 19) {
    console.error(`FAIL: Expected full count 19, got ${fullCount}`);
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

  // 9. Verify QR Standee is HIDDEN by default and ACCESSIBLE in realtime via URL altering
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

  await page.screenshot({ path: path.join(screenshotDir, 'qr_revealed_realtime.png') });
  console.log('Saved: qr_revealed_realtime.png');

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

  // 10. Reset map view to full overview
  console.log('Resetting map view...');
  await page.click('#btn-reset-zoom');
  await page.waitForTimeout(400);
  await mapElement.screenshot({ path: path.join(screenshotDir, 'desktop_floorplan_overview.png') });
  console.log('Saved: desktop_floorplan_overview.png');

  // 11. Verify Zero Phone Numbers in DOM
  const bodyText = await page.innerText('body');
  const phoneRegex = /\b01[0-9]-?[0-9]{7,8}\b/g;
  const foundPhones = bodyText.match(phoneRegex);
  if (foundPhones && foundPhones.length > 0) {
    console.error('FAIL: Detected contact numbers in DOM:', foundPhones);
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: Zero phone/contact numbers detected in DOM! (Verified constraint)');
  }

  // 12. Test Mobile Viewport (390x844 iPhone 12/13/14)
  console.log('Testing Mobile Viewport (390x844)...');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(400);
  await page.click('#btn-reset-zoom');
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(screenshotDir, 'mobile_full_view.png') });
  console.log('Saved: mobile_full_view.png');

  const mobileMap = await page.$('#map-viewport');
  if (mobileMap) {
    await mobileMap.screenshot({ path: path.join(screenshotDir, 'mobile_map_viewport.png') });
    console.log('Saved: mobile_map_viewport.png');
  }

  await browser.close();
  console.log('--- PLAYWRIGHT VERIFICATION COMPLETE ---');
})();

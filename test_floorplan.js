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

  // 4. Test clicking B01 (Cozy Corner)
  console.log('Testing click on Booth B01...');
  await page.click('#map-B01');
  await page.waitForTimeout(300);

  const panelTitle = await page.innerText('#panel-title');
  console.log(`Panel title after clicking B01: "${panelTitle}"`);
  await mapElement.screenshot({ path: path.join(screenshotDir, 'b01_selected_path.png') });
  console.log('Saved: b01_selected_path.png');

  // 5. Test clicking B07 (West Corridor outer)
  console.log('Testing click on Booth B07...');
  await page.click('#map-B07');
  await page.waitForTimeout(300);
  const panelB07Title = await page.innerText('#panel-title');
  console.log(`Panel title after clicking B07: "${panelB07Title}"`);
  await mapElement.screenshot({ path: path.join(screenshotDir, 'b07_selected_path.png') });
  console.log('Saved: b07_selected_path.png');

  // 6. Reset map view to full overview
  console.log('Resetting map view...');
  await page.click('#btn-reset-zoom');
  await page.waitForTimeout(400);
  await mapElement.screenshot({ path: path.join(screenshotDir, 'desktop_floorplan_overview.png') });
  console.log('Saved: desktop_floorplan_overview.png');

  // 7. Verify Zero Phone Numbers in DOM
  const bodyText = await page.innerText('body');
  const phoneRegex = /\b01[0-9]-?[0-9]{7,8}\b/g;
  const foundPhones = bodyText.match(phoneRegex);
  if (foundPhones && foundPhones.length > 0) {
    console.error('FAIL: Detected contact numbers in DOM:', foundPhones);
    process.exitCode = 1;
  } else {
    console.log('SUCCESS: Zero phone/contact numbers detected in DOM! (Verified constraint)');
  }

  // 8. Test Mobile Viewport (390x844 iPhone 12/13/14)
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

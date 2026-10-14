const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  const imgPath = 'C:/Users/User/.gemini/antigravity/brain/b9fe7499-e77c-4dae-a5b8-166cbafb4d80/.user_uploaded/media_1791976150995_0f0af20d.png';

  await page.goto(`file:///${imgPath}`);
  const result = await page.evaluate(async () => {
    const img = document.querySelector('img');
    const c = document.createElement('canvas');
    c.width = img.naturalWidth;
    c.height = img.naturalHeight;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const data = ctx.getImageData(0, 0, c.width, c.height).data;

    function isBlack(x, y) {
      if (x < 0 || x >= c.width || y < 0 || y >= c.height) return false;
      const idx = (y * c.width + x) * 4;
      return data[idx] < 80 && data[idx+1] < 80 && data[idx+2] < 80;
    }

    // Find all rectangular contours
    // Sample horizontal edges: y where horizontal black line exists
    // Let's find connected black components that look like booth rectangles (width between 15 and 80, height between 15 and 80)
    const visited = new Uint8Array(c.width * c.height);
    const detectedBoxes = [];

    for (let y = 50; y < c.height - 10; y += 2) {
      for (let x = 15; x < c.width - 15; x += 2) {
        const idx = y * c.width + x;
        if (!visited[idx] && isBlack(x, y)) {
          // flood fill
          let minX = x, maxX = x, minY = y, maxY = y;
          let count = 0;
          const q = [idx];
          visited[idx] = 1;

          while (q.length > 0) {
            const curr = q.pop();
            const cx = curr % c.width;
            const cy = Math.floor(curr / c.width);
            count++;
            if (cx < minX) minX = cx;
            if (cx > maxX) maxX = cx;
            if (cy < minY) minY = cy;
            if (cy > maxY) maxY = cy;

            for (const [dx, dy] of [[1,0], [-1,0], [0,1], [0,-1]]) {
              const nx = cx + dx, ny = cy + dy;
              if (nx >= 0 && nx < c.width && ny >= 0 && ny < c.height) {
                const nidx = ny * c.width + nx;
                if (!visited[nidx] && isBlack(nx, ny)) {
                  visited[nidx] = 1;
                  if (count < 8000) q.push(nidx);
                }
              }
            }
          }

          const w = maxX - minX + 1;
          const h = maxY - minY + 1;
          // Filter candidate booth boxes
          if (w >= 18 && w <= 95 && h >= 18 && h <= 95 && count > 40) {
            detectedBoxes.push({ x: minX, y: minY, w, h, cx: Math.round((minX + maxX)/2), cy: Math.round((minY + maxY)/2) });
          }
        }
      }
    }

    return detectedBoxes.sort((a,b) => a.y - b.y || a.x - b.x);
  });

  console.log('Detected candidate boxes:', result.length);
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})();

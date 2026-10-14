# UNITAR Prop and Pop Market | Halloween Event 2026

An elevated, interactive web application and wayfinding engine for the **UNITAR Prop and Pop Market (Halloween Event 2026)** held at **Level G, UNITAR Hub**.

---

## ✨ Features Built

1. **Interactive Floor Plan & Wayfinding Engine**
   - Precise SVG floor plan mapping of **Level G, UNITAR Hub** (Top Corridor `B01–B12`, Middle Hub `B14–B20`, `G1–G3`, Academic Degree Booths, Main Stage, Photo Stand, Gift Counter).
   - **Smooth Mobile Pinch-to-Zoom & Pan**: Drag with mouse or finger, pinch with 2 fingers, double-tap zoom, with on-screen Zoom In / Zoom Out / Reset View / Focus Entrance controls.
   - **Glowing Spooky Animated Walking Route**: Clicking any booth traces a glowing dashed neon route starting from the Main Entrance directly to that booth.
   - **Smooth Camera Transitions (`flyToBooth`)**: Automatically glides and zooms into the selected booth on the map.

2. **Digital Halloween Passport / Stamp Card**
   - **33 Stampable Locations**: 20 Student Entrepreneur Booths, 6 Academic Degree Booths, and 4 Activity & Highlights zones.
   - **Offline Persistence**: Collected stamps are saved to browser `localStorage` so students don't lose progress on reload.
   - **Milestone Rewards**: Unlocks milestone celebrations (with celebratory confetti & sounds) at 5 stamps, 15 stamps, and completion.
   - **Official Prize Redemption Voucher**: Unlocks a verified digital voucher with unique code to present at the **Passport Gift Redemption Counter**.

3. **Procedural Spooky Audio Synthesizer (Web Audio API)**
   - Zero external audio dependencies (no broken 404 links or lag).
   - Gentle atmospheric eerie drone with frequency sweeps.
   - Custom synthesized sound effects for:
     - Stamp collection chime
     - Wayfinding path whoosh
     - Milestone fanfare
   - Toggle button with mute/unmute memory.

4. **Directory & Instant Search**
   - Live search by booth number, business name, category, or owner name.
   - Filter chips: `All`, `Top Corridor (MC-S2)`, `Middle Hub (MC-S3)`, `Degree Programmes`, `Activity & Highlights`, `Left to Visit`, `Stamped`.
   - Direct 1-tap WhatsApp chat button with pre-filled greeting message (`https://wa.me/60...`).

5. **Customer-Facing Agenda Timeline**
   - Event timeline from 9:30 AM to 4:30 PM with dynamic `HAPPENING NOW` status badges.

6. **Companion Printable QR Standee Generator (`qr-standee.html`)**
   - Ready-to-print A4 standee card for the venue entrance with dynamic QR code pointing to your live URL.

---

## 🚀 How to Run Locally

You can test this project directly in your browser:

### Option A: Direct Open
Double-click `index.html` in file explorer or open it in Google Chrome, Microsoft Edge, or Safari.

### Option B: Local Dev Server (Python or Node)
Using PowerShell:
```powershell
cd "C:\Users\User\.gemini\antigravity\scratch\unitar-halloween-market"

# With Python
python -m http.server 8080

# Or with npx serve
npx serve .
```
Then open `http://localhost:8080` in your browser.

---

## 🌐 How to Deploy to Vercel

### Method 1: Vercel CLI (Fastest)
1. Open PowerShell:
```powershell
cd "C:\Users\User\.gemini\antigravity\scratch\unitar-halloween-market"
npx vercel
```
2. Follow the prompt to log in and deploy. Your site will be live instantly!

### Method 2: Git & Vercel Dashboard
1. Initialize Git and commit the folder:
```powershell
cd "C:\Users\User\.gemini\antigravity\scratch\unitar-halloween-market"
git init
git add .
git commit -m "feat: UNITAR Prop & Pop Market Halloween interactive website"
```
2. Push to a new GitHub repository (e.g. `unitar-prop-pop-market`).
3. Go to [vercel.com/new](https://vercel.com/new), select the repository, and click **Deploy**.

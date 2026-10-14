/**
 * UNITAR Halloween Event 2026 - Prop and Pop Market
 * Interactive Wayfinding Engine, Digital Passport, Pan-Zoom & Web Audio Synthesizer
 */

// =============================================================================
// 1. COMPLETE BOOTH & LOCATION DATASET
// =============================================================================
const BOOTHS_DATA = [
  // --- MC-S2: Top Corridor (B01 - B12, B14) ---
  {
    id: "B01",
    name: "CUSTIN",
    category: "Crafts & Gifts",
    owner: "Sharifah Elliya Farzana",
    section: "MC-S2",
    zone: "Top Corridor",
    phone: "017-9219035",
    icon: "🎃",
    cx: 148,
    cy: 85,
    path: "514,602 514,200 148,200 148,100",
    directions: "Enter through Main Entrance, head straight up the central corridor past the left Lift, turn left into Top Corridor to B01."
  },
  {
    id: "B02",
    name: "BLOOM & CO",
    category: "Florist",
    owner: "Vainishini Sankar",
    section: "MC-S2",
    zone: "Top Corridor",
    phone: "011-36520320",
    icon: "🥀",
    cx: 230,
    cy: 85,
    path: "514,602 514,200 230,200 230,100",
    directions: "From Main Entrance, walk straight past the Lifts toward the top corridor, turn left, and B02 is right next to B01."
  },
  {
    id: "B03",
    name: "KITTY KRAFT",
    category: "Women Accessories",
    owner: "Theeveeya Shankar Ganesh",
    section: "MC-S2",
    zone: "Top Corridor",
    phone: "011-26115848",
    icon: "🐱",
    cx: 250,
    cy: 145,
    path: "514,602 514,200 250,200 250,160",
    directions: "Walk straight past the Lifts, turn left after the Escalator into row 2 of top corridor."
  },
  {
    id: "B04",
    name: "IYAL JEWELLERY",
    category: "Jewelleries",
    owner: "Ooi Shun Jie Puvendran",
    section: "MC-S2",
    zone: "Top Corridor",
    phone: "010-2809546",
    icon: "💍",
    cx: 166,
    cy: 145,
    path: "514,602 514,200 166,200 166,160",
    directions: "Enter from Main Entrance, head past the Lifts, turn left toward Escalator, B04 is next to B03."
  },
  {
    id: "B05",
    name: "STUDYMATE STATIONERY",
    category: "Stationeries & Jerseys",
    owner: "Shritharan",
    section: "MC-S2",
    zone: "Top Corridor",
    phone: "010-24112812",
    icon: "✏️",
    cx: 315,
    cy: 85,
    path: "514,602 514,185 315,185 315,100",
    directions: "Walk straight up between the two Lifts toward One Stop Centre back wall."
  },
  {
    id: "B06",
    name: "PHOTO BOOTH",
    category: "Photography",
    owner: "Shawin",
    section: "MC-S2",
    zone: "Top Corridor",
    phone: "012-2219921",
    icon: "📸",
    cx: 405,
    cy: 85,
    path: "514,602 514,185 405,185 405,100",
    directions: "Walk straight up past Lifts and head slightly left to top row in front of One Stop Centre."
  },
  {
    id: "B07",
    name: "PB & JL",
    category: "Keychains, Charms, Pins",
    owner: "Louiis Fernandez",
    section: "MC-S2",
    zone: "Top Corridor",
    phone: "016-2042295",
    icon: "🗝️",
    cx: 346,
    cy: 145,
    path: "514,602 514,200 346,200 346,160",
    directions: "Head straight past the left Lift; B07 is right ahead in the front row of the top corridor."
  },
  {
    id: "B08",
    name: "CROCHET OF TWO (CO2)",
    category: "Arts & Handicrafts",
    owner: "Sudha",
    section: "MC-S2",
    zone: "Top Corridor",
    phone: "016-3033680",
    icon: "🧶",
    cx: 498,
    cy: 85,
    path: "514,602 514,100",
    directions: "Go straight from Main Entrance all the way to top row in front of International Student Office."
  },
  {
    id: "B09",
    name: "FLORA & CO",
    category: "Florist",
    owner: "Yooshnika",
    section: "MC-S2",
    zone: "Top Corridor",
    phone: "017-4865354",
    icon: "🌸",
    cx: 445,
    cy: 145,
    path: "514,602 514,200 445,200 445,160",
    directions: "Walk straight ahead between the two Lifts; B09 is right in front of you in row 2."
  },
  {
    id: "B10",
    name: "ROSE2U",
    category: "Florist",
    owner: "Lawnesh",
    section: "MC-S2",
    zone: "Top Corridor",
    phone: "019-7307312",
    icon: "🌹",
    cx: 540,
    cy: 145,
    path: "514,602 514,200 540,200 540,160",
    directions: "Walk straight between the Lifts; B10 is directly ahead in the lower row."
  },
  {
    id: "B11",
    name: "CHARMORA STUDIO",
    category: "Toys, Keychains",
    owner: "Nurdini Alya Najwa",
    section: "MC-S2",
    zone: "Top Corridor",
    phone: "011-26378030",
    icon: "🧸",
    cx: 600,
    cy: 85,
    path: "514,602 514,185 600,185 600,100",
    directions: "Walk straight past the right Lift to top row in front of International Student Office."
  },
  {
    id: "B12",
    name: "HENNA HERITAGE",
    category: "Body Art",
    owner: "Shashmita",
    section: "MC-S2",
    zone: "Top Corridor",
    phone: "016-3650716",
    icon: "✨",
    cx: 635,
    cy: 145,
    path: "514,602 514,200 635,200 635,160",
    directions: "Go straight past the right Lift and slightly right to reach B12 at the end of the top corridor."
  },
  {
    id: "B14",
    name: "ACCESSORIZE",
    category: "Accessories",
    owner: "Aila Naazneen",
    section: "MC-S2",
    zone: "Middle Hub",
    phone: "010-2903670",
    icon: "🎀",
    cx: 675,
    cy: 217,
    path: "514,602 514,450 700,450 700,220 686,220",
    directions: "Walk to Middle Hub Entrance on your right, step inside, and walk straight to B14."
  },

  // --- MC-S3: Middle Hub Zone (B15 - B20) ---
  {
    id: "B15",
    name: "MIRROR ART & CO",
    category: "Hand Mirror For Décor",
    owner: "Hirosha",
    section: "MC-S3",
    zone: "Middle Hub",
    phone: "014-3169205",
    icon: "🪞",
    cx: 675,
    cy: 267,
    path: "514,602 514,450 700,450 700,270 686,270",
    directions: "Turn right at Middle Hub Entrance before the Lift, enter zone, and find B15 on the left aisle."
  },
  {
    id: "B16",
    name: "TRISSORIES",
    category: "Lanyard, Plushies",
    owner: "Krishan",
    section: "MC-S3",
    zone: "Middle Hub",
    phone: "014-6401972",
    icon: "🦇",
    cx: 675,
    cy: 319,
    path: "514,602 514,450 700,450 700,322 686,322",
    directions: "Turn right into Middle Hub Entrance and find B16 second from bottom on left wall."
  },
  {
    id: "B17",
    name: "AURORA",
    category: "Candles, Earrings",
    owner: "Nirmala Dhevi",
    section: "MC-S3",
    zone: "Middle Hub",
    phone: "016-2543787",
    icon: "🕯️",
    cx: 675,
    cy: 373,
    path: "514,602 514,450 700,450 700,376 686,376",
    directions: "Turn right into Middle Hub Entrance; B17 is the first booth immediately on your left."
  },
  {
    id: "B18",
    name: "IN & PAPER CO.",
    category: "Stationery Sets",
    owner: "Jagedishraj",
    section: "MC-S3",
    zone: "Middle Hub",
    phone: "016-9147738",
    icon: "📜",
    cx: 725,
    cy: 246,
    path: "514,602 514,450 700,450 700,249 714,249",
    directions: "Turn right into Middle Hub Entrance and walk up central aisle to B18 on right wall."
  },
  {
    id: "B19",
    name: "THREE BROTHERS",
    category: "Keychains",
    owner: "Arunn",
    section: "MC-S3",
    zone: "Middle Hub",
    phone: "019-8814650",
    icon: "🔮",
    cx: 725,
    cy: 301,
    path: "514,602 514,450 700,450 700,304 714,304",
    directions: "Turn right into Middle Hub Entrance; B19 is in the middle row on the right partition."
  },
  {
    id: "B20",
    name: "SPOOKY POP-UP BOOTH",
    category: "Special Event Booth",
    owner: "UNITAR Student Committee",
    section: "MC-S3",
    zone: "Middle Hub",
    phone: "011-29948241",
    icon: "👻",
    cx: 725,
    cy: 355,
    path: "514,602 514,450 700,450 700,358 714,358",
    directions: "Turn right into Middle Hub Entrance; B20 is the first booth on right partition."
  },

  // --- HUB Activity & Games (G1 - G3) ---
  {
    id: "G1",
    name: "Activity & Registration G1",
    category: "Hub Activity Booth",
    owner: "Event Committee",
    section: "HUB",
    zone: "Middle Hub",
    phone: "019-5781405",
    icon: "🎯",
    cx: 791,
    cy: 227,
    path: "514,602 514,450 765,450 765,230 780,230",
    directions: "From Main Entrance, turn right toward Registration table inside Middle Hub enclosure to reach G1."
  },
  {
    id: "G2",
    name: "Activity & Registration G2",
    category: "Hub Activity Booth",
    owner: "Event Committee",
    section: "HUB",
    zone: "Middle Hub",
    phone: "019-5781405",
    icon: "🎲",
    cx: 791,
    cy: 283,
    path: "514,602 514,450 765,450 765,286 780,286",
    directions: "Turn right into Middle Hub enclosure past Register to reach G2."
  },
  {
    id: "G3",
    name: "Activity & Registration G3",
    category: "Hub Activity Booth",
    owner: "Event Committee",
    section: "HUB",
    zone: "Middle Hub",
    phone: "019-5781405",
    icon: "🃏",
    cx: 791,
    cy: 341,
    path: "514,602 514,450 765,450 765,344 780,344",
    directions: "Turn right into Middle Hub enclosure right next to Register counter for G3."
  },

  // --- Academic Degree Programme Passport Booths (Level G Hub) ---
  {
    id: "BFINTECH",
    name: "Bachelor of Fintech",
    category: "Academic Passport (2:15 PM)",
    owner: "Faculty of Business",
    section: "HUB",
    zone: "Academic Hub",
    phone: "011-29948241",
    icon: "🪙",
    cx: 736,
    cy: 531,
    path: "514,602 514,465 895,465 895,560 736,560 736,542",
    directions: "Walk from Main Entrance, turn right toward UNITAR Hub 'IN' entrance; BFINTECH is in top row."
  },
  {
    id: "BAF",
    name: "Bachelor of Accounting & Finance",
    category: "Academic Passport (2:15 PM)",
    owner: "Faculty of Business",
    section: "HUB",
    zone: "Academic Hub",
    phone: "011-29948241",
    icon: "📈",
    cx: 789,
    cy: 531,
    path: "514,602 514,465 895,465 895,560 789,560 789,542",
    directions: "Turn right toward UNITAR Hub 'IN' lane, BA&F is in middle of top row."
  },
  {
    id: "BACC",
    name: "Bachelor of Accounting",
    category: "Academic Passport (2:15 PM)",
    owner: "Faculty of Business",
    section: "HUB",
    zone: "Academic Hub",
    phone: "011-29948241",
    icon: "📊",
    cx: 843,
    cy: 531,
    path: "514,602 514,465 895,465 895,560 843,560 843,542",
    directions: "Turn right toward UNITAR Hub 'IN' entrance; BACC is first booth on right top row."
  },
  {
    id: "BBA",
    name: "Bachelor of Business Admin",
    category: "Academic Passport (2:15 PM)",
    owner: "Faculty of Business",
    section: "HUB",
    zone: "Academic Hub",
    phone: "011-29948241",
    icon: "💼",
    cx: 736,
    cy: 607,
    path: "514,602 514,465 895,465 895,575 736,575 736,596",
    directions: "Turn right toward UNITAR Hub 'IN' entrance and walk down to BBA near Main Stage."
  },
  {
    id: "BIB",
    name: "Bachelor of Int'l Business",
    category: "Academic Passport (2:15 PM)",
    owner: "Faculty of Business",
    section: "HUB",
    zone: "Academic Hub",
    phone: "011-29948241",
    icon: "🌐",
    cx: 789,
    cy: 607,
    path: "514,602 514,465 895,465 895,575 789,575 789,596",
    directions: "Turn right toward UNITAR Hub 'IN' entrance; BIB is in middle of bottom row."
  },
  {
    id: "BHRM",
    name: "Bachelor of HR Management",
    category: "Academic Passport (2:15 PM)",
    owner: "Faculty of Business",
    section: "HUB",
    zone: "Academic Hub",
    phone: "011-29948241",
    icon: "🤝",
    cx: 843,
    cy: 607,
    path: "514,602 514,465 895,465 895,575 843,575 843,596",
    directions: "Turn right toward UNITAR Hub 'IN' entrance; BHRM is on bottom row right."
  },

  // --- Highlights, Stage & Service Points ---
  {
    id: "STAGE",
    name: "UNITAR HUB MAIN STAGE",
    category: "Opening Speech & Ceremony",
    owner: "Faculty of Business",
    section: "HUB",
    zone: "Academic Hub",
    phone: "011-29948241",
    icon: "🎤",
    cx: 660,
    cy: 558,
    path: "514,602 514,465 895,465 895,565 678,565",
    directions: "From Main Entrance, walk forward, turn right down walkway past Photo Stand to Stage."
  },
  {
    id: "PHOTO",
    name: "HALLOWEEN PHOTO STAND",
    category: "Photo Spot",
    owner: "Prop & Pop Committee",
    section: "HUB",
    zone: "Middle Hub",
    phone: "011-29948241",
    icon: "📸",
    cx: 836,
    cy: 462,
    path: "514,602 514,465 815,465",
    directions: "Walk slightly up and turn right; the Photo Stand is right between Middle Hub and Level G Stage."
  },
  {
    id: "GIFT",
    name: "PASSPORT GIFT REDEMPTION",
    category: "Passport Gift Counter",
    owner: "Event Committee",
    section: "HUB",
    zone: "Academic Hub",
    phone: "019-5781405",
    icon: "🎁",
    cx: 955,
    cy: 522,
    path: "514,602 514,465 895,465 895,525 945,525",
    directions: "Follow walkway to the far right wall of UNITAR Hub Level G."
  },
  {
    id: "SALES1",
    name: "HUB SALES COUNTER 1",
    category: "Special Booth",
    owner: "Event Committee",
    section: "HUB",
    zone: "Academic Hub",
    phone: "019-5781405",
    icon: "🏷️",
    cx: 955,
    cy: 575,
    path: "514,602 514,465 895,465 895,571 945,571",
    directions: "Located on far right wall inside UNITAR Hub Level G below Gift Counter."
  },
  {
    id: "SALES2",
    name: "HUB SALES COUNTER 2",
    category: "Special Booth",
    owner: "Event Committee",
    section: "HUB",
    zone: "Academic Hub",
    phone: "019-5781405",
    icon: "🏷️",
    cx: 955,
    cy: 615,
    path: "514,602 514,465 895,465 895,618 945,618",
    directions: "Located at bottom-right corner inside UNITAR Hub Level G."
  }
];

// =============================================================================
// 2. PROCEDURAL WEB AUDIO SYNTHESIZER (ZERO-DEPENDENCY SPOOKY SOUNDS)
// =============================================================================
class SpookySoundSystem {
  constructor() {
    this.ctx = null;
    this.isMuted = localStorage.getItem('unitar_halloween_muted') === 'true';
    this.isDronePlaying = false;
    this.droneNodes = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('unitar_halloween_muted', this.isMuted);
    if (this.isMuted && this.droneNodes) {
      this.stopDrone();
    } else if (!this.isMuted) {
      this.init();
      this.startDrone();
    }
    return this.isMuted;
  }

  // Atmospheric gentle spooky ambient drone
  startDrone() {
    if (this.isMuted || !this.ctx || this.droneNodes) return;
    try {
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const masterGain = this.ctx.createGain();

      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(55, this.ctx.currentTime); // A1 note

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(82.4, this.ctx.currentTime); // E2 fifth

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(260, this.ctx.currentTime);

      masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.04, this.ctx.currentTime + 3);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(masterGain);
      masterGain.connect(this.ctx.destination);

      osc1.start();
      osc2.start();

      this.droneNodes = { osc1, osc2, filter, masterGain };
    } catch (e) {
      console.warn("Drone audio start error", e);
    }
  }

  stopDrone() {
    if (this.droneNodes && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.droneNodes.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1);
        setTimeout(() => {
          if (this.droneNodes) {
            this.droneNodes.osc1.stop();
            this.droneNodes.osc2.stop();
            this.droneNodes = null;
          }
        }, 1100);
      } catch (e) {
        this.droneNodes = null;
      }
    }
  }

  // Rewarding chime when a stamp is collected
  playStampSound() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.07);

      gain.gain.setValueAtTime(0, now + idx * 0.07);
      gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.07 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.45);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.07);
      osc.stop(now + idx * 0.07 + 0.5);
    });
  }

  // Eerie spectral whoosh when a wayfinding path is activated
  playPathSound() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.35);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.09, now + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.55);
  }

  // Subtle tap click
  playClickSound() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.06);

    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.07);
  }

  // Grand celebration fanfare on passport milestone/completion
  playVictorySound() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const chords = [
      { t: 0.0, f: [392.00, 493.88, 587.33] }, // G major
      { t: 0.2, f: [440.00, 554.37, 659.25] }, // A major
      { t: 0.4, f: [493.88, 622.25, 739.99] }, // B
      { t: 0.65, f: [587.33, 739.99, 880.00, 1174.66] } // High celebration D major
    ];

    chords.forEach(chord => {
      chord.f.forEach(freq => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + chord.t);

        gain.gain.setValueAtTime(0, now + chord.t);
        gain.gain.linearRampToValueAtTime(0.08, now + chord.t + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + chord.t + 0.7);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + chord.t);
        osc.stop(now + chord.t + 0.75);
      });
    });
  }
}

const soundSystem = new SpookySoundSystem();

// =============================================================================
// 3. SVG PAN & ZOOM ENGINE (MOBILE PINCH + DESKTOP DRAG)
// =============================================================================
class SvgPanZoom {
  constructor(viewportEl, svgEl) {
    this.viewport = viewportEl;
    this.svg = svgEl;

    this.scale = 1;
    this.minScale = 0.7;
    this.maxScale = 3.2;

    this.panX = 0;
    this.panY = 0;

    this.isDragging = false;
    this.startX = 0;
    this.startY = 0;

    this.initialPinchDistance = null;
    this.initialScale = 1;

    this.init();
  }

  init() {
    this.applyTransform();

    // Mouse Drag Listeners
    this.viewport.addEventListener('mousedown', (e) => {
      // Don't drag if clicking directly on an interactive booth or button
      if (e.target.closest('button, a')) return;
      this.isDragging = true;
      this.startX = e.clientX - this.panX;
      this.startY = e.clientY - this.panY;
      this.viewport.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      this.panX = e.clientX - this.startX;
      this.panY = e.clientY - this.startY;
      this.applyTransform();
    });

    window.addEventListener('mouseup', () => {
      if (this.isDragging) {
        this.isDragging = false;
        this.viewport.style.cursor = 'grab';
      }
    });

    // Mouse Wheel Zoom (zooms towards cursor location)
    this.viewport.addEventListener('wheel', (e) => {
      e.preventDefault();
      const rect = this.viewport.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const zoomFactor = e.deltaY < 0 ? 1.15 : 0.87;
      this.zoomAtPoint(zoomFactor, mouseX, mouseY);
    }, { passive: false });

    // Touch Listeners (1-finger pan, 2-finger pinch)
    this.viewport.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.startX = e.touches[0].clientX - this.panX;
        this.startY = e.touches[0].clientY - this.panY;
      } else if (e.touches.length === 2) {
        this.isDragging = false;
        this.initialPinchDistance = this.getTouchDistance(e.touches[0], e.touches[1]);
        this.initialScale = this.scale;
      }
    }, { passive: true });

    this.viewport.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1 && this.isDragging) {
        this.panX = e.touches[0].clientX - this.startX;
        this.panY = e.touches[0].clientY - this.startY;
        this.applyTransform();
      } else if (e.touches.length === 2 && this.initialPinchDistance) {
        const currentDistance = this.getTouchDistance(e.touches[0], e.touches[1]);
        const newScale = Math.min(
          this.maxScale,
          Math.max(this.minScale, this.initialScale * (currentDistance / this.initialPinchDistance))
        );

        // Pinch center
        const rect = this.viewport.getBoundingClientRect();
        const midX = ((e.touches[0].clientX + e.touches[1].clientX) / 2) - rect.left;
        const midY = ((e.touches[0].clientY + e.touches[1].clientY) / 2) - rect.top;

        const scaleDiff = newScale / this.scale;
        this.panX = midX - (midX - this.panX) * scaleDiff;
        this.panY = midY - (midY - this.panY) * scaleDiff;
        this.scale = newScale;

        this.applyTransform();
      }
    }, { passive: true });

    this.viewport.addEventListener('touchend', (e) => {
      if (e.touches.length < 2) {
        this.initialPinchDistance = null;
      }
      if (e.touches.length === 0) {
        this.isDragging = false;
      }
    });

    // Double-tap or double-click to reset or zoom in
    this.viewport.addEventListener('dblclick', (e) => {
      if (this.scale > 1.2) {
        this.resetView();
      } else {
        const rect = this.viewport.getBoundingClientRect();
        this.zoomAtPoint(1.8, e.clientX - rect.left, e.clientY - rect.top);
      }
    });
  }

  getTouchDistance(touch1, touch2) {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  zoomAtPoint(factor, x, y) {
    const newScale = Math.min(this.maxScale, Math.max(this.minScale, this.scale * factor));
    const scaleDiff = newScale / this.scale;

    this.panX = x - (x - this.panX) * scaleDiff;
    this.panY = y - (y - this.panY) * scaleDiff;
    this.scale = newScale;

    this.applyTransform();
  }

  zoomIn() {
    const rect = this.viewport.getBoundingClientRect();
    this.zoomAtPoint(1.25, rect.width / 2, rect.height / 2);
  }

  zoomOut() {
    const rect = this.viewport.getBoundingClientRect();
    this.zoomAtPoint(0.8, rect.width / 2, rect.height / 2);
  }

  resetView() {
    this.animateTo(1, 0, 0);
  }

  centerOnEntrance() {
    this.flyToBooth(514, 602, 1.4);
  }

  flyToBooth(svgX, svgY, targetZoom = 1.6) {
    const rect = this.viewport.getBoundingClientRect();
    const targetScale = Math.min(this.maxScale, Math.max(1.2, targetZoom));

    // Center target coordinates inside viewport
    const targetPanX = (rect.width / 2) - (svgX * targetScale);
    const targetPanY = (rect.height / 2) - (svgY * targetScale);

    this.animateTo(targetScale, targetPanX, targetPanY);
  }

  animateTo(newScale, newPanX, newPanY, duration = 400) {
    const startScale = this.scale;
    const startPanX = this.panX;
    const startPanY = this.panY;
    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      this.scale = startScale + (newScale - startScale) * ease;
      this.panX = startPanX + (newPanX - startPanX) * ease;
      this.panY = startPanY + (newPanY - startPanY) * ease;

      this.applyTransform();

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }

  applyTransform() {
    this.svg.style.transform = `translate(${this.panX}px, ${this.panY}px) scale(${this.scale})`;
    const zoomDisplay = document.getElementById('zoom-percentage');
    if (zoomDisplay) {
      zoomDisplay.textContent = `${Math.round(this.scale * 100)}%`;
    }
  }
}

// =============================================================================
// 4. DIGITAL STAMP CARD & PASSPORT STATE MACHINE
// =============================================================================
class DigitalPassport {
  constructor() {
    this.storageKey = 'unitar_halloween_stamps_v1';
    this.stamps = new Set();
    this.load();
  }

  load() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (raw) {
        const arr = JSON.parse(raw);
        this.stamps = new Set(arr);
      }
    } catch (e) {
      this.stamps = new Set();
    }
  }

  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(Array.from(this.stamps)));
    } catch (e) {}
  }

  isStamped(id) {
    return this.stamps.has(id);
  }

  toggleStamp(id) {
    const isNowStamped = !this.stamps.has(id);
    if (isNowStamped) {
      this.stamps.add(id);
      soundSystem.playStampSound();
      if (navigator.vibrate) {
        try { navigator.vibrate([40, 60, 80]); } catch (e) {}
      }
    } else {
      this.stamps.delete(id);
      soundSystem.playClickSound();
    }

    this.save();
    this.updateUI();
    this.checkMilestones();
    return isNowStamped;
  }

  getCount() {
    return this.stamps.size;
  }

  getTotal() {
    return BOOTHS_DATA.length;
  }

  checkMilestones() {
    const count = this.getCount();
    // Milestones at 5, 15, and all
    if (count === 5 || count === 15 || count === this.getTotal()) {
      soundSystem.playVictorySound();
      launchConfetti();
      showToastNotification(`🎉 Milestone Unlocked: ${count} Stamps Collected! You can now claim goodies at the Gift Counter!`);
    }
  }

  updateUI() {
    const count = this.getCount();
    const total = this.getTotal();
    const percentage = Math.round((count / total) * 100);

    // Update Counter Badges
    const badgeCounter = document.getElementById('passport-badge-count');
    if (badgeCounter) badgeCounter.textContent = `${count} / ${total}`;

    const progressBar = document.getElementById('passport-progress-fill');
    if (progressBar) progressBar.style.width = `${percentage}%`;

    const progressText = document.getElementById('passport-progress-text');
    if (progressText) progressText.textContent = `${count} of ${total} stamps collected (${percentage}%)`;

    // Highlight Stamped Booths on Map
    BOOTHS_DATA.forEach(booth => {
      const el = document.getElementById(`map-${booth.id}`);
      if (el) {
        if (this.stamps.has(booth.id)) {
          el.classList.add('booth-stamped');
        } else {
          el.classList.remove('booth-stamped');
        }
      }
    });

    // Render Cards in Directory & Passport Grid
    renderBoothCards();
    renderPassportGrid();
  }

  reset() {
    if (confirm("Are you sure you want to reset all your collected Halloween stamps?")) {
      this.stamps.clear();
      this.save();
      this.updateUI();
      soundSystem.playClickSound();
      showToastNotification("Stamp card reset successfully.");
    }
  }
}

const passport = new DigitalPassport();

// =============================================================================
// 5. MAIN CONTROLLER & APPLICATION LOGIC
// =============================================================================
let panZoomInstance = null;
let currentFilter = 'ALL';
let activeBoothId = null;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Map Pan/Zoom
  const viewport = document.getElementById('map-viewport');
  const svg = document.getElementById('floorplan-svg');
  if (viewport && svg) {
    panZoomInstance = new SvgPanZoom(viewport, svg);
  }

  // 2. Audio Toggle Setup
  const muteBtn = document.getElementById('audio-toggle-btn');
  if (muteBtn) {
    updateMuteButtonDisplay(muteBtn, soundSystem.isMuted);
    muteBtn.addEventListener('click', () => {
      const isMuted = soundSystem.toggleMute();
      updateMuteButtonDisplay(muteBtn, isMuted);
    });
  }

  // Start audio on first user touch anywhere to comply with browser autoplay policies
  window.addEventListener('click', () => {
    soundSystem.init();
    if (!soundSystem.isMuted && !soundSystem.droneNodes) {
      soundSystem.startDrone();
    }
  }, { once: true });

  // 3. Attach Map Booth Click Listeners
  BOOTHS_DATA.forEach(booth => {
    const el = document.getElementById(`map-${booth.id}`);
    if (el) {
      el.addEventListener('click', () => {
        selectBooth(booth.id, true);
      });
    }
  });

  // 4. Initial Renders
  passport.updateUI();
  setupSearchAndFilters();
  setupLiveTimeTicker();
  setupAmbientParticles();

  // 5. Auto select B01 by default with animated path
  setTimeout(() => {
    selectBooth('B01', false);
  }, 400);
});

// Update audio button icon and label
function updateMuteButtonDisplay(btn, isMuted) {
  if (isMuted) {
    btn.innerHTML = `<span class="text-sm">🔇</span> <span class="hidden sm:inline text-xs font-semibold">Audio Off</span>`;
    btn.classList.remove('text-orange-400', 'border-orange-500/40');
    btn.classList.add('text-purple-300', 'border-purple-500/20');
  } else {
    btn.innerHTML = `<span class="text-sm">🔊</span> <span class="hidden sm:inline text-xs font-semibold">Spooky Sound On</span>`;
    btn.classList.add('text-orange-400', 'border-orange-500/40');
    btn.classList.remove('text-purple-300', 'border-purple-500/20');
  }
}

// Select a booth, draw glowing path, and update side info drawer
function selectBooth(id, triggerFly = true) {
  const booth = BOOTHS_DATA.find(b => b.id === id);
  if (!booth) return;

  activeBoothId = id;
  soundSystem.playPathSound();

  // 1. Highlight in SVG
  document.querySelectorAll('.booth-rect').forEach(el => el.classList.remove('booth-active'));
  const mapEl = document.getElementById(`map-${id}`);
  if (mapEl) {
    mapEl.classList.add('booth-active');
  }

  // 2. Draw glowing animated SVG polyline
  const line = document.getElementById('wayfinding-line');
  const startDot = document.getElementById('start-dot');
  const endBeacon = document.getElementById('end-beacon');

  if (line) {
    line.setAttribute('points', booth.path);
    line.classList.remove('hidden');
  }
  if (startDot) startDot.classList.remove('hidden');
  if (endBeacon) {
    endBeacon.setAttribute('cx', booth.cx);
    endBeacon.setAttribute('cy', booth.cy);
    endBeacon.classList.remove('hidden');
  }

  // 3. Smooth fly-to camera in pan-zoom
  if (triggerFly && panZoomInstance) {
    panZoomInstance.flyToBooth(booth.cx, booth.cy, 1.6);
  }

  // 4. Update Details Drawer & Drawer UI
  updateBoothInfoPanel(booth);

  // 5. Update cards glowing active state
  renderBoothCards();
}

// Clear currently selected path
function clearSelection() {
  activeBoothId = null;
  document.querySelectorAll('.booth-rect').forEach(el => el.classList.remove('booth-active'));
  const line = document.getElementById('wayfinding-line');
  const startDot = document.getElementById('start-dot');
  const endBeacon = document.getElementById('end-beacon');

  if (line) line.classList.add('hidden');
  if (startDot) startDot.classList.add('hidden');
  if (endBeacon) endBeacon.classList.add('hidden');

  if (panZoomInstance) {
    panZoomInstance.resetView();
  }

  // Reset side panel
  const panelTitle = document.getElementById('panel-title');
  if (panelTitle) panelTitle.textContent = "Select Any Booth";
  const panelCategory = document.getElementById('panel-category');
  if (panelCategory) panelCategory.textContent = "Interactive Wayfinder Ready";
  const panelOwner = document.getElementById('panel-owner');
  if (panelOwner) panelOwner.textContent = "UNITAR Entrepreneurs";
  const panelSection = document.getElementById('panel-section');
  if (panelSection) panelSection.textContent = "All Sections";
  const panelDirections = document.getElementById('panel-directions');
  if (panelDirections) panelDirections.textContent = "Tap any booth on the floor plan or directory to trace the animated walking path!";
  const panelStampBtn = document.getElementById('panel-stamp-btn');
  if (panelStampBtn) panelStampBtn.classList.add('hidden');

  renderBoothCards();
}

// Populate the right-side details panel
function updateBoothInfoPanel(booth) {
  const isStamped = passport.isStamped(booth.id);

  const panelBadge = document.getElementById('panel-badge');
  if (panelBadge) panelBadge.textContent = `📍 BOOTH ${booth.id}`;

  const panelTitle = document.getElementById('panel-title');
  if (panelTitle) panelTitle.textContent = booth.name;

  const panelCategory = document.getElementById('panel-category');
  if (panelCategory) panelCategory.textContent = `${booth.icon} ${booth.category}`;

  const panelOwner = document.getElementById('panel-owner');
  if (panelOwner) panelOwner.textContent = booth.owner;

  const panelSection = document.getElementById('panel-section');
  if (panelSection) panelSection.textContent = `${booth.section} • ${booth.zone}`;

  const phoneLink = document.getElementById('panel-phone');
  if (phoneLink) {
    phoneLink.textContent = booth.phone;
    phoneLink.href = `tel:${booth.phone.replace(/[^0-9]/g, '')}`;
  }

  const waLink = document.getElementById('panel-whatsapp');
  if (waLink) {
    const cleanPhone = booth.phone.replace(/[^0-9]/g, '');
    const waNumber = cleanPhone.startsWith('0') ? '60' + cleanPhone.slice(1) : cleanPhone;
    waLink.href = `https://wa.me/${waNumber}?text=Hi%20${encodeURIComponent(booth.owner)},%20I'm%20visiting%20booth%20${booth.id}%20at%20UNITAR%20Prop%20and%20Pop%20Market!`;
  }

  const directionsText = document.getElementById('panel-directions');
  if (directionsText) directionsText.textContent = booth.directions;

  // Stamp Action in drawer
  const stampBtn = document.getElementById('panel-stamp-btn');
  if (stampBtn) {
    stampBtn.classList.remove('hidden');
    stampBtn.innerHTML = isStamped
      ? `<span>✓ Stamped in Passport</span>`
      : `<span>🎃 Stamp this Booth</span>`;
    stampBtn.className = isStamped
      ? "w-full py-2.5 px-4 rounded-xl font-bold text-sm bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 transition flex items-center justify-center gap-2"
      : "w-full py-2.5 px-4 rounded-xl font-bold text-sm bg-orange-500/20 text-orange-300 border border-orange-500/40 hover:bg-orange-500/30 transition flex items-center justify-center gap-2";

    stampBtn.onclick = () => {
      passport.toggleStamp(booth.id);
      updateBoothInfoPanel(booth);
    };
  }
}

// Setup search & filter chips
function setupSearchAndFilters() {
  const searchInput = document.getElementById('booth-search');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderBoothCards();
    });
  }

  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentFilter = btn.dataset.filter;
      filterButtons.forEach(b => {
        b.classList.remove('bg-orange-500', 'text-slate-950', 'border-orange-400');
        b.classList.add('bg-purple-950/40', 'text-purple-300', 'border-purple-700/30');
      });
      btn.classList.add('bg-orange-500', 'text-slate-950', 'border-orange-400');
      btn.classList.remove('bg-purple-950/40', 'text-purple-300', 'border-purple-700/30');

      soundSystem.playClickSound();
      renderBoothCards();
    });
  });
}

// Render dynamic booth cards in directory
function renderBoothCards() {
  const grid = document.getElementById('booth-grid');
  if (!grid) return;

  const searchInput = document.getElementById('booth-search');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  const filtered = BOOTHS_DATA.filter(booth => {
    // Category / Section Filter
    let matchesFilter = false;
    if (currentFilter === 'ALL') matchesFilter = true;
    else if (currentFilter === 'MC-S2') matchesFilter = booth.section === 'MC-S2';
    else if (currentFilter === 'MC-S3') matchesFilter = booth.section === 'MC-S3';
    else if (currentFilter === 'ACADEMIC') matchesFilter = booth.zone === 'Academic Hub';
    else if (currentFilter === 'HUB') matchesFilter = booth.section === 'HUB';
    else if (currentFilter === 'STAMPED') matchesFilter = passport.isStamped(booth.id);
    else if (currentFilter === 'UNSTAMPED') matchesFilter = !passport.isStamped(booth.id);

    // Search Query
    const matchesQuery = !query ||
      booth.id.toLowerCase().includes(query) ||
      booth.name.toLowerCase().includes(query) ||
      booth.category.toLowerCase().includes(query) ||
      booth.owner.toLowerCase().includes(query) ||
      booth.zone.toLowerCase().includes(query);

    return matchesFilter && matchesQuery;
  });

  const countEl = document.getElementById('booths-count-display');
  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${BOOTHS_DATA.length} booths`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-12 text-center text-purple-300 glass-panel">
        <p class="text-4xl mb-3">👻</p>
        <p class="text-lg font-bold text-white">No booths found</p>
        <p class="text-sm text-purple-400 mt-1">Try searching for a different keyword or filter.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(booth => {
    const isSelected = booth.id === activeBoothId;
    const isStamped = passport.isStamped(booth.id);
    const cleanPhone = booth.phone.replace(/[^0-9]/g, '');
    const waNumber = cleanPhone.startsWith('0') ? '60' + cleanPhone.slice(1) : cleanPhone;

    return `
      <div class="glass-panel p-5 relative group transition flex flex-col justify-between ${
        isSelected ? 'border-orange-500 shadow-[0_0_24px_rgba(255,84,0,0.3)] bg-purple-950/70' : ''
      }">
        <div>
          <!-- Top Row: Booth Number & Stamped Status -->
          <div class="flex items-center justify-between mb-3">
            <span class="px-2.5 py-1 rounded-full text-xs font-black tracking-wider uppercase ${
              booth.section === 'HUB'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'bg-orange-500/20 text-orange-400 border border-orange-500/40'
            }">
              ${booth.icon} ${booth.id}
            </span>

            <button
              onclick="passport.toggleStamp('${booth.id}');"
              title="${isStamped ? 'Unmark Stamp' : 'Collect Stamp'}"
              class="text-xs px-2.5 py-1 rounded-full font-bold transition flex items-center gap-1.5 ${
                isStamped
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50'
                  : 'bg-white/5 text-purple-300 hover:text-white border border-white/10'
              }">
              <span>${isStamped ? '✓ Stamped' : '⚪ Collect Stamp'}</span>
            </button>
          </div>

          <!-- Booth Name & Category -->
          <h4 class="text-base font-extrabold text-white group-hover:text-orange-400 transition leading-snug">
            ${booth.name}
          </h4>
          <p class="text-xs text-orange-300/90 font-medium mt-1">
            ${booth.category}
          </p>

          <!-- Zone & Owner -->
          <div class="mt-3 pt-3 border-t border-purple-800/40 space-y-1.5 text-xs text-purple-200">
            <div class="flex items-center justify-between">
              <span class="text-purple-400">Owner:</span>
              <span class="font-medium truncate max-w-[150px]" title="${booth.owner}">${booth.owner}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-purple-400">Zone:</span>
              <span class="font-medium">${booth.zone}</span>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="mt-4 pt-3 border-t border-purple-800/30 grid grid-cols-2 gap-2">
          <button
            onclick="selectBooth('${booth.id}', true); document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });"
            class="w-full py-2 px-3 rounded-lg bg-orange-500/20 hover:bg-orange-500 text-orange-300 hover:text-slate-950 border border-orange-500/40 text-xs font-bold transition flex items-center justify-center gap-1">
            <span>🗺️ Show Route</span>
          </button>

          <a
            href="https://wa.me/${waNumber}?text=Hi%20${encodeURIComponent(booth.owner)},%20inquiring%20about%20booth%20${booth.id}"
            target="_blank"
            class="w-full py-2 px-3 rounded-lg bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 border border-emerald-500/40 text-xs font-bold transition flex items-center justify-center gap-1">
            <span>💬 WhatsApp</span>
          </a>
        </div>
      </div>
    `;
  }).join('');
}

// Render Passport Grid inside the Passport Modal
function renderPassportGrid() {
  const container = document.getElementById('passport-slots-grid');
  if (!container) return;

  container.innerHTML = BOOTHS_DATA.map(booth => {
    const isStamped = passport.isStamped(booth.id);
    return `
      <div
        onclick="passport.toggleStamp('${booth.id}');"
        class="cursor-pointer p-3 rounded-xl border transition flex flex-col items-center justify-center text-center relative ${
          isStamped
            ? 'bg-emerald-950/40 border-emerald-500/50 shadow-[0_0_15px_rgba(0,245,212,0.15)]'
            : 'bg-purple-950/30 border-purple-800/40 hover:border-orange-500/40'
        }">
        <div class="stamp-seal mb-2 ${isStamped ? 'stamped' : ''}">
          <span class="text-xl">${isStamped ? '🎃' : booth.icon}</span>
        </div>
        <span class="text-xs font-black text-white">${booth.id}</span>
        <span class="text-[10px] text-purple-300 truncate w-full mt-0.5">${booth.name}</span>
        <span class="text-[9px] mt-1 font-bold ${isStamped ? 'text-emerald-400' : 'text-purple-400'}">
          ${isStamped ? 'COLLECTED' : 'TAP TO STAMP'}
        </span>
      </div>
    `;
  }).join('');
}

// Modal open/close helpers
function openPassportModal() {
  const modal = document.getElementById('passport-modal');
  if (modal) {
    passport.updateUI();
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closePassportModal() {
  const modal = document.getElementById('passport-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Redeem Voucher modal
function redeemPrize() {
  const count = passport.getCount();
  if (count < 5) {
    alert(`Collect at least 5 stamps to unlock the Halloween Gift Counter voucher! You currently have ${count} stamp(s).`);
    return;
  }

  const voucherModal = document.getElementById('voucher-modal');
  const codeEl = document.getElementById('voucher-code');
  if (codeEl) {
    codeEl.textContent = `UPP-HALLOWEEN-${Math.floor(1000 + Math.random() * 9000)}`;
  }
  if (voucherModal) {
    voucherModal.classList.remove('hidden');
    launchConfetti();
    soundSystem.playVictorySound();
  }
}

function closeVoucherModal() {
  const modal = document.getElementById('voucher-modal');
  if (modal) modal.classList.add('hidden');
}

// Setup real-time / event day schedule indicator
function setupLiveTimeTicker() {
  // Check every minute if event is underway
  const updateScheduleState = () => {
    const now = new Date();
    // Wednesday 21st Oct 2026 or today's hours preview
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeVal = hours * 60 + minutes;

    // Timeline slots in minutes from midnight
    // 9:30 AM = 570
    // 2:00 PM = 840
    // 2:15 PM = 855
    // 4:30 PM = 990
    const badge930 = document.getElementById('slot-badge-930');
    const badge1400 = document.getElementById('slot-badge-1400');
    const badge1415 = document.getElementById('slot-badge-1415');
    const badge1630 = document.getElementById('slot-badge-1630');

    // Default to upcoming or live based on time
    if (timeVal >= 570 && timeVal < 840) {
      if (badge930) badge930.textContent = "● HAPPENING NOW";
    } else if (timeVal >= 840 && timeVal < 855) {
      if (badge1400) badge1400.textContent = "● HAPPENING NOW";
    } else if (timeVal >= 855 && timeVal < 990) {
      if (badge1415) badge1415.textContent = "● HAPPENING NOW";
    } else if (timeVal >= 990) {
      if (badge1630) badge1630.textContent = "● COMPLETED";
    }
  };

  updateScheduleState();
  setInterval(updateScheduleState, 60000);
}

// =============================================================================
// 6. AMBIENT SPOOKY CANVAS (EMBERS & FLYING BATS)
// =============================================================================
function setupAmbientParticles() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Embers
  const particles = Array.from({ length: 35 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2 + 1,
    speedY: -(Math.random() * 0.8 + 0.3),
    speedX: (Math.random() - 0.5) * 0.5,
    opacity: Math.random() * 0.7 + 0.2,
    color: Math.random() > 0.5 ? '#ff5400' : '#a855f7'
  }));

  // Bats
  const bats = Array.from({ length: 3 }, () => ({
    x: Math.random() * width,
    y: Math.random() * (height * 0.4),
    speedX: Math.random() * 1.5 + 1,
    wingAngle: 0,
    size: Math.random() * 12 + 10
  }));

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Draw embers
    particles.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;

      if (p.y < 0) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.fill();
    });

    // Draw Bats
    ctx.shadowBlur = 0;
    bats.forEach(b => {
      b.x += b.speedX;
      b.wingAngle += 0.2;
      if (b.x > width + 50) {
        b.x = -50;
        b.y = Math.random() * (height * 0.35);
      }

      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.fillStyle = '#080410';
      ctx.globalAlpha = 0.45;

      // Simple silhouette bat
      const wingFlap = Math.sin(b.wingAngle) * (b.size * 0.4);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(-b.size * 0.6, -wingFlap, -b.size, 0);
      ctx.quadraticCurveTo(-b.size * 0.5, b.size * 0.3, 0, b.size * 0.2);
      ctx.quadraticCurveTo(b.size * 0.5, b.size * 0.3, b.size, 0);
      ctx.quadraticCurveTo(b.size * 0.6, -wingFlap, 0, 0);
      ctx.fill();
      ctx.restore();
    });

    requestAnimationFrame(draw);
  }

  draw();
}

// =============================================================================
// 7. CONFETTI CELEBRATION ENGINE
// =============================================================================
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettiPieces = Array.from({ length: 80 }, () => ({
    x: canvas.width / 2,
    y: canvas.height / 2,
    vx: (Math.random() - 0.5) * 14,
    vy: (Math.random() - 0.7) * 16,
    color: ['#ff5400', '#ffb703', '#a855f7', '#00f5d4', '#ffffff'][Math.floor(Math.random() * 5)],
    size: Math.random() * 8 + 4,
    rotation: Math.random() * 360,
    rotSpeed: (Math.random() - 0.5) * 12,
    alpha: 1
  }));

  const startTime = performance.now();
  function render(now) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    confettiPieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.rotation += p.rotSpeed;
      p.alpha -= 0.012;

      if (p.alpha > 0) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
        ctx.restore();
      }
    });

    if (alive && (now - startTime < 3500)) {
      requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  requestAnimationFrame(render);
}

// Toast notification helper
function showToastNotification(msg) {
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-6 right-6 z-50 glass-panel-elevated py-3 px-5 text-sm font-bold text-white border border-orange-500/50 shadow-2xl transition duration-300 transform translate-y-4 opacity-0 flex items-center gap-3';
  toast.innerHTML = `<span>🎃</span> <span>${msg}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  }, 50);

  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

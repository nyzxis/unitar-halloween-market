/**
 * UNITAR Halloween Event 2026 - Prop and Pop Market
 * Interactive Wayfinding Engine, Digital Passport, Pan-Zoom, Spooky Synthesizer & Smooth Nav
 */

// =============================================================================
// 1. SLEEK SVG ICONS (REPLACING ALL EMOJIS)
// =============================================================================
const SVG_ICONS = {
  ghost: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 10h.01M15 10h.01M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/></svg>`,
  map: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>`,
  compass: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  store: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/></svg>`,
  passport: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/><circle cx="12" cy="15" r="2"/></svg>`,
  stamp: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 22h14"/><path d="M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11a2.5 2.5 0 0 0-1.77.73l-1.46 1.46A1 1 0 0 0 4 17v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2a1 1 0 0 0-.27-.71l-1.46-1.46Z"/><path d="M14 13V8.5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2V13"/></svg>`,
  check: `<svg class="w-3.5 h-3.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  clock: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  target: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  sparkles: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  soundOn: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,
  soundOff: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,
  tag: `<svg class="w-3.5 h-3.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><circle cx="7" cy="7" r=".5" fill="currentColor"/></svg>`,
  gift: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/></svg>`,
  chevronRight: `<svg class="w-3.5 h-3.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`
};

// =============================================================================
// 2. COMPLETE BOOTH DATASET (EVERY CONTACT NUMBER REMOVED)
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
    cx: 148,
    cy: 85,
    path: "514,602 514,200 148,200 148,100",
    directions: "Enter through Main Entrance, walk up central corridor past the left Lift, turn left into Top Corridor to B01."
  },
  {
    id: "B02",
    name: "BLOOM & CO",
    category: "Florist",
    owner: "Vainishini Sankar",
    section: "MC-S2",
    zone: "Top Corridor",
    cx: 230,
    cy: 85,
    path: "514,602 514,200 230,200 230,100",
    directions: "Walk past the Lifts toward the top corridor, turn left, and B02 is right next to B01."
  },
  {
    id: "B03",
    name: "KITTY KRAFT",
    category: "Women Accessories",
    owner: "Theeveeya Shankar Ganesh",
    section: "MC-S2",
    zone: "Top Corridor",
    cx: 250,
    cy: 145,
    path: "514,602 514,200 250,200 250,160",
    directions: "Walk past the Lifts, turn left after the Escalator into row 2 of the top corridor."
  },
  {
    id: "B04",
    name: "IYAL JEWELLERY",
    category: "Jewelleries",
    owner: "Ooi Shun Jie Puvendran",
    section: "MC-S2",
    zone: "Top Corridor",
    cx: 166,
    cy: 145,
    path: "514,602 514,200 166,200 166,160",
    directions: "Head past the Lifts, turn left toward Escalator; B04 is right next to B03."
  },
  {
    id: "B05",
    name: "STUDYMATE STATIONERY",
    category: "Stationeries & Jerseys",
    owner: "Shritharan",
    section: "MC-S2",
    zone: "Top Corridor",
    cx: 315,
    cy: 85,
    path: "514,602 514,185 315,185 315,100",
    directions: "Walk straight between the two Lifts toward the One Stop Centre back wall."
  },
  {
    id: "B06",
    name: "PHOTO BOOTH",
    category: "Photography",
    owner: "Shawin",
    section: "MC-S2",
    zone: "Top Corridor",
    cx: 405,
    cy: 85,
    path: "514,602 514,185 405,185 405,100",
    directions: "Walk past Lifts and head slightly left to the top row in front of One Stop Centre."
  },
  {
    id: "B07",
    name: "PB & JL",
    category: "Keychains, Charms, Pins",
    owner: "Louiis Fernandez",
    section: "MC-S2",
    zone: "Top Corridor",
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
    cx: 445,
    cy: 145,
    path: "514,602 514,200 445,200 445,160",
    directions: "Walk between the two Lifts; B09 is directly ahead in row 2."
  },
  {
    id: "B10",
    name: "ROSE2U",
    category: "Florist",
    owner: "Lawnesh",
    section: "MC-S2",
    zone: "Top Corridor",
    cx: 540,
    cy: 145,
    path: "514,602 514,200 540,200 540,160",
    directions: "Walk between the Lifts; B10 is directly ahead in the lower row."
  },
  {
    id: "B11",
    name: "CHARMORA STUDIO",
    category: "Toys, Keychains",
    owner: "Nurdini Alya Najwa",
    section: "MC-S2",
    zone: "Top Corridor",
    cx: 600,
    cy: 85,
    path: "514,602 514,185 600,185 600,100",
    directions: "Walk past the right Lift to top row in front of International Student Office."
  },
  {
    id: "B12",
    name: "HENNA HERITAGE",
    category: "Body Art",
    owner: "Shashmita",
    section: "MC-S2",
    zone: "Top Corridor",
    cx: 635,
    cy: 145,
    path: "514,602 514,200 635,200 635,160",
    directions: "Head past the right Lift and slightly right to reach B12 at end of top corridor."
  },
  {
    id: "B14",
    name: "ACCESSORIZE",
    category: "Accessories",
    owner: "Aila Naazneen",
    section: "MC-S2",
    zone: "Middle Hub",
    cx: 675,
    cy: 217,
    path: "514,602 514,450 700,450 700,220 686,220",
    directions: "Walk to Middle Hub Entrance on your right, step inside, and walk to B14."
  },

  // --- MC-S3: Middle Hub Zone (B15 - B20) ---
  {
    id: "B15",
    name: "MIRROR ART & CO",
    category: "Hand Mirror For Décor",
    owner: "Hirosha",
    section: "MC-S3",
    zone: "Middle Hub",
    cx: 675,
    cy: 267,
    path: "514,602 514,450 700,450 700,270 686,270",
    directions: "Turn right at Middle Hub Entrance before Lift, enter zone, find B15 on left aisle."
  },
  {
    id: "B16",
    name: "TRISSORIES",
    category: "Lanyard, Plushies",
    owner: "Krishan",
    section: "MC-S3",
    zone: "Middle Hub",
    cx: 675,
    cy: 319,
    path: "514,602 514,450 700,450 700,322 686,322",
    directions: "Turn right into Middle Hub Entrance; find B16 second from bottom on left partition."
  },
  {
    id: "B17",
    name: "AURORA",
    category: "Candles, Earrings",
    owner: "Nirmala Dhevi",
    section: "MC-S3",
    zone: "Middle Hub",
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
    cx: 725,
    cy: 246,
    path: "514,602 514,450 700,450 700,249 714,249",
    directions: "Turn right into Middle Hub Entrance and walk up central aisle to B18 on right."
  },
  {
    id: "B19",
    name: "THREE BROTHERS",
    category: "Keychains",
    owner: "Arunn",
    section: "MC-S3",
    zone: "Middle Hub",
    cx: 725,
    cy: 301,
    path: "514,602 514,450 700,450 700,304 714,304",
    directions: "Turn right into Middle Hub Entrance; B19 is in middle row on right partition."
  },
  {
    id: "B20",
    name: "SPOOKY POP-UP BOOTH",
    category: "Special Event Booth",
    owner: "UNITAR Student Committee",
    section: "MC-S3",
    zone: "Middle Hub",
    cx: 725,
    cy: 355,
    path: "514,602 514,450 700,450 700,358 714,358",
    directions: "Turn right into Middle Hub Entrance; B20 is first booth on right partition."
  },

  // --- HUB Activity & Games (G1 - G3) ---
  {
    id: "G1",
    name: "Activity & Registration G1",
    category: "Hub Activity Booth",
    owner: "Event Committee",
    section: "HUB",
    zone: "Middle Hub",
    cx: 791,
    cy: 227,
    path: "514,602 514,450 765,450 765,230 780,230",
    directions: "From Main Entrance, turn right toward Registration table inside Middle Hub enclosure."
  },
  {
    id: "G2",
    name: "Activity & Registration G2",
    category: "Hub Activity Booth",
    owner: "Event Committee",
    section: "HUB",
    zone: "Middle Hub",
    cx: 791,
    cy: 283,
    path: "514,602 514,450 765,450 765,286 780,286",
    directions: "Turn right into Middle Hub enclosure past Register counter to reach G2."
  },
  {
    id: "G3",
    name: "Activity & Registration G3",
    category: "Hub Activity Booth",
    owner: "Event Committee",
    section: "HUB",
    zone: "Middle Hub",
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
    cx: 739,
    cy: 532,
    path: "514,602 514,465 895,465 895,560 736,560 736,542",
    directions: "Turn right toward UNITAR Hub 'IN' entrance; BFINTECH is in top row."
  },
  {
    id: "BAF",
    name: "Bachelor of Accounting & Finance",
    category: "Academic Passport (2:15 PM)",
    owner: "Faculty of Business",
    section: "HUB",
    zone: "Academic Hub",
    cx: 792,
    cy: 532,
    path: "514,602 514,465 895,465 895,560 789,560 789,542",
    directions: "Turn right toward UNITAR Hub 'IN' lane; BA&F is in middle of top row."
  },
  {
    id: "BACC",
    name: "Bachelor of Accounting",
    category: "Academic Passport (2:15 PM)",
    owner: "Faculty of Business",
    section: "HUB",
    zone: "Academic Hub",
    cx: 845,
    cy: 532,
    path: "514,602 514,465 895,465 895,560 843,560 843,542",
    directions: "Head right to UNITAR Hub 'IN' entrance; BACC is first booth on right top row."
  },
  {
    id: "BBA",
    name: "Bachelor of Business Admin",
    category: "Academic Passport (2:15 PM)",
    owner: "Faculty of Business",
    section: "HUB",
    zone: "Academic Hub",
    cx: 739,
    cy: 604,
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
    cx: 792,
    cy: 604,
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
    cx: 845,
    cy: 604,
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
    cx: 660,
    cy: 564,
    path: "514,602 514,465 895,465 895,565 678,565",
    directions: "Walk forward from Main Entrance, turn right down walkway past Photo Stand to Stage."
  },
  {
    id: "PHOTO",
    name: "HALLOWEEN PHOTO STAND",
    category: "Photo Spot",
    owner: "Prop & Pop Committee",
    section: "HUB",
    zone: "Middle Hub",
    cx: 840,
    cy: 461,
    path: "514,602 514,465 815,465",
    directions: "Walk slightly up and turn right; Photo Stand is between Middle Hub and Level G Stage."
  },
  {
    id: "GIFT",
    name: "PASSPORT GIFT REDEMPTION",
    category: "Passport Gift Counter",
    owner: "Event Committee",
    section: "HUB",
    zone: "Academic Hub",
    cx: 955,
    cy: 521,
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
    cx: 955,
    cy: 569,
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
    cx: 955,
    cy: 617,
    path: "514,602 514,465 895,465 895,618 945,618",
    directions: "Located at bottom-right corner inside UNITAR Hub Level G."
  }
];

// =============================================================================
// 3. ENRICHED SPOOKY SOUND SYNTHESIZER (WEB AUDIO API)
// =============================================================================
class SpookySoundSystem {
  constructor() {
    this.ctx = null;
    this.isMuted = localStorage.getItem('unitar_halloween_muted') === 'true';
    this.droneNodes = null;
    this.chimeTimer = null;
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
    this.init();
    this.isMuted = !this.isMuted;
    localStorage.setItem('unitar_halloween_muted', this.isMuted);

    if (this.isMuted) {
      this.stopDrone();
    } else {
      this.startDrone();
      this.playNavSound();
    }
    return this.isMuted;
  }

  // Atmospheric ambient spooky drone with low-frequency sweep
  startDrone() {
    if (this.isMuted || !this.ctx || this.droneNodes) return;
    try {
      const now = this.ctx.currentTime;

      // Base oscillators
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const masterGain = this.ctx.createGain();

      // Deep, eerie bass chords
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(50.0, now); // Low G# / A drone

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(75.0, now); // Fifth harmonic

      // Resonant Lowpass Filter with slow LFO modulation
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(220, now);
      filter.Q.setValueAtTime(4.0, now);

      // Filter LFO to mimic eerie breathing wind
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.12, now); // Very slow 8-second cycle
      lfoGain.gain.setValueAtTime(90, now);
      lfo.connect(filter.frequency);
      lfo.start(now);

      masterGain.gain.setValueAtTime(0.0001, now);
      masterGain.gain.exponentialRampToValueAtTime(0.045, now + 2.5);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(masterGain);
      masterGain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);

      this.droneNodes = { osc1, osc2, lfo, filter, masterGain };

      // Schedule periodic haunting bell chimes
      this.startRandomChimes();
    } catch (e) {
      console.warn("Spooky drone startup exception:", e);
    }
  }

  stopDrone() {
    if (this.droneNodes && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.droneNodes.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
        setTimeout(() => {
          if (this.droneNodes) {
            try {
              this.droneNodes.osc1.stop();
              this.droneNodes.osc2.stop();
              this.droneNodes.lfo.stop();
            } catch (e) {}
            this.droneNodes = null;
          }
        }, 850);
      } catch (e) {
        this.droneNodes = null;
      }
    }
    if (this.chimeTimer) {
      clearInterval(this.chimeTimer);
      this.chimeTimer = null;
    }
  }

  // Periodic subtle mystical chime in the background
  startRandomChimes() {
    if (this.chimeTimer) clearInterval(this.chimeTimer);
    this.chimeTimer = setInterval(() => {
      if (!this.isMuted && this.ctx && this.droneNodes) {
        const notes = [440, 523.25, 587.33, 659.25, 783.99, 880];
        const pitch = notes[Math.floor(Math.random() * notes.length)];
        this.playGhostChime(pitch);
      }
    }, 7500);
  }

  playGhostChime(freq) {
    if (this.isMuted || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.025, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 2.9);
  }

  // Rewarding chime on stamp collect
  playStampSound() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;

    // 1. Tactile stamp thud
    const thudOsc = this.ctx.createOscillator();
    const thudGain = this.ctx.createGain();
    thudOsc.type = 'triangle';
    thudOsc.frequency.setValueAtTime(120, now);
    thudOsc.frequency.exponentialRampToValueAtTime(35, now + 0.12);
    thudGain.gain.setValueAtTime(0.15, now);
    thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    thudOsc.connect(thudGain);
    thudGain.connect(this.ctx.destination);
    thudOsc.start(now);
    thudOsc.stop(now + 0.13);

    // 2. High sparkle chime
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);

      gain.gain.setValueAtTime(0, now + idx * 0.05);
      gain.gain.linearRampToValueAtTime(0.09, now + idx * 0.05 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.45);
    });
  }

  // Spectral whoosh when path illuminates
  playPathSound() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(740, now + 0.3);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.5);
  }

  // Smooth nav blip
  playNavSound() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(240, now + 0.08);

    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);
  }

  // Grand celebration fanfare on milestone
  playVictorySound() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const chords = [
      { t: 0.0, f: [392.00, 493.88, 587.33] },
      { t: 0.18, f: [440.00, 554.37, 659.25] },
      { t: 0.36, f: [493.88, 622.25, 739.99] },
      { t: 0.6, f: [587.33, 739.99, 880.00, 1174.66] }
    ];

    chords.forEach(chord => {
      chord.f.forEach(freq => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + chord.t);

        gain.gain.setValueAtTime(0, now + chord.t);
        gain.gain.linearRampToValueAtTime(0.07, now + chord.t + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + chord.t + 0.7);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + chord.t);
        osc.stop(now + chord.t + 0.75);
      });
    });
  }

  // Iconic procedural Rickroll synthesizer riff ("Never Gonna Give You Up")
  playRickroll() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const notes = [
      { t: 0.0, f: 392.00, d: 0.12 }, // G4
      { t: 0.15, f: 440.00, d: 0.12 }, // A4
      { t: 0.30, f: 523.25, d: 0.15 }, // C5
      { t: 0.48, f: 440.00, d: 0.15 }, // A4
      { t: 0.66, f: 659.25, d: 0.28 }, // E5
      { t: 0.96, f: 659.25, d: 0.28 }, // E5
      { t: 1.28, f: 587.33, d: 0.45 }, // D5
      // Never gonna let you down
      { t: 1.80, f: 392.00, d: 0.12 }, // G4
      { t: 1.95, f: 440.00, d: 0.12 }, // A4
      { t: 2.10, f: 523.25, d: 0.15 }, // C5
      { t: 2.28, f: 440.00, d: 0.15 }, // A4
      { t: 2.46, f: 587.33, d: 0.28 }, // D5
      { t: 2.76, f: 587.33, d: 0.28 }, // D5
      { t: 3.08, f: 523.25, d: 0.55 }  // C5
    ];

    notes.forEach(note => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(note.f, now + note.t);

      gain.gain.setValueAtTime(0, now + note.t);
      gain.gain.linearRampToValueAtTime(0.09, now + note.t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + note.t + note.d);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + note.t);
      osc.stop(now + note.t + note.d + 0.05);
    });
  }
}

const soundSystem = new SpookySoundSystem();

// =============================================================================
// 4. SVG PAN & ZOOM ENGINE (WITH MOBILE ADAPTIVE FIT)
// =============================================================================
class SvgPanZoom {
  constructor(viewportEl, svgEl) {
    this.viewport = viewportEl;
    this.svg = svgEl;

    this.scale = 1;
    this.minScale = 0.3;
    this.maxScale = 3.5;

    this.panX = 0;
    this.panY = 0;

    this.isDragging = false;
    this.startX = 0;
    this.startY = 0;

    this.initialPinchDistance = null;
    this.initialScale = 1;

    this.init();
  }

  fitToScreen(animated = false) {
    const rect = this.viewport.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    // Floor plan is 1000x650
    const scaleX = rect.width / 1000;
    const scaleY = rect.height / 650;
    const fitScale = Math.min(scaleX, scaleY) * 0.96;

    this.minScale = Math.max(0.2, fitScale * 0.75);
    this.maxScale = Math.max(3.5, fitScale * 4);

    const targetScale = fitScale;
    const targetPanX = (rect.width - 1000 * targetScale) / 2;
    const targetPanY = (rect.height - 650 * targetScale) / 2;

    if (animated) {
      this.animateTo(targetScale, targetPanX, targetPanY);
    } else {
      this.scale = targetScale;
      this.panX = targetPanX;
      this.panY = targetPanY;
      this.applyTransform();
    }
  }

  init() {
    requestAnimationFrame(() => {
      this.fitToScreen(false);
    });

    window.addEventListener('resize', () => {
      if (this.scale <= this.minScale * 1.3) {
        this.fitToScreen(false);
      }
    });

    // Mouse Drag
    this.viewport.addEventListener('mousedown', (e) => {
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

    // Mouse Wheel
    this.viewport.addEventListener('wheel', (e) => {
      e.preventDefault();
      const rect = this.viewport.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const zoomFactor = e.deltaY < 0 ? 1.15 : 0.87;
      this.zoomAtPoint(zoomFactor, mouseX, mouseY);
    }, { passive: false });

    // Touch Handling (1-finger drag, 2-finger pinch)
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
      if (e.touches.length < 2) this.initialPinchDistance = null;
      if (e.touches.length === 0) this.isDragging = false;
    });

    // Double-tap or double-click to reset or focus
    this.viewport.addEventListener('dblclick', (e) => {
      if (this.scale > this.minScale * 1.5) {
        this.resetView();
      } else {
        const rect = this.viewport.getBoundingClientRect();
        this.zoomAtPoint(1.8, e.clientX - rect.left, e.clientY - rect.top);
      }
    });
  }

  getTouchDistance(t1, t2) {
    const dx = t1.clientX - t2.clientX;
    const dy = t1.clientY - t2.clientY;
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
    soundSystem.playNavSound();
  }

  zoomOut() {
    const rect = this.viewport.getBoundingClientRect();
    this.zoomAtPoint(0.8, rect.width / 2, rect.height / 2);
    soundSystem.playNavSound();
  }

  resetView() {
    this.fitToScreen(true);
    soundSystem.playNavSound();
  }

  centerOnEntrance() {
    this.flyToBooth(514, 602, 1.4);
    soundSystem.playNavSound();
  }

  flyToBooth(svgX, svgY, targetZoom = 1.6) {
    const rect = this.viewport.getBoundingClientRect();
    const baseZoom = Math.max(1.3, this.minScale * 2.5);
    const targetScale = Math.min(this.maxScale, Math.max(baseZoom, targetZoom));

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
      const ease = 1 - Math.pow(1 - progress, 3);

      this.scale = startScale + (newScale - startScale) * ease;
      this.panX = startPanX + (newPanX - startPanX) * ease;
      this.panY = startPanY + (newPanY - startPanY) * ease;

      this.applyTransform();

      if (progress < 1) requestAnimationFrame(step);
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
// 5. DIGITAL PASSPORT STATE MACHINE
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
      soundSystem.playNavSound();
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
    const total = this.getTotal();
    if (count === total) {
      soundSystem.playRickroll();
      launchConfetti();
      showToastNotification(`${SVG_ICONS.sparkles} 🏆 100% COMPLETE! All ${total} Stamps Collected! Click Redeem in Passport to Claim!`);
    } else if (count === 10 || count === 20) {
      soundSystem.playVictorySound();
      launchConfetti();
      showToastNotification(`${SVG_ICONS.sparkles} Progress: ${count} of ${total} Stamps Collected! Keep going!`);
    }
  }

  updateUI() {
    const count = this.getCount();
    const total = this.getTotal();
    const percentage = Math.round((count / total) * 100);

    const badgeCounter = document.getElementById('passport-badge-count');
    if (badgeCounter) badgeCounter.textContent = `${count} / ${total}`;

    const progressBar = document.getElementById('passport-progress-fill');
    if (progressBar) progressBar.style.width = `${percentage}%`;

    const progressText = document.getElementById('passport-progress-text');
    if (progressText) progressText.textContent = `${count} of ${total} (${percentage}%)`;

    const modalStatus = document.getElementById('passport-modal-status');
    if (modalStatus) {
      if (count === total) {
        modalStatus.innerHTML = `<span class="text-amber-300 font-extrabold">🎉 100% COMPLETE! All ${total} Stamps Collected! Click Redeem for the Grand Prize!</span>`;
      } else {
        modalStatus.textContent = `Collect all ${total} stamps to unlock the Legendary Mystery Prize! (${total - count} remaining)`;
      }
    }

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

    renderBoothCards();
    renderPassportGrid();
  }

  reset() {
    if (confirm("Reset all your collected Halloween stamps?")) {
      this.stamps.clear();
      this.save();
      this.updateUI();
      soundSystem.playNavSound();
      showToastNotification("Stamp card reset successfully.");
    }
  }
}

const passport = new DigitalPassport();

// =============================================================================
// 6. MAIN CONTROLLER & APPLICATION LIFECYCLE
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

  // Auto-init audio on first user touch/click anywhere
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

  // 4. Smooth Navigation & Active Highlights
  setupSmoothNavigation();
  setupActiveSectionObserver();

  // 5. Initial Renders
  passport.updateUI();
  setupSearchAndFilters();
  setupLiveTimeTicker();
  setupAmbientParticles();

  // 6. Select B01 by default with animated path
  setTimeout(() => {
    selectBooth('B01', false);
  }, 400);
});

// Update audio button icon and label
function updateMuteButtonDisplay(btn, isMuted) {
  if (isMuted) {
    btn.innerHTML = `${SVG_ICONS.soundOff} <span class="hidden sm:inline text-xs font-semibold">Sound Muted</span>`;
    btn.classList.remove('text-orange-400', 'border-orange-500/40', 'bg-orange-500/10');
    btn.classList.add('text-purple-300', 'border-purple-500/20');
  } else {
    btn.innerHTML = `${SVG_ICONS.soundOn} <span class="hidden sm:inline text-xs font-semibold">Spooky Audio On</span>`;
    btn.classList.add('text-orange-400', 'border-orange-500/40', 'bg-orange-500/10');
    btn.classList.remove('text-purple-300', 'border-purple-500/20');
  }
}

// Smooth scrolling with offset for sticky navigation
function setupSmoothNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').slice(1);
      if (!targetId) return;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        soundSystem.playNavSound();
        const headerOffset = 70;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Active navigation highlight observer (Fixes the issue where Passport was always highlighted on mobile)
function setupActiveSectionObserver() {
  const sections = [
    { id: 'map-section', navId: 'nav-map', mobileId: 'mobile-nav-map' },
    { id: 'directory-section', navId: 'nav-directory', mobileId: 'mobile-nav-directory' },
    { id: 'agenda-section', navId: 'nav-agenda', mobileId: 'mobile-nav-agenda' },
    { id: 'info-section', navId: 'nav-info', mobileId: 'mobile-nav-info' }
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const match = sections.find(s => s.id === entry.target.id);
        if (match) {
          // Clear active on desktop nav
          document.querySelectorAll('.desktop-nav-link').forEach(el => {
            el.classList.remove('bg-purple-900/60', 'text-white', 'text-orange-400');
            el.classList.add('text-purple-200');
          });
          const activeDesktop = document.getElementById(match.navId);
          if (activeDesktop) {
            activeDesktop.classList.add('bg-purple-900/60', 'text-orange-400');
            activeDesktop.classList.remove('text-purple-200');
          }

          // Clear active on mobile bottom nav
          document.querySelectorAll('.mobile-nav-item').forEach(el => {
            el.classList.remove('text-orange-400', 'bg-orange-500/15');
            el.classList.add('text-purple-300');
          });
          const activeMobile = document.getElementById(match.mobileId);
          if (activeMobile) {
            activeMobile.classList.add('text-orange-400', 'bg-orange-500/15');
            activeMobile.classList.remove('text-purple-300');
          }
        }
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => {
    const el = document.getElementById(s.id);
    if (el) observer.observe(el);
  });
}

// Select a booth, draw glowing path, and update details drawer
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

  // If on mobile (screen < 1024px) and triggered directly by user, gently scroll to panel
  if (triggerFly && window.innerWidth < 1024) {
    const detailsPanel = document.getElementById('booth-details-card');
    if (detailsPanel) {
      setTimeout(() => {
        detailsPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 250);
    }
  }

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

  const panelTitle = document.getElementById('panel-title');
  if (panelTitle) panelTitle.textContent = "Select Any Booth";
  const panelCategory = document.getElementById('panel-category');
  if (panelCategory) panelCategory.textContent = "Interactive Wayfinder";
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

// Populate the right-side details panel (NO CONTACT NUMBERS)
function updateBoothInfoPanel(booth) {
  const isStamped = passport.isStamped(booth.id);

  const panelBadge = document.getElementById('panel-badge');
  if (panelBadge) panelBadge.textContent = `BOOTH ${booth.id}`;

  const panelTitle = document.getElementById('panel-title');
  if (panelTitle) panelTitle.textContent = booth.name;

  const panelCategory = document.getElementById('panel-category');
  if (panelCategory) panelCategory.textContent = booth.category;

  const panelOwner = document.getElementById('panel-owner');
  if (panelOwner) panelOwner.textContent = booth.owner;

  const panelSection = document.getElementById('panel-section');
  if (panelSection) panelSection.textContent = `${booth.section} • ${booth.zone}`;

  const directionsText = document.getElementById('panel-directions');
  if (directionsText) directionsText.textContent = booth.directions;

  // Stamp Action in drawer
  const stampBtn = document.getElementById('panel-stamp-btn');
  if (stampBtn) {
    stampBtn.classList.remove('hidden');
    stampBtn.innerHTML = isStamped
      ? `${SVG_ICONS.check} <span>Stamped in Passport</span>`
      : `${SVG_ICONS.stamp} <span>Stamp this Booth</span>`;
    stampBtn.className = isStamped
      ? "w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 transition flex items-center justify-center gap-2"
      : "w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-orange-500/20 text-orange-300 border border-orange-500/40 hover:bg-orange-500/30 transition flex items-center justify-center gap-2";

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

      soundSystem.playNavSound();
      renderBoothCards();
    });
  });
}

// Render dynamic booth cards in directory (Clean layout, NO CONTACT NUMBERS, no text stacking)
function renderBoothCards() {
  const grid = document.getElementById('booth-grid');
  if (!grid) return;

  const searchInput = document.getElementById('booth-search');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  const filtered = BOOTHS_DATA.filter(booth => {
    let matchesFilter = false;
    if (currentFilter === 'ALL') matchesFilter = true;
    else if (currentFilter === 'MC-S2') matchesFilter = booth.section === 'MC-S2';
    else if (currentFilter === 'MC-S3') matchesFilter = booth.section === 'MC-S3';
    else if (currentFilter === 'ACADEMIC') matchesFilter = booth.zone === 'Academic Hub';
    else if (currentFilter === 'HUB') matchesFilter = booth.section === 'HUB';
    else if (currentFilter === 'STAMPED') matchesFilter = passport.isStamped(booth.id);
    else if (currentFilter === 'UNSTAMPED') matchesFilter = !passport.isStamped(booth.id);

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
        <p class="text-3xl mb-2 text-orange-400">${SVG_ICONS.ghost}</p>
        <p class="text-base font-bold text-white">No booths found</p>
        <p class="text-xs text-purple-400 mt-1">Try another search keyword or filter.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(booth => {
    const isSelected = booth.id === activeBoothId;
    const isStamped = passport.isStamped(booth.id);

    return `
      <div class="glass-panel p-4 relative group transition flex flex-col justify-between ${
        isSelected ? 'border-orange-500 shadow-[0_0_20px_rgba(255,84,0,0.3)] bg-purple-950/70' : ''
      }">
        <div>
          <!-- Top Row: Booth Number & Stamped Status -->
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="px-2 py-0.5 rounded-md text-[11px] font-black tracking-wider uppercase ${
              booth.section === 'HUB'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'bg-orange-500/20 text-orange-400 border border-orange-500/40'
            }">
              ${booth.id}
            </span>

            <button
              onclick="passport.toggleStamp('${booth.id}');"
              title="${isStamped ? 'Unmark Stamp' : 'Collect Stamp'}"
              class="text-[11px] px-2 py-0.5 rounded-full font-bold transition flex items-center gap-1 ${
                isStamped
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50'
                  : 'bg-white/5 text-purple-300 hover:text-white border border-white/10'
              }">
              ${isStamped ? `${SVG_ICONS.check} <span>Stamped</span>` : `<span>+ Stamp</span>`}
            </button>
          </div>

          <!-- Booth Name & Category (Truncated / Clean on Mobile) -->
          <h4 class="text-sm font-extrabold text-white group-hover:text-orange-300 transition truncate leading-tight" title="${booth.name}">
            ${booth.name}
          </h4>
          <p class="text-[11px] text-orange-300/90 font-medium truncate mt-0.5">
            ${booth.category}
          </p>

          <!-- Zone & Owner -->
          <div class="mt-2.5 pt-2 border-t border-purple-800/40 space-y-1 text-[11px] text-purple-200">
            <div class="flex items-center justify-between gap-2">
              <span class="text-purple-400 text-[10px] uppercase font-bold shrink-0">Owner:</span>
              <span class="font-medium truncate" title="${booth.owner}">${booth.owner}</span>
            </div>
            <div class="flex items-center justify-between gap-2">
              <span class="text-purple-400 text-[10px] uppercase font-bold shrink-0">Zone:</span>
              <span class="font-medium truncate">${booth.zone}</span>
            </div>
          </div>
        </div>

        <!-- Action Button -->
        <div class="mt-3 pt-2.5 border-t border-purple-800/30">
          <button
            onclick="selectBooth('${booth.id}', true); document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });"
            class="w-full py-1.5 px-3 rounded-lg bg-orange-500/20 hover:bg-orange-500 text-orange-300 hover:text-slate-950 border border-orange-500/40 text-xs font-bold transition flex items-center justify-center gap-1.5">
            ${SVG_ICONS.compass}
            <span>Show Route</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Render Passport Grid inside the Passport Modal (3 columns on mobile, clean SVG stamps)
function renderPassportGrid() {
  const container = document.getElementById('passport-slots-grid');
  if (!container) return;

  container.innerHTML = BOOTHS_DATA.map(booth => {
    const isStamped = passport.isStamped(booth.id);
    return `
      <div
        onclick="passport.toggleStamp('${booth.id}');"
        class="cursor-pointer p-2.5 rounded-xl border transition flex flex-col items-center justify-center text-center relative ${
          isStamped
            ? 'bg-emerald-950/40 border-emerald-500/50 shadow-[0_0_12px_rgba(0,245,212,0.15)]'
            : 'bg-purple-950/30 border-purple-800/40 hover:border-orange-500/40'
        }">
        <div class="stamp-seal mb-1.5 ${isStamped ? 'stamped' : ''}">
          <span class="text-xs ${isStamped ? 'text-emerald-300' : 'text-purple-400'}">
            ${isStamped ? SVG_ICONS.check : SVG_ICONS.stamp}
          </span>
        </div>
        <span class="text-[11px] font-black text-white leading-tight">${booth.id}</span>
        <span class="text-[9px] text-purple-300 truncate w-full mt-0.5">${booth.name}</span>
        <span class="text-[8px] mt-1 font-bold ${isStamped ? 'text-emerald-400' : 'text-purple-400'} uppercase">
          ${isStamped ? 'Collected' : 'Stamp'}
        </span>
      </div>
    `;
  }).join('');
}

// Modal open/close helpers (Fixes passport highlight on mobile: highlights bottom nav button ONLY when modal is active)
function openPassportModal() {
  const modal = document.getElementById('passport-modal');
  if (modal) {
    passport.updateUI();
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Highlight mobile passport item
    const mobilePassport = document.getElementById('mobile-nav-passport');
    if (mobilePassport) {
      mobilePassport.classList.add('text-orange-400', 'bg-orange-500/20');
      mobilePassport.classList.remove('text-purple-300');
    }
    soundSystem.playNavSound();
  }
}

function closePassportModal() {
  const modal = document.getElementById('passport-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';

    // Remove active highlight from mobile passport button
    const mobilePassport = document.getElementById('mobile-nav-passport');
    if (mobilePassport) {
      mobilePassport.classList.remove('text-orange-400', 'bg-orange-500/20');
      mobilePassport.classList.add('text-purple-300');
    }
    soundSystem.playNavSound();
  }
}

// Redeem Voucher modal (Rickroll 100% Quest Unlock)
function redeemPrize() {
  const count = passport.getCount();
  const total = passport.getTotal();

  if (count < total) {
    const remaining = total - count;
    alert(`🎃 QUEST INCOMPLETE!\n\nTo unlock the Grand Mystery Prize, you must collect EVERY single stamp across Level G (all ${total} booths & hubs)!\n\nYou currently have ${count} of ${total} stamps (${remaining} remaining).\n\nKeep exploring all student booths, degree hubs, and activity areas!`);
    return;
  }

  const voucherModal = document.getElementById('voucher-modal');
  const codeEl = document.getElementById('voucher-code');
  if (codeEl) {
    codeEl.textContent = `UPP-RICKROLL-${Math.floor(1000 + Math.random() * 9000)}`;
  }

  // Load YouTube Rickroll video
  const rickrollIframe = document.getElementById('rickroll-iframe');
  if (rickrollIframe) {
    rickrollIframe.src = "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0";
  }

  if (voucherModal) {
    voucherModal.classList.remove('hidden');
    launchConfetti();
    soundSystem.playRickroll();
  }
}

function closeVoucherModal() {
  const modal = document.getElementById('voucher-modal');
  if (modal) modal.classList.add('hidden');

  // Stop video playback by clearing iframe src
  const rickrollIframe = document.getElementById('rickroll-iframe');
  if (rickrollIframe) {
    rickrollIframe.src = "";
  }

  soundSystem.playNavSound();
}

// Setup real-time / event day schedule indicator
function setupLiveTimeTicker() {
  const updateScheduleState = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeVal = hours * 60 + minutes;

    const badge930 = document.getElementById('slot-badge-930');
    const badge1400 = document.getElementById('slot-badge-1400');
    const badge1415 = document.getElementById('slot-badge-1415');
    const badge1630 = document.getElementById('slot-badge-1630');

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
// 7. LIGHTWEIGHT AMBIENT PARTICLES (OPTIMIZED FOR MOBILE PERFORMANCE)
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

  // Fewer particles on mobile for 60fps buttery performance
  const particleCount = width < 768 ? 16 : 30;
  const particles = Array.from({ length: particleCount }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.8 + 0.8,
    speedY: -(Math.random() * 0.6 + 0.2),
    speedX: (Math.random() - 0.5) * 0.4,
    opacity: Math.random() * 0.6 + 0.2,
    color: Math.random() > 0.5 ? '#ff5400' : '#a855f7'
  }));

  function draw() {
    ctx.clearRect(0, 0, width, height);
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
      ctx.shadowBlur = 6;
      ctx.shadowColor = p.color;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  draw();
}

// =============================================================================
// 8. CONFETTI CELEBRATION ENGINE
// =============================================================================
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettiPieces = Array.from({ length: 70 }, () => ({
    x: canvas.width / 2,
    y: canvas.height / 2,
    vx: (Math.random() - 0.5) * 14,
    vy: (Math.random() - 0.7) * 15,
    color: ['#ff5400', '#ffb703', '#a855f7', '#00f5d4', '#ffffff'][Math.floor(Math.random() * 5)],
    size: Math.random() * 7 + 4,
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
      p.vy += 0.35;
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
function showToastNotification(htmlContent) {
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-50 glass-panel-elevated py-2.5 px-4 text-xs font-bold text-white border border-orange-500/50 shadow-2xl transition duration-300 transform translate-y-4 opacity-0 flex items-center gap-2 max-w-sm';
  toast.innerHTML = htmlContent;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  }, 50);

  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

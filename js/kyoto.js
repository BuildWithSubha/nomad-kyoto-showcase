// Kisen Ceramic Studio Kyoto — Interactive Engine

document.addEventListener('DOMContentLoaded', () => {
  initVesselInspector();
  initGlazeHotspots();
  initFiringTimeline();
  initAmbientSoundscape();
  initKyotoModal();
});

// 1. Interactive Vessel Curator
const VESSEL_DATA = {
  yakishime: {
    name: 'Kuro-Yakishime Chawan',
    kanji: '黒焼締茶碗 — Un-glazed Wood Fired Bowl',
    desc: 'Unglazed coarse Shigaraki mountain clay fired for 168 continuous hours in red pine embers. The deep charcoal surface is naturally glazed by melting pine ash deposits drifting through the Anagama kiln draft.',
    clay: 'Shigaraki Coarse Mountain Clay',
    glaze: 'Natural Akamatsu (Red Pine) Ash Glaze',
    temp: '1,290°C (Cone 11)',
    dimensions: 'Ø 12.8cm × H 8.4cm · 340g',
    image: 'assets/images/kyoto_chawan_solo.jpg'
  },
  shino: {
    name: 'Shino Hakeme Chawan',
    kanji: '志野刷毛目茶碗 — Feldspar & Iron Brush',
    desc: 'Thick white feldspathic snow glaze layered over rich iron-slip calligraphy brushwork. Microscopic pinholes in the glaze surface bloom with soft orange blush (Hiiro) during reduction firing.',
    clay: 'Mogusa Iron-Rich White Clay',
    glaze: 'High-Feldspar Natural Milky Glaze',
    temp: '1,240°C (Cone 9)',
    dimensions: 'Ø 13.2cm × H 8.1cm · 325g',
    image: 'assets/images/kyoto_chawan_solo.jpg'
  },
  tenmoku: {
    name: 'Tenmoku Oil-Spot Chawan',
    kanji: '天目油滴茶碗 — Iron Crystal Melt',
    desc: 'Heritage iron-saturated glaze fired at the thermal peak of the kiln. Iron oxide boils to the surface and crystalizes upon cooling into iridescent oil-spot constellations across the bowl interior.',
    clay: 'Fine Kyoto Kurama Black Clay',
    glaze: 'Natural Iron Rust & Feldspar Suspension',
    temp: '1,310°C (Cone 12)',
    dimensions: 'Ø 12.4cm × H 7.6cm · 295g',
    image: 'assets/images/kyoto_chawan_solo.jpg'
  },
  kyusu: {
    name: 'Iga Yakishime Kyusu',
    kanji: '伊賀焼締急須 — Side-Handle Teapot',
    desc: 'Ergonomically balanced side-handle kyusu with a hand-pierced ceramic ball filter. Raw clay surfaces absorb tea tannins over decades of use, deepening the vessel’s tactile patina.',
    clay: 'Iga Ancient Lake-bed Clay',
    glaze: 'Unglazed Biidoro Glass Droplets',
    temp: '1,280°C (Cone 10)',
    dimensions: '320ml Capacity · Hand-Carved Spout',
    image: 'assets/images/kyoto_chawan_solo.jpg'
  }
};

function initVesselInspector() {
  const tabButtons = document.querySelectorAll('.vessel-tab-btn');
  const vesselName = document.getElementById('vesselName');
  const vesselKanji = document.getElementById('vesselKanji');
  const vesselDesc = document.getElementById('vesselDesc');
  const vesselClay = document.getElementById('vesselClay');
  const vesselGlaze = document.getElementById('vesselGlaze');
  const vesselTemp = document.getElementById('vesselTemp');
  const vesselDimensions = document.getElementById('vesselDimensions');
  const vesselImg = document.getElementById('vesselImage');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const vesselKey = btn.getAttribute('data-vessel');
      const data = VESSEL_DATA[vesselKey];
      if (!data) return;

      if (vesselName) vesselName.textContent = data.name;
      if (vesselKanji) vesselKanji.textContent = data.kanji;
      if (vesselDesc) vesselDesc.textContent = data.desc;
      if (vesselClay) vesselClay.textContent = data.clay;
      if (vesselGlaze) vesselGlaze.textContent = data.glaze;
      if (vesselTemp) vesselTemp.textContent = data.temp;
      if (vesselDimensions) vesselDimensions.textContent = data.dimensions;
      
      // subtle image reload feedback
      if (vesselImg) {
        vesselImg.style.opacity = '0.5';
        setTimeout(() => {
          vesselImg.src = data.image;
          vesselImg.style.opacity = '1';
        }, 150);
      }
    });
  });
}

// 2. Glaze Detail Hotspots
const GLAZE_NOTES = {
  ash: 'Natural Ash Glaze (Biidoro): Airborne red pine ash deposits melt at 1280°C into spontaneous olive-green glass pools.',
  flame: 'Flame Scorch (Hiiro / Fire-Flash): Where direct kiln draft tongues hit the raw clay, iron blooms into warm ember-orange hues.',
  foot: 'Kodai Foot Rim: Left unglazed to reveal the raw mineral grain of Kyoto mountain clay and the artisan’s carved seal.',
  rim: 'Wabi-Sabi Lip: Intentionally undulated rim shaped to rest comfortably against the lips during the tea ceremony.'
};

function initGlazeHotspots() {
  const hotspots = document.querySelectorAll('.glaze-hotspot');
  const noteBox = document.getElementById('glazeFeatureNote');

  hotspots.forEach(spot => {
    spot.addEventListener('click', () => {
      hotspots.forEach(s => s.classList.remove('active'));
      spot.classList.add('active');

      const spotType = spot.getAttribute('data-spot');
      if (noteBox && GLAZE_NOTES[spotType]) {
        noteBox.textContent = GLAZE_NOTES[spotType];
      }
    });
  });
}

// 3. 7-Day Anagama Firing Timeline Scrubber
const TIMELINE_DATA = {
  day1: {
    temp: '450°C',
    phase: 'Water Smoke & Slow Moisture Release',
    notes: 'Gentle wood feeding with small split pine kindling. The kiln chamber is kept below 500°C for 36 hours to slowly purge residual chemical moisture from the clay walls without explosive steam cracking.'
  },
  day3: {
    temp: '920°C',
    phase: 'Carbon Sintering & Heavy Reduction',
    notes: 'Primary air flues are restricted to create a heavy oxygen-depleted (reduction) atmosphere. Carbon and mineral iron in the clay interact, darkening the clay body and pulling deep ochre tones to the surface.'
  },
  day5: {
    temp: '1,240°C',
    phase: 'Ash Vitrification & Ember Melting',
    notes: 'Pine logs are fed in 3-minute intervals around the clock. Volatile wood ash floats through the chamber, fusing with silica in the clay to form unglazed crystalline glaze pools (Biidoro).'
  },
  day7: {
    temp: '1,310°C',
    phase: 'Thermal Peak & Kiln Sealing',
    notes: 'Maximum temperature is reached. The firebox is packed with aged red pine charcoal and the flue dampers are hermetically mudded shut with clay to lock in the atmosphere.'
  },
  day10: {
    temp: '180°C',
    phase: 'Slow Annealing & Unloading',
    notes: '7 days of natural cooling allow crystals in the glaze to form without thermal shock. Once the kiln reaches safe handling temperature, the chamber is opened to reveal each one-of-a-kind vessel.'
  }
};

function initFiringTimeline() {
  const dayCards = document.querySelectorAll('.timeline-day-card');
  const tempDisplay = document.getElementById('kilnTempDisplay');
  const phaseBadge = document.getElementById('kilnPhaseBadge');
  const detailsBox = document.getElementById('firingPhaseDetails');

  dayCards.forEach(card => {
    card.addEventListener('click', () => {
      dayCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const dayKey = card.getAttribute('data-day');
      const data = TIMELINE_DATA[dayKey];
      if (!data) return;

      if (tempDisplay) tempDisplay.textContent = data.temp;
      if (phaseBadge) phaseBadge.textContent = data.phase;
      if (detailsBox) detailsBox.textContent = data.notes;
    });
  });
}

// 4. Ambient Tearoom Soundscape (Web Audio API)
let audioCtx = null;
let isAudioPlaying = false;
let ambientInterval = null;

function initAmbientSoundscape() {
  const audioBtn = document.getElementById('ambientAudioToggle');
  if (!audioBtn) return;

  function playWaterChime() {
    if (!audioCtx) return;
    
    // Create gentle tranquil bell resonance
    const freqs = [528, 792, 1056, 1320, 1584];
    const baseFreq = freqs[Math.floor(Math.random() * freqs.length)];
    
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, audioCtx.currentTime);

    gainNode.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.04, audioCtx.currentTime + 0.08);
    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 3.5);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 3.6);
  }

  audioBtn.addEventListener('click', () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (!isAudioPlaying) {
      isAudioPlaying = true;
      audioBtn.classList.add('active');
      audioBtn.innerHTML = '<span>🔊</span> Ambient Sound: On';
      playWaterChime();
      ambientInterval = setInterval(() => {
        if (isAudioPlaying) playWaterChime();
      }, 4200);
    } else {
      isAudioPlaying = false;
      audioBtn.classList.remove('active');
      audioBtn.innerHTML = '<span>🔇</span> Tearoom Ambiance';
      if (ambientInterval) clearInterval(ambientInterval);
    }
  });
}

// 5. Kyoto Reservation & Allocation Modal
function initKyotoModal() {
  const modal = document.getElementById('kyotoModal');
  const openBtns = document.querySelectorAll('.js-open-kyoto-modal');
  const closeBtn = document.getElementById('closeKyotoModal');
  const form = document.getElementById('kyotoInquiryForm');
  const confirmMsg = document.getElementById('kyotoConfirmMsg');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = 'none';
      if (confirmMsg) confirmMsg.style.display = 'block';
    });
  }
}

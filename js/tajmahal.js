// Taj Mahal — Royal Mughal Heritage Interactive Engine

document.addEventListener('DOMContentLoaded', () => {
  initTimeOfDayLighting();
  initPietraDuraLoupe();
  initTanpuraSoundscape();
  initTajModal();
});

// 1. Time of Day Lighting Simulator
const LIGHTING_MODES = {
  dawn: {
    name: 'Dawn Sunlight (06:00 AM)',
    desc: 'The translucent Makrana marble catches the first soft rays of morning sun, blushing with delicate tones of rose quartz, pale amber, and pearl pink across the reflection pool.',
    image: 'assets/images/taj_hero_sunrise.jpg',
    themeClass: 'light-dawn'
  },
  noon: {
    name: 'Midday Brilliance (12:00 PM)',
    desc: 'Under the high zenith sun, the Taj Mahal radiates an incandescent, crystalline white against a vibrant cobalt sky, revealing the surgical precision of its relief carvings.',
    image: 'assets/images/taj_hero_sunrise.jpg',
    themeClass: 'light-noon'
  },
  sunset: {
    name: 'Sunset Glow (06:30 PM)',
    desc: 'As the sun descends behind the Yamuna river, the marble transforms into molten gold and deep saffron-bronze, echoing the warm glow of Mughal court lanterns.',
    image: 'assets/images/taj_hero_sunrise.jpg',
    themeClass: 'light-sunset'
  },
  night: {
    name: 'Full Moon Nocturne (11:00 PM)',
    desc: 'Bathed in ethereal silver-blue moonlight, the white marble luminesces mysteriously against the midnight starry sky and the glassy, dark current of the Yamuna River.',
    image: 'assets/images/taj_night_moonlight.jpg',
    themeClass: 'light-night'
  }
};

function initTimeOfDayLighting() {
  const buttons = document.querySelectorAll('.time-light-btn');
  const heroImg = document.getElementById('tajHeroImg');
  const descBox = document.getElementById('timeLightDesc');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const modeKey = btn.getAttribute('data-time');
      const data = LIGHTING_MODES[modeKey];
      if (!data) return;

      // Update body theme classes
      document.body.classList.remove('light-dawn', 'light-noon', 'light-sunset', 'light-night');
      document.body.classList.add(data.themeClass);

      if (descBox) {
        descBox.textContent = data.desc;
      }

      if (heroImg) {
        heroImg.style.opacity = '0.4';
        setTimeout(() => {
          heroImg.src = data.image;
          heroImg.style.opacity = '1';
        }, 200);
      }
    });
  });
}

// 2. Interactive Pietra Dura Gemstone Loupe
const GEMSTONE_DATA = {
  lapis: {
    name: 'Lapis Lazuli (Lajward)',
    origin: 'Badakhshan, Afghanistan',
    desc: 'Precious deep ultramarine blue stone with microscopic golden pyrite flecks. Master artisans cut thin slivers into curved flower petals, creating the iconic royal blue floral sprays along the tomb archways.'
  },
  malachite: {
    name: 'Malachite (Dāna-e-Farang)',
    origin: 'Ural Mountains & Burma',
    desc: 'Vivid banded emerald-green copper carbonate mineral. Sculpted into delicate flowing vine leaves and calyxes, imparting botanical realism into the cold white marble.'
  },
  carnelian: {
    name: 'Carnelian (Aqīq)',
    origin: 'Yemen & Cambay (Gujarat)',
    desc: 'Translucent fiery red and honey-orange quartz. Ground and polished to catch candlelight and direct sunshine, glowing with warmth from deep inside the marble wall.'
  },
  marble: {
    name: 'Makrana Calcite Marble (Sang-e-Marmar)',
    origin: 'Makrana, Nagaur, Rajasthan',
    desc: 'Pure crystalline metamorphic limestone containing 98% calcium carbonate. Known for high translucency — light penetrates up to 2 inches beneath the surface, giving the monument its radiant inner glow.'
  }
};

function initPietraDuraLoupe() {
  const hotspots = document.querySelectorAll('.gem-hotspot');
  const gemName = document.getElementById('gemNameHeading');
  const gemOrigin = document.getElementById('gemOriginBadge');
  const gemDesc = document.getElementById('gemDescP');

  hotspots.forEach(spot => {
    spot.addEventListener('click', () => {
      hotspots.forEach(s => s.classList.remove('active'));
      spot.classList.add('active');

      const gemKey = spot.getAttribute('data-gem');
      const data = GEMSTONE_DATA[gemKey];
      if (!data) return;

      if (gemName) gemName.textContent = data.name;
      if (gemOrigin) gemOrigin.textContent = data.origin;
      if (gemDesc) gemDesc.textContent = data.desc;
    });
  });
}

// 3. Indian Classical Tanpura Harmonic Drone (Web Audio API)
let audioCtx = null;
let isDronePlaying = false;
let droneOscillators = [];
let droneGain = null;

function initTanpuraSoundscape() {
  const audioBtn = document.getElementById('tanpuraAudioToggle');
  if (!audioBtn) return;

  function startTanpuraDrone() {
    // Tanpura Sa-Pa fundamental frequencies (C#3 / 138.59 Hz, Pa / 207.65 Hz)
    const baseFreqs = [138.59, 207.65, 277.18, 554.37];
    
    droneGain = audioCtx.createGain();
    droneGain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    droneGain.gain.linearRampToValueAtTime(0.035, audioCtx.currentTime + 2.0);
    droneGain.connect(audioCtx.destination);

    droneOscillators = baseFreqs.map(freq => {
      const osc = audioCtx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, audioCtx.currentTime);

      osc.connect(filter);
      filter.connect(droneGain);
      osc.start();
      return osc;
    });
  }

  function stopTanpuraDrone() {
    if (droneGain) {
      droneGain.gain.linearRampToValueAtTime(0.00001, audioCtx.currentTime + 0.8);
      setTimeout(() => {
        droneOscillators.forEach(osc => osc.stop());
        droneOscillators = [];
      }, 850);
    }
  }

  audioBtn.addEventListener('click', () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (!isDronePlaying) {
      isDronePlaying = true;
      audioBtn.classList.add('active');
      audioBtn.innerHTML = '<span>🔊</span> Tanpura Drone: Active';
      startTanpuraDrone();
    } else {
      isDronePlaying = false;
      audioBtn.classList.remove('active');
      audioBtn.innerHTML = '<span>🔇</span> Tanpura Ambiance';
      stopTanpuraDrone();
    }
  });
}

// 4. Full Moon Viewing & Heritage Walk Modal
function initTajModal() {
  const modal = document.getElementById('tajModal');
  const openBtns = document.querySelectorAll('.js-open-taj-modal');
  const closeBtn = document.getElementById('closeTajModal');
  const form = document.getElementById('tajInquiryForm');
  const confirmMsg = document.getElementById('tajConfirmMsg');

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

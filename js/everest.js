// Mount Everest & Himalayan Mountaineering — Interactive Engine

document.addEventListener('DOMContentLoaded', () => {
  initAltitudeRouteScrubber();
  initClimberGallery();
  initHimalayanSoundscape();
  initEverestModal();
});

// 1. Altitude Route Scrubber Data & Engine
const ROUTE_DATA = {
  bc: {
    title: 'Everest Base Camp (EBC)',
    alt: '5,364 M / 17,598 FT',
    desc: 'Situated on the shifting Khumbu Glacier. Here, expedition teams establish tent cities, acclimatize for weeks, and conduct the sacred Buddhist Puja ceremony seeking blessing and safe passage from Chomolungma.',
    temp: '-12°C',
    oxygen: '52% Sea Level O₂',
    pressure: '530 hPa',
    risk: 'Acclimatization Headaches'
  },
  c1: {
    title: 'Khumbu Icefall & Camp I',
    alt: '6,065 M / 19,900 FT',
    desc: 'The most dangerous labyrinth on the mountain. Giant seracs the size of office buildings continuously collapse as the glacier moves 1 meter per day. Climbers traverse bottomless crevasses over linked aluminum ladders.',
    temp: '-18°C',
    oxygen: '47% Sea Level O₂',
    pressure: '480 hPa',
    risk: 'Serac Collapse & Crevasses'
  },
  c2: {
    title: 'The Western Cwm (Camp II)',
    alt: '6,400 M / 21,000 FT',
    desc: 'The "Valley of Silence" — a colossal amphitheater of blinding white ice surrounded by Everest, Lhotse, and Nuptse. Solar radiation can soar temps to +30°C in the day before plummeting to -25°C at sunset.',
    temp: '-22°C',
    oxygen: '44% Sea Level O₂',
    pressure: '450 hPa',
    risk: 'Solar Radiation & Exhaustion'
  },
  c3: {
    title: 'The Lhotse Face (Camp III)',
    alt: '7,162 M / 23,500 FT',
    desc: 'A sheer, 4,000-foot vertical wall of compressed blue glacial ice. Climbers live strapped into tents carved directly into 45-degree ice shelves, using ascenders on fixed safety lines.',
    temp: '-28°C',
    oxygen: '40% Sea Level O₂',
    pressure: '400 hPa',
    risk: 'Icefall & Extreme Wind Exposure'
  },
  c4: {
    title: 'South Col & Death Zone (Camp IV)',
    alt: '7,906 M / 25,938 FT',
    desc: 'Entering the Death Zone (> 8,000m). Human cells cannot regenerate and begin slow cellular decay. Climbers rest for mere hours on supplemental oxygen before the midnight push for the summit ridge.',
    temp: '-32°C',
    oxygen: '35% Sea Level O₂',
    pressure: '370 hPa',
    risk: 'Hypoxia, HAPE, Frostbite'
  },
  summit: {
    title: 'The Summit of Mount Everest',
    alt: '8,848.86 M / 29,031.7 FT',
    desc: 'The apex of planet Earth. After scaling the knife-edge Southeast Ridge and the vertical Hillary Step, climbers stand above the clouds with the curvature of the Earth visible across the Himalayan horizon.',
    temp: '-36°C',
    oxygen: '33% Sea Level O₂',
    pressure: '337 hPa',
    risk: 'Extreme Jet Stream Winds'
  }
};

function initAltitudeRouteScrubber() {
  const campButtons = document.querySelectorAll('.route-camp-button');
  const stageName = document.getElementById('routeStageName');
  const stageAlt = document.getElementById('routeStageAlt');
  const stageDesc = document.getElementById('routeStageDesc');
  const stageTemp = document.getElementById('routeStageTemp');
  const stageOxygen = document.getElementById('routeStageOxygen');
  const stagePressure = document.getElementById('routeStagePressure');

  campButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      campButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const stageKey = btn.getAttribute('data-stage');
      const data = ROUTE_DATA[stageKey];
      if (!data) return;

      if (stageName) stageName.textContent = data.title;
      if (stageAlt) stageAlt.textContent = data.alt;
      if (stageDesc) stageDesc.textContent = data.desc;
      if (stageTemp) stageTemp.textContent = data.temp;
      if (stageOxygen) stageOxygen.textContent = data.oxygen;
      if (stagePressure) stagePressure.textContent = data.pressure;
    });
  });
}

// 2. Legendary Indian Climbers Gallery Data
const CLIMBER_DATA = {
  kohli: {
    name: 'Captain M.S. Kohli',
    year: '1965 INDIAN EXPEDITION LEADER',
    bio: 'Leader of the monumental 1965 Indian Mount Everest Expedition which placed an unprecedented 9 climbers on the summit of Everest — a world record that stood unbroken for 17 years. This expedition ignited modern mountaineering across India.',
    quote: '"The mountain does not yield to strength alone; it yields to humility, unyielding discipline, and brotherhood."'
  },
  bachendri: {
    name: 'Bachendri Pal',
    year: '1984 FIRST INDIAN WOMAN SUMMITEER',
    bio: 'Born in a small village in Uttarakhand, Bachendri Pal made history on May 23, 1984, as the first Indian woman to reach the summit of Mount Everest. She survived a catastrophic avalanche at Camp III that crushed her tent before continuing to the top.',
    quote: '"I stepped onto the narrow snow ledge at 8,848 meters and planted the Indian Tricolour. For a moment, the world stood still in silent reverence."'
  },
  santosh: {
    name: 'Santosh Yadav',
    year: '1992 & 1993 DUAL SUMMITEER',
    bio: 'The first woman in the world to successfully summit Mount Everest twice within a single year (1992 and 1993). She also pioneered the ascent via the treacherous East/Kangshung Face and famously shared her supplemental oxygen to save the life of a fellow climber.',
    quote: '"True climbing is not about conquering nature; it is about conquering one’s own inner doubts and fears."'
  },
  arunima: {
    name: 'Arunima Sinha',
    year: '2013 WORLD FIRST FEMALE AMPUTEE',
    bio: 'Former national volleyball player who lost her left leg below the knee after being thrown from a moving train by robbers. Refusing defeat, she trained under Bachendri Pal and became the world’s first female amputee to conquer Everest on May 21, 2013.',
    quote: '"My left leg was prosthetic, but my will was pure titanium. Everest taught me that human spirit has no physical boundaries."'
  },
  poorna: {
    name: 'Malavath Poorna',
    year: '2014 YOUNGEST FEMALE IN HISTORY',
    bio: 'Hailing from a small agricultural village in Telangana, Malavath Poorna climbed the formidable North Face of Mount Everest at just 13 years and 11 months old, becoming the youngest female in history to reach the highest point on Earth.',
    quote: '"I stood at the summit and looked down at the clouds. I proved that a girl from a humble rural background can touch the sky."'
  },
  anshu: {
    name: 'Anshu Jamsenpa',
    year: '2017 FASTEST DOUBLE ASCENT (118 HRS)',
    bio: 'Mountaineer from Arunachal Pradesh and mother of two who shattered world mountaineering records by climbing Mount Everest twice in a span of just 5 days (118 hours and 15 minutes) — the fastest double ascent by any woman in history.',
    quote: '"When the mountain calls, tiredness vanishes. The Himalayas are not obstacles; they are our ancestors."'
  }
};

function initClimberGallery() {
  const tabs = document.querySelectorAll('.climber-tab-pill');
  const climberName = document.getElementById('climberHeroName');
  const climberYear = document.getElementById('climberYearBadge');
  const climberBio = document.getElementById('climberBioP');
  const climberQuote = document.getElementById('climberQuoteBox');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const climberKey = tab.getAttribute('data-climber');
      const data = CLIMBER_DATA[climberKey];
      if (!data) return;

      if (climberName) climberName.textContent = data.name;
      if (climberYear) climberYear.textContent = data.year;
      if (climberBio) climberBio.textContent = data.bio;
      if (climberQuote) climberQuote.textContent = data.quote;
    });
  });
}

// 3. Himalayan Wind & Singing Bell Audio Synth (Web Audio API)
let audioCtx = null;
let isAudioActive = false;
let windNoiseNode = null;
let windGainNode = null;
let bellInterval = null;

function initHimalayanSoundscape() {
  const toggleBtn = document.getElementById('himalayaAudioToggle');
  if (!toggleBtn) return;

  function createWindNoise() {
    const bufferSize = audioCtx.sampleRate * 2;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = audioCtx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Filter to sound like low roaring mountain wind
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(280, audioCtx.currentTime);

    windGainNode = audioCtx.createGain();
    windGainNode.gain.setValueAtTime(0.001, audioCtx.currentTime);
    windGainNode.gain.linearRampToValueAtTime(0.04, audioCtx.currentTime + 1.5);

    whiteNoise.connect(filter);
    filter.connect(windGainNode);
    windGainNode.connect(audioCtx.destination);

    whiteNoise.start();
    windNoiseNode = whiteNoise;
  }

  function playTibetanBell() {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(432, audioCtx.currentTime); // 432Hz deep meditative bell

    gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.05, audioCtx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 4.5);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 4.6);
  }

  toggleBtn.addEventListener('click', () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (!isAudioActive) {
      isAudioActive = true;
      toggleBtn.classList.add('active');
      toggleBtn.innerHTML = '<span>🔊</span> Summit Wind: Active';
      createWindNoise();
      playTibetanBell();
      bellInterval = setInterval(() => {
        if (isAudioActive) playTibetanBell();
      }, 5500);
    } else {
      isAudioActive = false;
      toggleBtn.classList.remove('active');
      toggleBtn.innerHTML = '<span>🔇</span> Mountain Soundscape';
      if (windGainNode) {
        windGainNode.gain.linearRampToValueAtTime(0.00001, audioCtx.currentTime + 0.5);
      }
      if (bellInterval) clearInterval(bellInterval);
    }
  });
}

// 4. Memorial & Expedition Foundation Modal Drawer
function initEverestModal() {
  const modal = document.getElementById('everestModal');
  const openBtns = document.querySelectorAll('.js-open-everest-modal');
  const closeBtn = document.getElementById('closeEverestModal');
  const form = document.getElementById('everestInquiryForm');
  const confirmMsg = document.getElementById('everestConfirmMsg');

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

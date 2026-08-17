// Amazon Rainforest — Interactive Biome Engine

document.addEventListener('DOMContentLoaded', () => {
  initCanopyElevator();
  initWildlifeCards();
  initRainforestSoundscape();
  initAmazonModal();
});

// 1. 4-Layer Vertical Canopy Elevator Data & Engine
const CANOPY_DATA = {
  floor: {
    name: '01. The Forest Floor',
    alt: '0 — 2 METERS ELEVATION',
    desc: 'Deep shadowed realm receiving less than 2% of sunlight. Here, trillions of leafcutter ants, fungi, and decomposers recycle fallen biomass in days. The stealthy Black Jaguar (Panthera onca) prowls silently across damp leaf litter.',
    sunlight: '1.8%',
    humidity: '94%',
    species: 'Decomposers, Jaguars, Tapirs'
  },
  understory: {
    name: '02. The Understory Layer',
    alt: '2 — 20 METERS ELEVATION',
    desc: 'A humid, windless intermediate space dominated by broad-leaved palms and climbing lianas. Bio-active Poison Dart Frogs rear tadpoles inside water-filled bromeliad leaf axils while tree boas coil on low branches.',
    sunlight: '8.5%',
    humidity: '89%',
    species: 'Poison Frogs, Ocelots, Bats'
  },
  canopy: {
    name: '03. The Main Canopy Layer',
    alt: '20 — 45 METERS ELEVATION',
    desc: 'The vibrant "green roof" of Amazonia containing 90% of all rainforest organisms. An unbroken ocean of foliage teeming with fruit-eating Keel-billed Toucans, Spider Monkeys, three-toed sloths, and 100,000 insect species.',
    sunlight: '65%',
    humidity: '82%',
    species: '90% of all Organisms'
  },
  emergent: {
    name: '04. The Emergent Layer',
    alt: '45 — 65+ METERS ELEVATION',
    desc: 'Colossal ancient Kapok (Ceiba) and Brazil Nut trees piercing through the forest roof into the open sky. Exposed to tropical storms and blazing equatorial sun, this realm is the apex hunting territory of the Harpy Eagle.',
    sunlight: '100%',
    humidity: '74%',
    species: 'Harpy Eagles, Giant Ceiba Trees'
  }
};

function initCanopyElevator() {
  const buttons = document.querySelectorAll('.canopy-layer-btn');
  const layerTitle = document.getElementById('canopyLayerTitle');
  const layerAlt = document.getElementById('canopyLayerAlt');
  const layerDesc = document.getElementById('canopyLayerDesc');
  const statSun = document.getElementById('canopyStatSun');
  const statHum = document.getElementById('canopyStatHum');
  const statBio = document.getElementById('canopyStatBio');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const layerKey = btn.getAttribute('data-layer');
      const data = CANOPY_DATA[layerKey];
      if (!data) return;

      if (layerTitle) layerTitle.textContent = data.name;
      if (layerAlt) layerAlt.textContent = data.alt;
      if (layerDesc) layerDesc.textContent = data.desc;
      if (statSun) statSun.textContent = data.sunlight;
      if (statHum) statHum.textContent = data.humidity;
      if (statBio) statBio.textContent = data.species;
    });
  });
}

// 2. Wildlife Interactive Highlights
function initWildlifeCards() {
  const cards = document.querySelectorAll('.wildlife-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.style.borderColor = '');
      card.style.borderColor = '#34d399';
    });
  });
}

// 3. Procedural Tropical Rain & Jungle Soundscape (Web Audio API)
let audioCtx = null;
let isAudioActive = false;
let rainNoiseNode = null;
let rainGainNode = null;
let frogInterval = null;

function initRainforestSoundscape() {
  const toggleBtn = document.getElementById('rainforestAudioToggle');
  if (!toggleBtn) return;

  function createRainNoise() {
    const bufferSize = audioCtx.sampleRate * 2;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = audioCtx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Filter to sound like heavy tropical rain through leaves
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1100, audioCtx.currentTime);
    filter.Q.setValueAtTime(0.8, audioCtx.currentTime);

    rainGainNode = audioCtx.createGain();
    rainGainNode.gain.setValueAtTime(0.001, audioCtx.currentTime);
    rainGainNode.gain.linearRampToValueAtTime(0.045, audioCtx.currentTime + 2.0);

    whiteNoise.connect(filter);
    filter.connect(rainGainNode);
    rainGainNode.connect(audioCtx.destination);

    whiteNoise.start();
    rainNoiseNode = whiteNoise;
  }

  function playTreeFrogChirp() {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    const freqs = [1850, 2200, 2600, 1950];
    const targetFreq = freqs[Math.floor(Math.random() * freqs.length)];

    osc.frequency.setValueAtTime(targetFreq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(targetFreq * 0.7, audioCtx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.025, audioCtx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.13);
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
      toggleBtn.innerHTML = '<span>🔊</span> Rain Soundscape: Active';
      createRainNoise();
      frogInterval = setInterval(() => {
        if (isAudioActive && Math.random() > 0.3) {
          playTreeFrogChirp();
          setTimeout(playTreeFrogChirp, 120);
        }
      }, 2400);
    } else {
      isAudioActive = false;
      toggleBtn.classList.remove('active');
      toggleBtn.innerHTML = '<span>🔇</span> Rain & Jungle Ambiance';
      if (rainGainNode) {
        rainGainNode.gain.linearRampToValueAtTime(0.00001, audioCtx.currentTime + 0.8);
      }
      if (frogInterval) clearInterval(frogInterval);
    }
  });
}

// 4. Conservation & Eco-Expedition Modal Drawer
function initAmazonModal() {
  const modal = document.getElementById('amazonModal');
  const openBtns = document.querySelectorAll('.js-open-amazon-modal');
  const closeBtn = document.getElementById('closeAmazonModal');
  const form = document.getElementById('amazonInquiryForm');
  const confirmMsg = document.getElementById('amazonConfirmMsg');

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

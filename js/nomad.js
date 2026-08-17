// Nomad Foils — Interactive Logic & Telemetry Engine

document.addEventListener('DOMContentLoaded', () => {
  initThrottleHUD();
  initAnatomyHotspots();
  initRangeSimulator();
  initConfigurator();
  initModalDrawer();
});

// 1. Interactive Flight Telemetry HUD
function initThrottleHUD() {
  const throttleSlider = document.getElementById('hudThrottleSlider');
  const hudSpeed = document.getElementById('hudSpeed');
  const hudAltitude = document.getElementById('hudAltitude');
  const hudPower = document.getElementById('hudPower');
  const throttlePercent = document.getElementById('hudThrottlePercent');

  if (!throttleSlider) return;

  const updateHUD = (val) => {
    const powerPct = parseInt(val, 10);
    throttlePercent.textContent = `${powerPct}%`;

    // Speed calculation: 0 to 28.5 knots max
    const speed = powerPct === 0 ? 0 : (powerPct * 0.285).toFixed(1);
    hudSpeed.innerHTML = `${speed} <span>KTS</span>`;

    // Altitude calculation: Lift happens above 35% throttle
    let alt = 0;
    if (powerPct >= 35) {
      alt = Math.min(78, Math.round(((powerPct - 35) / 65) * 78));
    }
    hudAltitude.innerHTML = `${alt} <span>CM</span>`;

    // Power output calculation: 0 to 5.4 kW
    const powerKw = ((powerPct / 100) * 5.4).toFixed(1);
    hudPower.innerHTML = `${powerKw} <span>KW</span>`;
  };

  throttleSlider.addEventListener('input', (e) => {
    updateHUD(e.target.value);
  });

  // Initial HUD render
  updateHUD(throttleSlider.value);
}

// 2. Interactive Board Anatomy Hotspots
function initAnatomyHotspots() {
  const hotspots = document.querySelectorAll('.hotspot-point');
  const cards = document.querySelectorAll('.anatomy-detail-card');

  function setActive(targetId) {
    hotspots.forEach(h => {
      h.classList.toggle('active', h.getAttribute('data-target') === targetId);
    });
    cards.forEach(c => {
      c.classList.toggle('active', c.getAttribute('data-id') === targetId);
    });
  }

  hotspots.forEach(h => {
    h.addEventListener('click', () => {
      const target = h.getAttribute('data-target');
      setActive(target);
    });
  });

  cards.forEach(c => {
    c.addEventListener('click', () => {
      const id = c.getAttribute('data-id');
      setActive(id);
    });
  });
}

// 3. Flight Range & Swell Calculator
function initRangeSimulator() {
  const weightSlider = document.getElementById('riderWeightSlider');
  const weightDisplay = document.getElementById('riderWeightDisplay');
  const wingButtons = document.querySelectorAll('[data-calc-wing]');
  const swellButtons = document.querySelectorAll('[data-calc-swell]');

  const resRange = document.getElementById('calcResultRange');
  const resTime = document.getElementById('calcResultTime');
  const resCruise = document.getElementById('calcResultCruise');
  const resEfficiency = document.getElementById('calcResultEfficiency');

  let currentWing = 'glide'; // glide or carve
  let currentSwell = 'calm'; // calm, swell, downwind
  let currentWeight = 78;

  function calculateTelemetry() {
    // Base parameters for 2.2kWh battery
    let baseRangeKm = 44;
    let baseTimeMin = 120;
    let baseCruiseKnots = 19;

    // Weight penalty: -0.22km per kg over 70kg
    const weightDelta = currentWeight - 70;
    let range = baseRangeKm - (weightDelta * 0.18);
    let time = baseTimeMin - (weightDelta * 0.45);

    // Wing factor
    if (currentWing === 'carve') {
      range *= 0.88; // 12% more drag/higher speed
      time *= 0.85;
      baseCruiseKnots = 23;
    } else {
      baseCruiseKnots = 18;
    }

    // Swell boost/drag factor
    if (currentSwell === 'downwind') {
      range *= 1.18; // Swell energy harvesting
      time *= 1.22;
    } else if (currentSwell === 'swell') {
      range *= 1.05;
      time *= 1.06;
    }

    // Efficiency metric
    const efficiencyWhKm = ((2200 / range)).toFixed(0);

    if (resRange) resRange.innerHTML = `${range.toFixed(1)} <span>KM</span>`;
    if (resTime) resTime.innerHTML = `${Math.round(time)} <span>MIN</span>`;
    if (resCruise) resCruise.innerHTML = `${baseCruiseKnots} <span>KTS</span>`;
    if (resEfficiency) resEfficiency.innerHTML = `${efficiencyWhKm} <span>WH/KM</span>`;
  }

  if (weightSlider && weightDisplay) {
    weightSlider.addEventListener('input', (e) => {
      currentWeight = parseInt(e.target.value, 10);
      weightDisplay.textContent = `${currentWeight} kg (${Math.round(currentWeight * 2.20462)} lbs)`;
      calculateTelemetry();
    });
  }

  wingButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      wingButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentWing = btn.getAttribute('data-calc-wing');
      calculateTelemetry();
    });
  });

  swellButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      swellButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSwell = btn.getAttribute('data-calc-swell');
      calculateTelemetry();
    });
  });

  calculateTelemetry();
}

// 4. Customizer & Spec Matrix
function initConfigurator() {
  const finishOptions = document.querySelectorAll('.finish-option-card');
  const mastOptions = document.querySelectorAll('[data-config-mast]');
  const batteryOptions = document.querySelectorAll('[data-config-battery]');

  const summaryFinish = document.getElementById('summaryFinish');
  const summaryMast = document.getElementById('summaryMast');
  const summaryBattery = document.getElementById('summaryBattery');
  const summaryTotal = document.getElementById('summaryTotalPrice');

  let basePrice = 12800;
  let mastPrice = 0;
  let batteryPrice = 0;

  function updatePrice() {
    const total = basePrice + mastPrice + batteryPrice;
    if (summaryTotal) {
      summaryTotal.textContent = `$${total.toLocaleString()}`;
    }
  }

  finishOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      finishOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      const finishName = opt.querySelector('.finish-name').textContent;
      if (summaryFinish) summaryFinish.textContent = finishName;
    });
  });

  mastOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      mastOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      const mastVal = opt.getAttribute('data-config-mast');
      mastPrice = mastVal === '85' ? 450 : 0;
      if (summaryMast) summaryMast.textContent = mastVal === '85' ? '85cm Big-Swell Mast (+$450)' : '75cm Open-Ocean Mast';
      updatePrice();
    });
  });

  batteryOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      batteryOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      const batVal = opt.getAttribute('data-config-battery');
      batteryPrice = batVal === '2.4' ? 1200 : 0;
      if (summaryBattery) summaryBattery.textContent = batVal === '2.4' ? '2.4kWh Endurance Pack (+$1,200)' : '1.8kWh Standard Pack';
      updatePrice();
    });
  });
}

// 5. Test Flight & Pre-Order Modal Drawer
function initModalDrawer() {
  const modal = document.getElementById('nomadModal');
  const openButtons = document.querySelectorAll('.js-open-reserve-modal');
  const closeBtn = document.getElementById('closeNomadModal');
  const form = document.getElementById('nomadReservationForm');
  const confirmationMsg = document.getElementById('modalConfirmationMessage');

  if (!modal) return;

  openButtons.forEach(btn => {
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
      if (confirmationMsg) {
        confirmationMsg.style.display = 'block';
      }
    });
  }
}

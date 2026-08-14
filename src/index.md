---
title: España en Datos
theme: light
toc: false
footer: false
---

<style>
:root {
  --atenea-navy: #0b2447;
  --atenea-blue: #19376d;
  --atenea-gold: #b89b5e;
  --atenea-cream: #f8f5ef;
  --atenea-border: #e3e6ea;
  --atenea-muted: #667085;
}

.observablehq {
  max-width: 1280px;
  margin: 0 auto;
}

/* =========================================================
   SINGLE PAGE NAVIGATION
   ========================================================= */

html {
  scroll-behavior: smooth;
}

.atenea-nav {
  position: sticky;
  top: 0;
  z-index: 1000;

  width: 100%;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 2rem;

  padding: 0.9rem 1.5rem;

  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(12px);

  border-bottom: 1px solid var(--atenea-border);
}

.atenea-brand {
  flex-shrink: 0;

  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.08em;

  color: var(--atenea-navy) !important;
  text-decoration: none !important;
}

.atenea-nav-links {
  display: flex;
  align-items: center;

  gap: 1.35rem;

  overflow-x: auto;
  scrollbar-width: none;

  white-space: nowrap;
}

.atenea-nav-links::-webkit-scrollbar {
  display: none;
}

.atenea-nav-links a {
  color: var(--atenea-muted) !important;

  font-size: 0.78rem;
  font-weight: 600;

  text-decoration: none !important;

  transition: color 0.15s ease;
}

.atenea-nav-links a:hover {
  color: var(--atenea-navy) !important;
}


/* Cada bloque principal */

.dashboard-section {
  scroll-margin-top: 80px;

  padding-top: 4rem;
  padding-bottom: 4rem;

  border-top: 1px solid var(--atenea-border);
}


/* El primero no necesita línea superior */

.dashboard-section.first {
  border-top: none;
}


/* Responsive */

@media (max-width: 900px) {

  .atenea-nav {
    flex-direction: column;
    align-items: flex-start;

    gap: 0.65rem;

    padding: 0.8rem 1rem;
  }

  .atenea-nav-links {
    width: 100%;
  }

  .dashboard-section {
    scroll-margin-top: 115px;
  }
}

.hero {
  padding: 3rem 0 2rem;
  border-bottom: 1px solid var(--atenea-border);
  margin-bottom: 2.5rem;
}

.hero-kicker {
  color: var(--atenea-gold);
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.hero h1 {
  color: var(--atenea-navy);
  font-size: 3.5rem;
  line-height: 1;
  margin: 0.6rem 0 1rem;
}

.hero-subtitle {
  color: var(--atenea-muted);
  font-size: 1.1rem;
  max-width: 780px;
  line-height: 1.6;
}

.hero-meta {
  display: flex;
  gap: 2rem;
  margin-top: 1.3rem;
  color: var(--atenea-muted);
  font-size: 0.85rem;
}

.section-header {
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

.section-kicker {
  color: var(--atenea-gold);
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.section-header h2 {
  color: var(--atenea-navy);
  margin: 0.4rem 0;
}

.section-description {
  color: var(--atenea-muted);
  max-width: 800px;
}

.kpi-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.kpi-card {
  min-height: 180px;
  padding: 1.4rem;
  background: white;
  border: 1px solid var(--atenea-border);
  border-radius: 12px;
}

.kpi-title {
  color: var(--atenea-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  font-size: 0.8rem;
}

.kpi-value {
  color: var(--atenea-navy);
  font-size: 2rem;
  font-weight: 700;
  margin: 0.7rem 0 0.3rem;
}

.kpi-spark {
  color: var(--atenea-blue);
}

.text-green,
.text-red {
  color: var(--atenea-muted) !important;
}

.text-small {
  font-size: 0.78rem;
}

.muted {
  color: var(--atenea-muted);
}

.font-bold {
  font-weight: 600;
}

.font-normal {
  font-weight: 400;
}

.mt-2 {
  margin-top: 0.8rem;
}

.opacity-70 {
  opacity: 0.8;
}

.perspective-box {
  padding: 1.5rem;
  background: var(--atenea-cream);
  border-radius: 12px;
}

.perspective-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.8rem;
}

.perspective-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
}

.perspective-label {
  color: var(--atenea-muted);
  font-size: 0.72rem;
  text-transform: uppercase;
}

.perspective-value {
  margin-top: 0.3rem;
  color: var(--atenea-navy);
  font-weight: 600;
}

.dev-details {
  margin-top: 4rem;
  color: var(--atenea-muted);
  font-size: 0.8rem;
}

@media (max-width: 900px) {
  .kpi-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .perspective-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .kpi-grid,
  .perspective-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<nav class="atenea-nav">

  <a class="atenea-brand" href="#inicio">
    ESPAÑA EN DATOS
  </a>

  <div class="atenea-nav-links">
    <a href="#resumen">Resumen</a>
    <a href="#economia">Economía</a>
    <a href="#empleo">Empleo</a>
    <a href="#vivienda">Vivienda</a>
    <a href="#estado">Estado</a>
    <a href="#pensiones">Pensiones</a>
    <a href="#sociedad">Sociedad</a>
    <a href="#mundo">Mundo</a>
  </div>

</nav>

```js
import {KpiCard} from "./components/kpi-card.js";

const rawData = await FileAttachment(
  "./data/observations.csv"
).csv({typed: true});

const requiredColumns = [
  "indicator_id",
  "year",
  "value"
];

const availableColumns =
  rawData.columns ?? Object.keys(rawData[0] ?? {});

const missingColumns = requiredColumns.filter(
  column => !availableColumns.includes(column)
);

if (missingColumns.length > 0) {
  throw new Error(
    `Faltan columnas: ${missingColumns.join(", ")}`
  );
}

const data = rawData
  .filter(d =>
    d?.indicator_id != null &&
    d?.year != null &&
    d?.value != null
  )
  .map(d => ({
    ...d,
    indicator_id: String(d.indicator_id),
    year: Number(d.year),
    value: Number(d.value)
  }))
  .filter(d =>
    Number.isFinite(d.year) &&
    Number.isFinite(d.value)
  );

const availableIndicators = [
  ...new Set(data.map(d => d.indicator_id))
];

function getRows(indicatorId) {
  return data
    .filter(d => d.indicator_id === indicatorId)
    .sort((a, b) => a.year - b.year);
}

function getLatest(indicatorId) {
  const rows = getRows(indicatorId);
  return rows[rows.length - 1];
}

function getTitle(indicatorId) {
  const row = getLatest(indicatorId);

  return (
    row?.indicator ??
    row?.indicador ??
    row?.indicator_name ??
    indicatorId
      .replaceAll("_", " ")
      .replace(/\b\w/g, x => x.toUpperCase())
  );
}

function getUnit(indicatorId) {
  const row = getLatest(indicatorId);

  return row?.unit ?? row?.unidad ?? "";
}

function formatter(indicatorId) {
  const unit = getUnit(indicatorId);

  return value => {
    const formatted = new Intl.NumberFormat(
      "es-ES",
      {maximumFractionDigits: 1}
    ).format(value);

    return unit ? `${formatted} ${unit}` : formatted;
  };
}

function isPercentage(indicatorId) {
  const unit = String(getUnit(indicatorId)).toLowerCase();

  return (
    unit.includes("%") ||
    unit.includes("percent") ||
    unit.includes("porcentaje")
  );
}

const preferredIds = [
  "pib_nominal_eur",
  "pib_per_capita_eur",
  "crecimiento_pib_real",
  "poblacion_residente",
  "tasa_desempleo",
  "deuda_publica_pde_pib"
];

const selectedIndicators = preferredIds
  .filter(id => availableIndicators.includes(id));

const fallbackIndicators = availableIndicators
  .filter(id => !selectedIndicators.includes(id));

const indicatorsToShow = [
  ...selectedIndicators,
  ...fallbackIndicators
].slice(0, 6);

const years = data
  .map(d => d.year)
  .filter(Number.isFinite);

const latestDatasetYear =
  years.length ? Math.max(...years) : "—";

const observationCount = data.length;
const indicatorCount = availableIndicators.length;
```


<div class="hero">
  <div class="hero-kicker">
    ATENEA · Observatorio de España
  </div>

  <h1>España en Datos</h1>

  <div class="hero-subtitle">
    Una radiografía de la realidad económica, social e institucional
    de España construida a partir de datos verificables, trazables
    y comparables internacionalmente.
  </div>
</div>


```js
const meta = document.createElement("div");
meta.className = "hero-meta";

meta.innerHTML = `
  <span>
    <strong>${indicatorCount}</strong> indicadores
  </span>

  <span>
    <strong>${observationCount.toLocaleString("es-ES")}</strong>
    observaciones
  </span>

  <span>
    Último año:
    <strong>${latestDatasetYear}</strong>
  </span>
`;

display(meta);
```


<div id="resumen" class="section-header dashboard-section first">

  <div class="section-kicker">
    Situación actual
  </div>

  <h2>España en 90 segundos</h2>

  <div class="section-description">
    Los indicadores esenciales para comprender rápidamente
    la situación económica y social de España.
  </div>

</div>



```js
const grid = document.createElement("div");
grid.className = "kpi-grid";

for (const indicatorId of indicatorsToShow) {

  const card = KpiCard(data, {
    indicatorId,
    title: getTitle(indicatorId),
    formatValue: formatter(indicatorId),
    isPercentage: isPercentage(indicatorId)
  });

  grid.append(card);
}

display(grid);
```


<div id="economia" class="section-header dashboard-section">
  <div class="section-kicker">01 · Economía</div>
  <h2>Economía y productividad</h2>
  <div class="section-description">
    Crecimiento, productividad, renta, inversión y estructura económica.
  </div>
</div>


<div id="empleo" class="section-header dashboard-section">
  <div class="section-kicker">02 · Mercado laboral</div>
  <h2>Empleo y salarios</h2>
</div>
<div id="vivienda" class="section-header dashboard-section">
  <div class="section-kicker">03 · Vivienda</div>
  <h2>Vivienda y accesibilidad</h2>
</div>


<div id="estado" class="section-header dashboard-section">
  <div class="section-kicker">04 · Sector público</div>
  <h2>Finanzas públicas</h2>
</div>


<div id="pensiones" class="section-header dashboard-section">
  <div class="section-kicker">05 · Demografía</div>
  <h2>Pensiones y demografía</h2>
</div>


<div id="sociedad" class="section-header dashboard-section">
  <div class="section-kicker">06 · Sociedad</div>
  <h2>La realidad social de España</h2>
</div>


<div id="mundo" class="section-header dashboard-section">
  <div class="section-kicker">07 · Benchmark internacional</div>
  <h2>España en el mundo</h2>
</div>
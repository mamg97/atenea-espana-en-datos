---
title: España en Datos
theme: light
toc: false
footer: By Miguel Ángel Mayordomo Gragera - ACTUAL BORRADOR
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
  max-width: 1440px;
  margin: 0 auto;
}

/* =========================================================
   SINGLE PAGE NAVIGATION
   ========================================================= */

html {
  scroll-behavior: smooth;
  font-size: 16px;
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

  font-size: 0.9rem;
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

  font-size: 0.85rem;
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

  padding-top: 0.0rem;
  padding-bottom: 0.5rem;

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
  padding: 1.5rem 0 1rem;
  border-bottom: 1px solid var(--atenea-border);
  margin-bottom: 2.5rem;
}

.hero-kicker {
  color: var(--atenea-gold);
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.hero h1 {
  color: var(--atenea-navy);
  font-size: 4rem;
  line-height: 1;
  margin: 0.6rem 0 1rem;
  max-width:none;
  white-space: nowrap;
}

.hero-subtitle {
  color: var(--atenea-muted);
  font-size: 1.1rem;
  max-width: none;
  line-height: 1.6;
}

.hero-meta {
  display: flex;
  gap: 1rem;
  margin-top: 1.3rem;
  color: var(--atenea-muted);
  font-size: 0.95rem;
}

.section-header {
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
}

.section-kicker {
  color: var(--atenea-gold);
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.section-header h2 {
  color: var(--atenea-navy);
  margin: 0.4rem 0;

  font-size: 2rem;
  line-height: 1.15;
}

.section-description {
  color: var(--atenea-muted);
  max-width: none;
  font-size: 0.9rem;
  line-height: 1.55;
}

.kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
}

.kpi-card {
  height: 230 px;
  padding: 1.2rem 1.25rem;

  display: flex;
  flex-direction: column;

  background: white;

  border: 1px solid var(--atenea-border);
  border-radius: 12px;

  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;
}

.kpi-card:hover {
  transform: translateY(-2px);

  box-shadow:
    0 8px 24px rgba(11, 36, 71, 0.06);
}

.kpi-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.kpi-title {
  color: var(--atenea-muted);

  text-transform: uppercase;
  letter-spacing: 0.06em;

  font-weight: 700;
  font-size: 0.8rem;
  line-height: 1.4;
}

.kpi-year {
  flex-shrink: 0;

  padding: 0.2rem 0.45rem;

  border: 1px solid var(--atenea-border);
  border-radius: 100px;

  color: var(--atenea-muted);
  font-size: 0.76rem;
}

.kpi-value-block {
  margin-top: 0.7rem;
}

.kpi-value {
  color: var(--atenea-navy);

  font-size: 1.8rem;
  line-height: 1.05;

  font-weight: 700;
}

.kpi-unit {
  margin-top: 0.3rem;

  color: var(--atenea-muted);

  font-size: 0.8rem;
}

.kpi-diff {
  margin-top: 0.65rem;

  color: var(--atenea-muted);

  font-size: 0.85rem;
}

.kpi-arrow {
  color: var(--atenea-blue);
}

.kpi-spark {
  width: 90%;

  margin-top: auto;
  padding-top: 0.9rem;

  color: var(--atenea-blue);
}

.kpi-spark svg {
  display: block;

  width: 100%;
  height: auto;

  overflow: visible;
}

.kpi-years {
  display: flex;
  justify-content: space-between;

  margin-top: 0.15rem;

  color: var(--atenea-muted);

  font-size: 0.72rem;
}

.kpi-source {
  margin-top: 0.8rem;
  padding-top: 0.7rem;

  border-top: 1px solid var(--atenea-border);

  color: var(--atenea-muted);

  font-size: 0.6rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.kpi-source a {
  color: var(--atenea-blue) !important;
  text-decoration: none !important;
}

.kpi-source a:hover {
  text-decoration: underline !important;
}

.kpi-details {
  margin-top: 0.55rem;

  color: var(--atenea-muted);

  font-size: 0.6rem;
}

.kpi-details summary {
  cursor: pointer;

  color: var(--atenea-muted);
}

.kpi-details-body {
  display: grid;
  gap: 0.45rem;

  margin-top: 0.6rem;

  line-height: 1.45;
}

.kpi-empty {
  margin-top: 1rem;

  color: var(--atenea-muted);
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

.metric-group {
  margin-top: 2rem;
}

.metric-group:first-of-type {
  margin-top: 1.5rem;
}

.metric-group-title {
  margin: 0 0 1rem;

  color: var(--atenea-navy);

  font-size: 1.15rem;
  font-weight: 650;
}

.section-note {
  max-width: 900px;

  margin: 1rem 0 1.5rem;
  padding: 0.9rem 1rem;

  background: var(--atenea-cream);

  border-left: 3px solid var(--atenea-gold);
  border-radius: 4px;

  color: var(--atenea-muted);

  font-size: 0.9rem;
  line-height: 1.5;
}


/* Contenedor principal de la sección */
  .seccion-con-analisis {
    display: grid;
    grid-template-columns: 1fr 300px; /* 1fr (todo el espacio posible) para datos, 300px para el análisis */
    gap: 2.5rem; /* Espacio entre columnas */
    align-items: start;
    margin-bottom: 0.7rem; /* Espacio inferior del bloque */
  }

  /* La columna lateral de Atenea */
  .columna-analisis {
    border-left: 1px solid var(--theme-foreground-faintest); /* Línea fina vertical */
    padding-left: 2.5rem; /* Espacio entre la línea y el texto */
    font-size: 1rem;
    color: var(--theme-foreground-muted);
    text-align: justify;
  }

  /* Título del análisis */
  .columna-analisis h4 {
    margin-top: 0;
    color: var(--theme-foreground);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  /* Adaptación para móviles: una sola columna y quitamos la línea */
  @media (max-width: 768px) {
    .seccion-con-analisis {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    .columna-analisis {
      border-left: none;
      border-top: 1px solid var(--theme-foreground-faintest);
      padding-left: 0;
      padding-top: 1rem;
    }
  }

/* =========================================================
   MOBILE
   ========================================================= */

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

@media (max-width: 700px) {

  html {
    font-size: 16px;
  }

  body {
    overflow-x: hidden;
  }

  .observablehq {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    padding-left: 16px;
    padding-right: 16px;
  }


  /* NAV */

  .atenea-nav {
    position: sticky;
    top: 0;

    width: 100%;

    flex-direction: column;
    align-items: flex-start;

    gap: 0.6rem;

    padding: 0.75rem 0;

    background: rgba(255, 255, 255, 0.97);
  }

  .atenea-brand {
    font-size: 0.8rem;
  }

  .atenea-nav-links {
    width: 100%;

    display: flex;
    gap: 1rem;

    overflow-x: auto;
    white-space: nowrap;

    padding-bottom: 0.25rem;
  }

  .atenea-nav-links a {
    flex: 0 0 auto;
    font-size: 0.78rem;
  }


  /* HERO */

  .hero {
    padding: 1.8rem 0 1.2rem;
    margin-bottom: 0.5rem;
  }

  .hero-kicker {
    font-size: 0.72rem;
  }

  .hero h1 {
    font-size: 2.7rem;
    line-height: 1.05;

    margin-top: 0.5rem;
    margin-bottom: 0.8rem;

    white-space: normal;
  }

  .hero-subtitle {
    max-width: 100%;

    font-size: 1rem;
    line-height: 1.5;
  }

  .hero-meta {
    display: flex;
    flex-wrap: wrap;

    gap: 0.5rem 1.2rem;

    margin-top: 1rem;

    font-size: 0.8rem;
  }


  /* SECCIONES */

  .dashboard-section {
    scroll-margin-top: 110px;

    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .section-header {
    margin-bottom: 1rem;
  }

  .section-header h2 {
    font-size: 1.7rem;
    line-height: 1.15;
  }

  .section-kicker {
    font-size: 0.72rem;
  }

  .section-description {
    max-width: 100%;

    font-size: 0.95rem;
    line-height: 1.5;
  }


  /* KPIs */

  .kpi-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  .kpi-card {
    min-height: auto;

    padding: 1.15rem;
  }

  .kpi-title {
    font-size: 0.75rem;
  }

  .kpi-value {
    font-size: 2rem;
  }

  .kpi-unit {
    font-size: 05rem;
  }

  .kpi-diff {
    font-size: 0.78rem;
  }

  .kpi-year {
    font-size: 0.7rem;
  }

  .kpi-spark {
    padding-top: 0.8rem;
  }

  .kpi-source {
    white-space: normal;

    font-size: 0.72rem;
    line-height: 1.35;
  }


  /* Evitar desbordamientos */

  img,
  svg,
  canvas {
    max-width: 100%;
  }

  .metric-group {
    margin-top: 1.5rem;
  }

  .metric-group-title {
    font-size: 1.05rem;
  }

  .section-note {
    font-size: 0.85rem;
  }

}

</style>

<nav class="atenea-nav">

  <a class="atenea-brand" href="#inicio">
    Inicio
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

  const spainData = data.filter(
    d => !d.geo_name || d.geo_name === "España"
  );

const availableIndicators = [
  ...new Set(data.map(d => d.indicator_id))
];

function getRows(indicatorId) {
  return data
    .filter(d =>
      d.indicator_id === indicatorId &&
      (!d.geo_name || d.geo_name === "España")
    )
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
  "crecimiento_pib_real",
  "pib_per_capita_eur",
  "salario_mediano_anual_bruto_Total",
  "tasa_desempleo",
  "deuda_publica_pde_pib",
  "inflacion_ipc_media_anual"
];

const nf0 = new Intl.NumberFormat("es-ES", {
  maximumFractionDigits: 0
});

const nf1 = new Intl.NumberFormat("es-ES", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1
});

const nfCompact = new Intl.NumberFormat("es-ES", {
  notation: "compact",
  maximumFractionDigits: 1
});

const euro0 = value => `${nf0.format(value)} €`;
const euro1 = value => `${nf1.format(value)} €`;
const pct1 = value => `${nf1.format(value)} %`;
const num1 = value => nf1.format(value);
const integer = value => nf0.format(value);
const compact = value => nfCompact.format(value);
const millionsEuro = value => `${nf0.format(value)} M€`;


const kpiPresentation = {

  /* ======================================================
     ECONOMÍA
     ====================================================== */

  crecimiento_pib_real: {
    title: "Crecimiento del PIB",
    formatValue: pct1,
    unitLabel: "variación real anual",
    isPercentage: true
  },

  pib_per_capita_eur: {
    title: "PIB per cápita",
    formatValue: euro0,
    unitLabel: "por habitante"
  },

  pib_nominal_eur: {
    title: "PIB nominal",
    formatValue: millionsEuro,
    unitLabel: "millones de euros"
  },

  posicion_pib_mundial: {
    title: "Posición económica mundial",
    formatValue: value => `#${Math.round(value)}`,
    unitLabel: "por tamaño del PIB"
  },

  inflacion_ipc_media_anual: {
    title: "Inflación",
    formatValue: pct1,
    unitLabel: "IPC · media anual",
    isPercentage: true
  },

  inflacion_alimentos_media_anual: {
    title: "Inflación de alimentos",
    formatValue: pct1,
    unitLabel: "media anual",
    isPercentage: true
  },

  ipc_indice_general_media_anual: {
    title: "Índice general de precios",
    formatValue: num1,
    unitLabel: "base 2021 = 100"
  },


  /* ======================================================
     EMPLEO
     ====================================================== */

  tasa_actividad: {
    title: "Tasa de actividad",
    formatValue: pct1,
    unitLabel: "población activa",
    isPercentage: true
  },

  tasa_empleo: {
    title: "Tasa de empleo",
    formatValue: pct1,
    unitLabel: "población ocupada",
    isPercentage: true
  },

  tasa_desempleo: {
    title: "Tasa de desempleo",
    formatValue: pct1,
    unitLabel: "población activa",
    isPercentage: true
  },

  tasa_paro_juvenil: {
    title: "Paro juvenil",
    formatValue: pct1,
    unitLabel: "población activa joven",
    isPercentage: true
  },


  /* ======================================================
     SALARIOS
     ====================================================== */

  salario_mediano_anual_bruto_Total: {
    title: "Salario mediano",
    formatValue: euro0,
    unitLabel: "brutos al año por trabajador"
  },

  salario_medio_anual_bruto_Total: {
    title: "Salario medio",
    formatValue: euro0,
    unitLabel: "brutos al año por trabajador"
  },

  salario_modal_anual_bruto_Total: {
    title: "Salario más frecuente",
    formatValue: euro0,
    unitLabel: "brutos al año"
  },

  salario_mediano_mensual_bruto_epa_Total: {
    title: "Salario mediano mensual",
    formatValue: euro0,
    unitLabel: "empleo principal"
  },

  salario_medio_mensual_bruto_epa_Total: {
    title: "Salario medio mensual",
    formatValue: euro0,
    unitLabel: "empleo principal"
  },

  smi_mensual_14_pagas_Total: {
    title: "Salario mínimo",
    formatValue: euro0,
    unitLabel: "mensuales · 14 pagas"
  },

  smi_anual_14_pagas_Total: {
    title: "Salario mínimo anual",
    formatValue: euro0,
    unitLabel: "14 pagas"
  },

  salario_medio_anual_bruto_Hombres: {
    title: "Salario medio · hombres",
    formatValue: euro0,
    unitLabel: "brutos al año"
  },

  salario_medio_anual_bruto_Mujeres: {
    title: "Salario medio · mujeres",
    formatValue: euro0,
    unitLabel: "brutos al año"
  },

  brecha_salarial_media_anual_mujeres_hombres_Total: {
    title: "Brecha salarial",
    formatValue: pct1,
    unitLabel: "respecto al salario medio masculino",
    isPercentage: true
  },

  "salario_medio_mensual_bruto_epa_formacion_Hasta secundaria 1ª etapa": {
    title: "Salario · educación básica",
    formatValue: euro0,
    unitLabel: "brutos al mes"
  },

  "salario_medio_mensual_bruto_epa_formacion_Secundaria 2ª etapa": {
    title: "Salario · educación secundaria",
    formatValue: euro0,
    unitLabel: "brutos al mes"
  },

  "salario_medio_mensual_bruto_epa_formacion_Superior, incluido doctorado": {
    title: "Salario · educación superior",
    formatValue: euro0,
    unitLabel: "brutos al mes"
  },


  /* ======================================================
     VIVIENDA
     ====================================================== */

  variacion_precio_vivienda: {
    title: "Precio de la vivienda",
    formatValue: pct1,
    unitLabel: "variación anual",
    isPercentage: true
  },

  indice_precio_vivienda: {
    title: "Índice precio vivienda",
    formatValue: num1,
    unitLabel: "base 2015 = 100"
  },

  variacion_precio_alquiler: {
    title: "Precio del alquiler",
    formatValue: pct1,
    unitLabel: "variación anual",
    isPercentage: true
  },

  indice_precio_alquiler: {
    title: "Índice precio alquiler",
    formatValue: num1,
    unitLabel: "base 2015 = 100"
  },

  compraventas_viviendas_total: {
    title: "Compraventas de vivienda",
    formatValue: integer,
    unitLabel: "operaciones"
  },

  compraventas_vivienda_nueva: {
    title: "Compraventas · vivienda nueva",
    formatValue: integer,
    unitLabel: "operaciones"
  },


  /* ======================================================
     SECTOR PÚBLICO
     ====================================================== */

  deuda_publica_pde_pib: {
    title: "Deuda pública",
    formatValue: pct1,
    unitLabel: "del PIB",
    isPercentage: true
  },

  variacion_deuda_publica_pp: {
    title: "Variación de la deuda",
    formatValue: value => `${nf1.format(value)} pp`,
    unitLabel: "variación anual",
    isPercentage: true
  },

  gasto_sanitario_publico_pib: {
    title: "Gasto sanitario público",
    formatValue: pct1,
    unitLabel: "del PIB",
    isPercentage: true
  },


  /* ======================================================
     DEMOGRAFÍA
     ====================================================== */

  poblacion_residente: {
    title: "Población residente",
    formatValue: compact,
    unitLabel: "personas"
  },

  crecimiento_poblacion: {
    title: "Crecimiento de la población",
    formatValue: pct1,
    unitLabel: "variación anual",
    isPercentage: true
  },


  /* ======================================================
     RENTA Y DESIGUALDAD
     ====================================================== */

  renta_neta_media_persona: {
    title: "Renta neta media",
    formatValue: euro0,
    unitLabel: "por persona"
  },

  renta_media_unidad_consumo: {
    title: "Renta por unidad de consumo",
    formatValue: euro0,
    unitLabel: "por unidad de consumo"
  },

  indice_gini: {
    title: "Desigualdad · Gini",
    formatValue: num1,
    unitLabel: "índice 0–100"
  },

  ratio_s80_s20: {
    title: "Desigualdad · S80/S20",
    formatValue: num1,
    unitLabel: "ratio de renta"
  },

  tasa_arope: {
    title: "Riesgo de pobreza o exclusión",
    formatValue: pct1,
    unitLabel: "tasa AROPE",
    isPercentage: true
  },

  tasa_riesgo_pobreza: {
    title: "Riesgo de pobreza",
    formatValue: pct1,
    unitLabel: "población",
    isPercentage: true
  },

  carencia_material_social_severa: {
    title: "Carencia material severa",
    formatValue: pct1,
    unitLabel: "población",
    isPercentage: true
  },

  baja_intensidad_trabajo: {
    title: "Baja intensidad laboral",
    formatValue: pct1,
    unitLabel: "población",
    isPercentage: true
  },


  /* ======================================================
     TURISMO / PROYECCIÓN EXTERIOR
     ====================================================== */

  turistas_internacionales: {
    title: "Turistas internacionales",
    formatValue: compact,
    unitLabel: "personas"
  },

  visitantes_internacionales_total: {
    title: "Visitantes internacionales",
    formatValue: compact,
    unitLabel: "personas"
  },

  gasto_turistico_internacional: {
    title: "Gasto turístico internacional",
    formatValue: millionsEuro,
    unitLabel: "millones de euros"
  },

  gasto_medio_turista: {
    title: "Gasto medio por turista",
    formatValue: euro0,
    unitLabel: "por viaje"
  },

  duracion_media_viaje_turista: {
    title: "Duración media del viaje",
    formatValue: value => `${nf1.format(value)} días`,
    unitLabel: "por turista"
  }

};


const sectionDefinitions = {

  economia: {
    kicker: "01 · Economía",
    title: "Economía y precios",
    description:
      "Crecimiento, renta, tamaño de la economía y evolución de los precios.",

    groups: [
      {
        title: "Actividad y renta",
        indicators: [
          "crecimiento_pib_real",
          "pib_per_capita_eur",
          "pib_nominal_eur"
        ]
      },

      {
        title: "Precios",
        indicators: [
          "inflacion_ipc_media_anual",
          "inflacion_alimentos_media_anual",
          "ipc_indice_general_media_anual"
        ]
      }
    ]
  },


  empleo: {
    kicker: "02 · Mercado laboral",
    title: "Empleo y salarios",
    description:
      "Actividad, empleo, desempleo y evolución de las rentas del trabajo.",

    groups: [
      {
        title: "Mercado laboral",
        indicators: [
          "tasa_actividad",
          "tasa_empleo",
          "tasa_desempleo",
          "tasa_paro_juvenil"
        ]
      },

      {
        title: "Salarios",
        indicators: [
          "salario_mediano_anual_bruto_Total",
          "salario_medio_anual_bruto_Total",
          "salario_modal_anual_bruto_Total",
          "smi_mensual_14_pagas_Total",
          "salario_mediano_mensual_bruto_epa_Total",
          "salario_medio_mensual_bruto_epa_Total"
        ]
      },

      {
        title: "Brechas salariales",
        indicators: [
          "salario_medio_anual_bruto_Hombres",
          "salario_medio_anual_bruto_Mujeres",
          "brecha_salarial_media_anual_mujeres_hombres_Total"
        ]
      },

      {
        title: "Salario y formación",
        indicators: [
          "salario_medio_mensual_bruto_epa_formacion_Hasta secundaria 1ª etapa",
          "salario_medio_mensual_bruto_epa_formacion_Secundaria 2ª etapa",
          "salario_medio_mensual_bruto_epa_formacion_Superior, incluido doctorado"
        ]
      }
    ]
  },


  vivienda: {
    kicker: "03 · Vivienda",
    title: "Vivienda y accesibilidad",
    description:
      "Evolución de los precios de compra y alquiler y actividad del mercado residencial.",

    groups: [
      {
        title: "Precios",
        indicators: [
          "variacion_precio_vivienda",
          "indice_precio_vivienda",
          "variacion_precio_alquiler",
          "indice_precio_alquiler"
        ]
      },

      {
        title: "Mercado residencial",
        indicators: [
          "compraventas_viviendas_total",
          "compraventas_vivienda_nueva"
        ]
      }
    ]
  },


  estado: {
    kicker: "04 · Sector público",
    title: "Finanzas públicas",
    description:
      "Deuda pública y algunos de los principales indicadores disponibles de gasto público.",

    groups: [
      {
        title: "Sector público",
        indicators: [
          "deuda_publica_pde_pib",
          "variacion_deuda_publica_pp",
          "gasto_sanitario_publico_pib"
        ]
      }
    ]
  },


  pensiones: {
    kicker: "05 · Demografía",
    title: "Pensiones y demografía",
    description:
      "La estructura demográfica condiciona la sostenibilidad futura del sistema de pensiones.",

    note:
      "El dataset actual todavía no contiene indicadores específicos del sistema de pensiones. Esta primera versión muestra únicamente la base demográfica.",

    groups: [
      {
        title: "Demografía",
        indicators: [
          "poblacion_residente",
          "crecimiento_poblacion"
        ]
      }
    ]
  },


  sociedad: {
    kicker: "06 · Sociedad",
    title: "Renta, pobreza y desigualdad",
    description:
      "Distribución de la renta, desigualdad económica y riesgo de pobreza o exclusión social.",

    groups: [
      {
        title: "Renta",
        indicators: [
          "renta_neta_media_persona",
          "renta_media_unidad_consumo"
        ]
      },

      {
        title: "Desigualdad",
        indicators: [
          "indice_gini",
          "ratio_s80_s20"
        ]
      },

      {
        title: "Pobreza y exclusión",
        indicators: [
          "tasa_arope",
          "tasa_riesgo_pobreza",
          "carencia_material_social_severa",
          "baja_intensidad_trabajo"
        ]
      }
    ]
  },


  mundo: {
    kicker: "07 · España en el mundo",
    title: "Posición y proyección internacional",
    description:
      "Peso económico y algunos indicadores de la inserción de España en los flujos internacionales.",

    note:
      "La comparación sistemática con UE, eurozona, OCDE y otras economías se incorporará en la siguiente fase.",

    groups: [
      {
        title: "Posición internacional",
        indicators: [
          "posicion_pib_mundial"
        ]
      },

      {
        title: "Turismo internacional",
        indicators: [
          "turistas_internacionales",
          "visitantes_internacionales_total",
          "gasto_turistico_internacional",
          "gasto_medio_turista",
          "duracion_media_viaje_turista"
        ]
      }
    ]
  }

};

function renderMetricSection(sectionId) {

  const config = sectionDefinitions[sectionId];

  const section = document.createElement("section");

  section.id = sectionId;
  section.className = "dashboard-section";


  /* HEADER */

  const header = document.createElement("div");
  header.className = "section-header";

  header.innerHTML = `
    <div class="section-kicker">
      ${config.kicker}
    </div>

    <h2>
      ${config.title}
    </h2>

    <div class="section-description">
      ${config.description}
    </div>
  `;

  section.append(header);


  /* NOTA METODOLÓGICA */

  if (config.note) {

    const note = document.createElement("div");

    note.className = "section-note";
    note.textContent = config.note;

    section.append(note);
  }


  /* GRUPOS */

  for (const group of config.groups) {

    const availableGroupIndicators =
      group.indicators.filter(
        id => availableIndicators.includes(id)
      );

    if (!availableGroupIndicators.length) {
      continue;
    }


    const groupElement =
      document.createElement("div");

    groupElement.className = "metric-group";


    const groupTitle =
      document.createElement("h3");

    groupTitle.className = "metric-group-title";
    groupTitle.textContent = group.title;

    groupElement.append(groupTitle);


    const grid =
      document.createElement("div");

    grid.className = "kpi-grid";


    for (
      const indicatorId
      of availableGroupIndicators
    ) {

      const presentation =
        kpiPresentation[indicatorId] ?? {};

      const card =
        KpiCard(spainData, {

          indicatorId,

          title:
            presentation.title ??
            getTitle(indicatorId),

          formatValue:
            presentation.formatValue ??
            formatter(indicatorId),

          unitLabel:
            presentation.unitLabel ?? "",

          isPercentage:
            presentation.isPercentage ??
            isPercentage(indicatorId)

        });

      grid.append(card);
    }


    groupElement.append(grid);

    section.append(groupElement);
  }


  return section;
}




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


<div id="inicio" class="hero">
  <div class="hero-kicker">
    ATENEA
  </div>

  <h1>España en datos</h1>

  <div class="hero-subtitle">
    Una radiografía de la realidad económica, social e institucional de España construida a partir de datos verificables, trazables y  comparables internacionalmente.
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
    Cobertura hasta:
    <strong>${latestDatasetYear}</strong>
  </span>
`;

display(meta);
```

```js
// 1. Imprimimos el título y la descripción arriba de todo (ocupando el ancho completo)
const header = document.createElement("div");
header.className = "section-header dashboard-section first";
header.style.borderTop = "none";
header.style.marginTop = "0";
header.innerHTML = `
  <div class="section-kicker">Situación actual</div>
  <h2>España en un minuto</h2>
  <div class="section-description">
    Indicadores esenciales para comprender rápidamente la situación económica y social de España.
  </div>
`;
display(header);

// 2. Creamos el contenedor en dos columnas para poner las tarjetas y el análisis al lado
const seccionContainer = document.createElement("div");
seccionContainer.className = "seccion-con-analisis";

// Columna izquierda: Las tarjetas KPI
const columnaDatos = document.createElement("div");
columnaDatos.className = "columna-datos";

const grid = document.createElement("div");
grid.className = "kpi-grid";

for (const indicatorId of indicatorsToShow) {
  const presentation = kpiPresentation[indicatorId] ?? {};
  const card = KpiCard(spainData, {
    indicatorId,
    title: presentation.title ?? getTitle(indicatorId),
    formatValue: presentation.formatValue ?? formatter(indicatorId),
    unitLabel: presentation.unitLabel ?? "",
    isPercentage: presentation.isPercentage ?? isPercentage(indicatorId)
  });
  grid.append(card);
}
columnaDatos.append(grid);
seccionContainer.append(columnaDatos);

// Columna derecha: El cuadro de Análisis Atenea
const columnaAnalisis = document.createElement("div");
columnaAnalisis.className = "columna-analisis";
columnaAnalisis.innerHTML = `
  <h4>💡 Análisis Atenea</h4>
  <p>
    La economía española mantiene tasas de crecimiento diferencial positivas frente a gran parte del entorno europeo, apoyada en el sector exterior y la creación de empleo. 
  </p>
  <p>
    No obstante, los desequilibrios estructurales en productividad y el coste de acceso residencial continúan marcando el pulso del debate socioeconómico.
  </p>
`;
seccionContainer.append(columnaAnalisis);

// Mostramos el bloque de dos columnas
display(seccionContainer);

// 3. Renderizamos el resto de secciones del dashboard normalmente
const sectionOrder = [
  "economia",
  "empleo",
  "vivienda",
  "estado",
  "pensiones",
  "sociedad",
  "mundo"
];

for (const sectionId of sectionOrder) {
  display(
    renderMetricSection(sectionId)
  );
}
```


```js
const grid = document.createElement("div");
grid.className = "kpi-grid";

for (const indicatorId of indicatorsToShow) {
  const presentation = kpiPresentation[indicatorId] ?? {};

  const card = KpiCard(spainData, {
    indicatorId,
    title: presentation.title ?? getTitle(indicatorId),
    formatValue: presentation.formatValue ?? formatter(indicatorId),
    unitLabel: presentation.unitLabel ?? "",
    isPercentage: presentation.isPercentage ?? isPercentage(indicatorId)
  });

  grid.append(card);
}

// Inyectamos el grid en el contenedor izquierdo de la sección
document.getElementById("resumen-grid-container").replaceChildren(grid);

display(grid);
```

```js
const sectionOrder = [
  "economia",
  "empleo",
  "vivienda",
  "estado",
  "pensiones",
  "sociedad",
  "mundo"
];

for (const sectionId of sectionOrder) {
  display(
    renderMetricSection(sectionId)
  );
}
```
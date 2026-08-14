import * as Plot from "npm:@observablehq/plot";
import * as htl from "npm:htl";

export function KpiCard(data, options = {}) {
  const {
    indicatorId,
    title = indicatorId ?? "Indicador",
    formatValue = d => d?.toLocaleString("es-ES") ?? "—",
    invertColors = false,
    isPercentage = false
  } = options;

  // Protección frente a llamadas incorrectas
  if (!Array.isArray(data)) {
    return htl.html`
      <div class="kpi-card">
        <div class="kpi-title">${title}</div>
        <div class="text-red">
          Error: KpiCard no ha recibido un array de datos.
        </div>
      </div>
    `;
  }

  if (!indicatorId) {
    return htl.html`
      <div class="kpi-card">
        <div class="text-red">
          Error: falta indicatorId.
        </div>
      </div>
    `;
  }

  // Filtrar y ordenar datos por año
  const df = data
    .filter(d => d.indicator_id === indicatorId)
    .filter(d => d.value != null && d.year != null)
    .sort((a, b) => a.year - b.year);

  // Si no existe el indicador
  if (df.length === 0) {
    return htl.html`
      <div class="kpi-card">
        <div class="kpi-title">${title}</div>
        <div class="kpi-value">—</div>
        <div class="text-small muted">
          Sin datos para "${indicatorId}"
        </div>
      </div>
    `;
  }

  const latest = df[df.length - 1];
  const previous = df[df.length - 2];

  const value = latest.value;
  const prevValue = previous ? previous.value : value;
  const diff = value - prevValue;

  // Cálculo de variaciones
  let diffText = "";

  if (isPercentage) {
    diffText = `${Math.abs(diff).toFixed(1)} pp`;
  } else {
    const diffPct =
      prevValue !== 0
        ? (diff / prevValue) * 100
        : 0;

    diffText = `${Math.abs(diffPct).toFixed(1)} %`;
  }

  // Lógica semántica
  const isPositive = diff > 0;

  let colorClass =
    isPositive ? "text-green" : "text-red";

  if (invertColors) {
    colorClass =
      isPositive ? "text-red" : "text-green";
  }

  const arrow =
    diff > 0 ? "▲" :
      diff < 0 ? "▼" :
        "■";

  // Sparkline
  const sparkline = Plot.plot({
    width: 140,
    height: 40,
    axis: null,
    margin: 0,
    marks: [
      Plot.lineY(df, {
        x: "year",
        y: "value",
        stroke: "currentColor",
        strokeWidth: 2
      }),

      Plot.dot(df, {
        x: "year",
        y: "value",
        r: 2,
        fill: "currentColor"
      }),

      Plot.dot([latest], {
        x: "year",
        y: "value",
        r: 3.5,
        fill: "currentColor"
      })
    ]
  });

  return htl.html`
    <div class="kpi-card">

      <div class="kpi-title">
        ${title}
      </div>

      <div class="kpi-value">
        ${formatValue(value)}
      </div>

      <div class="kpi-diff ${colorClass} font-bold text-small">
        ${arrow} ${diffText}
        <span class="muted font-normal">
          (vs año ant.)
        </span>
      </div>

      <div class="kpi-spark mt-2 opacity-70">
        ${sparkline}
      </div>

      <div class="text-small muted">
        ${latest.year}
      </div>

    </div>
  `;
}
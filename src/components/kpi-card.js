import * as Plot from "npm:@observablehq/plot";
import * as htl from "npm:htl";

export function KpiCard(data, options = {}) {
  const {
    indicatorId,
    title = indicatorId,
    formatValue = value => String(value),
    unitLabel = "",
    isPercentage = false
  } = options;

  const rows = data
    .filter(d =>
      d.indicator_id === indicatorId &&
      Number.isFinite(Number(d.year)) &&
      Number.isFinite(Number(d.value))
    )
    .map(d => ({
      ...d,
      year: Number(d.year),
      value: Number(d.value)
    }))
    .sort((a, b) => a.year - b.year);

  if (!rows.length) {
    return htl.html`
      <article class="kpi-card">
        <div class="kpi-title">${title}</div>
        <div class="kpi-empty">Dato no disponible</div>
      </article>
    `;
  }

  const latest = rows[rows.length - 1];
  const previous =
    rows.length > 1 ? rows[rows.length - 2] : null;

  let arrow = "•";
  let diffText = "Sin comparación anterior";

  if (previous) {
    const diff = latest.value - previous.value;

    arrow =
      diff > 0 ? "▲" :
        diff < 0 ? "▼" :
          "●";

    if (isPercentage) {
      diffText =
        `${Math.abs(diff).toLocaleString("es-ES", {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        })} pp`;
    } else {
      const diffPct =
        previous.value !== 0
          ? (diff / previous.value) * 100
          : 0;

      diffText =
        `${Math.abs(diffPct).toLocaleString("es-ES", {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        })} %`;
    }

    diffText += ` vs ${previous.year}`;
  }

  const sparkline = Plot.plot({
    width: 280,
    height: 64,
    axis: null,
    marginTop: 6,
    marginRight: 4,
    marginBottom: 4,
    marginLeft: 4,

    marks: [
      Plot.lineY(rows, {
        x: "year",
        y: "value",
        stroke: "currentColor",
        strokeWidth: 2
      }),

      Plot.dot([latest], {
        x: "year",
        y: "value",
        fill: "currentColor",
        r: 3.5
      })
    ]
  });

  const firstYear = rows[0].year;

  const source =
    latest.source ||
    "Fuente no disponible";

  const sourceUrlRaw =
    String(latest.source_url || "");

  const sourceUrl =
    sourceUrlRaw
      .split("|")[0]
      .trim();

  const hasSourceUrl =
    /^https?:\/\//i.test(sourceUrl);

  const status =
    latest.status || "";

  const definition =
    latest.definition || "";

  return htl.html`
    <article class="kpi-card">

      <div class="kpi-card-top">
        <div class="kpi-title">${title}</div>

        <div class="kpi-year">
          ${latest.year}
        </div>
      </div>

      <div class="kpi-value-block">

        <div class="kpi-value">
          ${formatValue(latest.value)}
        </div>

        ${unitLabel
      ? htl.html`
                <div class="kpi-unit">
                  ${unitLabel}
                </div>
              `
      : ""
    }

      </div>

      <div class="kpi-diff">
        <span class="kpi-arrow">${arrow}</span>
        ${diffText}
      </div>

      <div class="kpi-spark">
        ${sparkline}
      </div>

      <div class="kpi-years">
        <span>${firstYear}</span>
        <span>${latest.year}</span>
      </div>

      <div class="kpi-source">

        <span>Fuente · </span>

        ${hasSourceUrl
      ? htl.html`
                <a
                  href=${sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ${source}
                </a>
              `
      : source
    }

      </div>

      ${definition || status
      ? htl.html`
              <details class="kpi-details">

                <summary>
                  Metodología
                </summary>

                <div class="kpi-details-body">

                  ${status
          ? htl.html`
                          <div>
                            <strong>Estado:</strong>
                            ${status}
                          </div>
                        `
          : ""
        }

                  ${definition
          ? htl.html`
                          <div>
                            <strong>Definición:</strong>
                            ${definition}
                          </div>
                        `
          : ""
        }

                </div>

              </details>
            `
      : ""
    }

    </article>
  `;
}
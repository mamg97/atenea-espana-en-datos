import csv
import json
import os
import sys

from google.oauth2 import service_account
from googleapiclient.discovery import build


SHEET_ID = os.environ["GOOGLE_SHEET_ID"]
SHEET_RANGE = "Datos_largos_Looker!A:R"

SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets.readonly"
]


COLUMN_MAP = {
    "año": "year",
    "categoria": "category",
    "subcategoria": "subcategory",
    "indicador_id": "indicator_id",
    "indicador": "indicator_name",
    "fuente_oficial": "source",
    "valor": "value",
    "url_verificable": "source_url",
    "unidad": "unit",
    "periodo_referencia": "reference_period",
    "frecuencia": "frequency",
    "tipo_periodo": "period_type",
    "estado_dato": "status",
    "geo_nivel": "geo_level",
    "geo_nombre": "geo_name",
    "definicion": "definition",
    "fecha_revision_fuente": "source_revision_date",
    "notas": "notes",
}


def get_credentials():
    # GitHub Actions
    credentials_json = os.environ.get(
        "GOOGLE_SERVICE_ACCOUNT_JSON"
    )

    if credentials_json:
        info = json.loads(credentials_json)

        return service_account.Credentials.from_service_account_info(
            info,
            scopes=SCOPES
        )

    # Desarrollo local
    credentials_file = os.environ.get(
        "GOOGLE_APPLICATION_CREDENTIALS"
    )

    if credentials_file:
        return service_account.Credentials.from_service_account_file(
            credentials_file,
            scopes=SCOPES
        )

    raise RuntimeError(
        "No se han encontrado credenciales de Google."
    )


credentials = get_credentials()

service = build(
    "sheets",
    "v4",
    credentials=credentials,
    cache_discovery=False
)

response = (
    service
    .spreadsheets()
    .values()
    .get(
        spreadsheetId=SHEET_ID,
        range=SHEET_RANGE,
        valueRenderOption="UNFORMATTED_VALUE",
        dateTimeRenderOption="FORMATTED_STRING"
    )
    .execute()
)

rows = response.get("values", [])

if not rows:
    raise RuntimeError(
        "No se encontraron datos en Datos_largos_Looker."
    )


source_header = rows[0]

output_header = [
    COLUMN_MAP.get(column, column)
    for column in source_header
]


writer = csv.DictWriter(
    sys.stdout,
    fieldnames=output_header,
    lineterminator="\n"
)

writer.writeheader()


for raw_row in rows[1:]:
    raw_row = raw_row + [""] * (
        len(source_header) - len(raw_row)
    )

    source_record = dict(
        zip(source_header, raw_row)
    )

    output_record = {
        COLUMN_MAP.get(key, key): value
        for key, value in source_record.items()
    }

    writer.writerow(output_record)
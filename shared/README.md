## DB Table Schema
```SQL
CREATE TABLE "results" (
    "id"    INTEGER NOT NULL,
    "filename"    TEXT NOT NULL,
    "frame"    INTEGER NOT NULL,
    "manual_check"    INTEGER,
    "model_check"    INTEGER,
    "model_certainty"    REAL,
    PRIMARY KEY("id")
);
```
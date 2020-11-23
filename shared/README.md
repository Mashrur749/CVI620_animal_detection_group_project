## DB Table Schemas

- Authors:
```SQL
CREATE TABLE "authors" (
	"id"	INTEGER,
	"name"	TEXT,
	"url"	TEXT
)
```
- Results:
```SQL
CREATE TABLE "results" (
	"id"	INTEGER NOT NULL,
	"sample_id"	INTEGER NOT NULL,
	"manual_check"	INTEGER,
	"model_check"	INTEGER,
	"model_certainty"	REAL,
	FOREIGN KEY("sample_id") REFERENCES "samples"("id"),
	PRIMARY KEY("id")
)
```
- Samples:
```SQL
CREATE TABLE "samples" (
	"id"	INTEGER NOT NULL,
	"video_id"	INTEGER NOT NULL,
	"time"	INTEGER,
	"filename"	TEXT,
	PRIMARY KEY("id")
)
```
- Videos:
```SQL
CREATE TABLE "videos" (
	"id"	INTEGER NOT NULL,
	"file_id"	INTEGER NOT NULL,
	"author_id"	INTEGER NOT NULL,
	"width"	INTEGER NOT NULL,
	"height"	INTEGER NOT NULL,
	"duration"	INTEGER NOT NULL,
	"pexel_url"	TEXT NOT NULL,
	"source_url"	TEXT NOT NULL,
	"filename"	TEXT NOT NULL,
	"file_type"	TEXT NOT NULL,
	UNIQUE("id","file_id"),
	FOREIGN KEY("author_id") REFERENCES "authors"("id"),
	PRIMARY KEY("id")
)
```
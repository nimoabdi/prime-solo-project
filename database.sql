
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "series" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"name" VARCHAR(120),
	"cover" VARCHAR(120) NOT NULL,
	"watched" BOOLEAN,
	"summary" TEXT NOT NULL
);
	
CREATE TABLE "user_series"(
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"series_id" INT REFERENCES "series",
	"status" VARCHAR (200),
	"rating" INTEGER
);	

CREATE TABLE "user_friends" (
	"id" SERIAL PRIMARY KEY,
	"user_following" INT,
	"user_followers" INT
);
	
INSERT INTO "series" ("name", "cover", "watched", "summary")
VALUES
('Game Of Thrones', 'https://static.tvmaze.com/uploads/images/original_untouched/190/476117.jpg', false, 'Based on the bestselling book series A Song of Ice and Fire by George R.R. Martin, this sprawling new HBO drama is set in a world where summers span decades and winters can last a lifetime. From the scheming south and the savage eastern lands, to the frozen north and ancient Wall that protects the realm from the mysterious darkness beyond, the powerful families of the Seven Kingdoms are locked in a battle for the Iron Throne. This is a story of duplicity and treachery, nobility and honor, conquest and triumph. In the Game of Thrones, you either win or you die.');
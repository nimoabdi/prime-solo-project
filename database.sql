
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
	"id" SERIAL PRIMARY KEY NOT NULL
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
	
/*
  Warnings:

  - Made the column `name` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `username` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "firstName" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "lastName" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "longIntro" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "mediumIntro" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "shortIntro" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "userLocation" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "name" SET DEFAULT '',
ALTER COLUMN "username" SET NOT NULL;

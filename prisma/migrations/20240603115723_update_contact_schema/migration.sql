/*
  Warnings:

  - Made the column `leetcode` on table `contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `hackerRank` on table `contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `github` on table `contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `linkedIn` on table `contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `instagram` on table `contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `twitter` on table `contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `facebook` on table `contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `youtube` on table `contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `mediumDigest` on table `contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phoneNumber` on table `contact` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "contact" ALTER COLUMN "leetcode" SET NOT NULL,
ALTER COLUMN "hackerRank" SET NOT NULL,
ALTER COLUMN "github" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "linkedIn" SET NOT NULL,
ALTER COLUMN "instagram" SET NOT NULL,
ALTER COLUMN "twitter" SET NOT NULL,
ALTER COLUMN "facebook" SET NOT NULL,
ALTER COLUMN "youtube" SET NOT NULL,
ALTER COLUMN "mediumDigest" SET NOT NULL,
ALTER COLUMN "phoneNumber" SET NOT NULL;

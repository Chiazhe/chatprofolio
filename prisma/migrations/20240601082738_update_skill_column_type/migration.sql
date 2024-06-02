/*
  Warnings:

  - The `skillYearsOfExperience` column on the `skill` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "skill" DROP COLUMN "skillYearsOfExperience",
ADD COLUMN     "skillYearsOfExperience" INTEGER,
ALTER COLUMN "skillRating" DROP NOT NULL;

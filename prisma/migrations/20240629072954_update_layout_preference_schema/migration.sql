/*
  Warnings:

  - The `aboutLayoutPreference` column on the `layoutpreference` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `experienceLayoutPreference` column on the `layoutpreference` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `educationLayoutPreference` column on the `layoutpreference` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `projectLayoutPreference` column on the `layoutpreference` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `skillLayoutPreference` column on the `layoutpreference` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "AboutLayoutPreference" AS ENUM ('classic', 'fancy');

-- CreateEnum
CREATE TYPE "ExperienceLayoutPreference" AS ENUM ('classic', 'fancy');

-- CreateEnum
CREATE TYPE "EducationLayoutPreference" AS ENUM ('classic', 'fancy');

-- CreateEnum
CREATE TYPE "ProjectLayoutPreference" AS ENUM ('classic', 'fancy');

-- CreateEnum
CREATE TYPE "SkillLayoutPreference" AS ENUM ('classic', 'fancy');

-- AlterTable
ALTER TABLE "layoutpreference" DROP COLUMN "aboutLayoutPreference",
ADD COLUMN     "aboutLayoutPreference" "AboutLayoutPreference" NOT NULL DEFAULT 'classic',
DROP COLUMN "experienceLayoutPreference",
ADD COLUMN     "experienceLayoutPreference" "EducationLayoutPreference" NOT NULL DEFAULT 'classic',
DROP COLUMN "educationLayoutPreference",
ADD COLUMN     "educationLayoutPreference" "EducationLayoutPreference" NOT NULL DEFAULT 'classic',
DROP COLUMN "projectLayoutPreference",
ADD COLUMN     "projectLayoutPreference" "ProjectLayoutPreference" NOT NULL DEFAULT 'classic',
DROP COLUMN "skillLayoutPreference",
ADD COLUMN     "skillLayoutPreference" "SkillLayoutPreference" NOT NULL DEFAULT 'classic';

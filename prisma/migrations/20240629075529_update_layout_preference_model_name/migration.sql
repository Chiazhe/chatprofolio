/*
  Warnings:

  - You are about to drop the `layoutpreference` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "layoutpreference" DROP CONSTRAINT "layoutpreference_holderId_fkey";

-- DropTable
DROP TABLE "layoutpreference";

-- CreateTable
CREATE TABLE "layoutPreference" (
    "id" SERIAL NOT NULL,
    "aboutLayoutPreference" "AboutLayoutPreference" NOT NULL DEFAULT 'classic',
    "experienceLayoutPreference" "EducationLayoutPreference" NOT NULL DEFAULT 'classic',
    "educationLayoutPreference" "EducationLayoutPreference" NOT NULL DEFAULT 'classic',
    "projectLayoutPreference" "ProjectLayoutPreference" NOT NULL DEFAULT 'classic',
    "skillLayoutPreference" "SkillLayoutPreference" NOT NULL DEFAULT 'classic',
    "holderId" TEXT NOT NULL,

    CONSTRAINT "layoutPreference_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "layoutPreference_holderId_idx" ON "layoutPreference"("holderId");

-- AddForeignKey
ALTER TABLE "layoutPreference" ADD CONSTRAINT "layoutPreference_holderId_fkey" FOREIGN KEY ("holderId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

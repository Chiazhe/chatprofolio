-- CreateTable
CREATE TABLE "skill" (
    "id" SERIAL NOT NULL,
    "skillName" TEXT NOT NULL,
    "skillYearsOfExperience" TEXT NOT NULL,
    "skillRating" TEXT NOT NULL,
    "holderId" TEXT NOT NULL,

    CONSTRAINT "skill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "skill_holderId_idx" ON "skill"("holderId");

-- AddForeignKey
ALTER TABLE "skill" ADD CONSTRAINT "skill_holderId_fkey" FOREIGN KEY ("holderId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

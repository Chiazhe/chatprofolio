-- CreateTable
CREATE TABLE "achievement" (
    "id" SERIAL NOT NULL,
    "achievementTitle" TEXT NOT NULL,
    "achievementProvider" TEXT NOT NULL,
    "achievementDescription" TEXT[],
    "achievementExpiry" TIMESTAMP(3),
    "holderId" TEXT NOT NULL,

    CONSTRAINT "achievement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "achievement_holderId_idx" ON "achievement"("holderId");

-- AddForeignKey
ALTER TABLE "achievement" ADD CONSTRAINT "achievement_holderId_fkey" FOREIGN KEY ("holderId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

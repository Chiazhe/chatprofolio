-- CreateTable
CREATE TABLE "experience" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "workDescription" TEXT[],
    "skillUsed" TEXT[],
    "companyLogo" TEXT,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "holderId" TEXT NOT NULL,

    CONSTRAINT "experience_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "experience_holderId_idx" ON "experience"("holderId");

-- AddForeignKey
ALTER TABLE "experience" ADD CONSTRAINT "experience_holderId_fkey" FOREIGN KEY ("holderId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

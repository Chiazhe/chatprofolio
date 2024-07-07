-- CreateTable
CREATE TABLE "chatbotRecords" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "holderId" TEXT NOT NULL,

    CONSTRAINT "chatbotRecords_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "chatbotRecords_holderId_idx" ON "chatbotRecords"("holderId");

-- AddForeignKey
ALTER TABLE "chatbotRecords" ADD CONSTRAINT "chatbotRecords_holderId_fkey" FOREIGN KEY ("holderId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the `chatbotRecords` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "chatbotRecords" DROP CONSTRAINT "chatbotRecords_holderId_fkey";

-- DropTable
DROP TABLE "chatbotRecords";

-- CreateTable
CREATE TABLE "ChatbotRecords" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT NOT NULL,

    CONSTRAINT "ChatbotRecords_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ChatbotRecords_username_idx" ON "ChatbotRecords"("username");

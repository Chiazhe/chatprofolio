-- CreateTable
CREATE TABLE "contact" (
    "id" SERIAL NOT NULL,
    "leetcode" TEXT,
    "hackerRank" TEXT,
    "github" TEXT,
    "email" TEXT,
    "linkedIn" TEXT,
    "instagram" TEXT,
    "twitter" TEXT,
    "facebook" TEXT,
    "youtube" TEXT,
    "mediumDigest" TEXT,
    "phoneNumber" TEXT,
    "holderId" TEXT NOT NULL,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "contact_holderId_idx" ON "contact"("holderId");

-- AddForeignKey
ALTER TABLE "contact" ADD CONSTRAINT "contact_holderId_fkey" FOREIGN KEY ("holderId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

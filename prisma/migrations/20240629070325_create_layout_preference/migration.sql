-- CreateTable
CREATE TABLE "layoutpreference" (
    "id" SERIAL NOT NULL,
    "aboutLayoutPreference" TEXT NOT NULL DEFAULT 'classic',
    "experienceLayoutPreference" TEXT NOT NULL DEFAULT 'classic',
    "educationLayoutPreference" TEXT NOT NULL DEFAULT 'classic',
    "projectLayoutPreference" TEXT NOT NULL DEFAULT 'classic',
    "skillLayoutPreference" TEXT NOT NULL DEFAULT 'classic',
    "holderId" TEXT NOT NULL,

    CONSTRAINT "layoutpreference_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "layoutpreference_holderId_idx" ON "layoutpreference"("holderId");

-- AddForeignKey
ALTER TABLE "layoutpreference" ADD CONSTRAINT "layoutpreference_holderId_fkey" FOREIGN KEY ("holderId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

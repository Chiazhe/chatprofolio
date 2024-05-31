-- CreateTable
CREATE TABLE "project" (
    "id" SERIAL NOT NULL,
    "projectTitle" TEXT NOT NULL,
    "projectDescription" TEXT NOT NULL,
    "projectUrl" TEXT NOT NULL,
    "githubLink" TEXT,
    "technologyUsed" TEXT[],
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "holderId" TEXT NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "project_holderId_idx" ON "project"("holderId");

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_holderId_fkey" FOREIGN KEY ("holderId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - The `projectDescription` column on the `project` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "project" ADD COLUMN     "projectImage" TEXT,
ALTER COLUMN "projectDescription" TYPE TEXT[] USING string_to_array("projectDescription", ','),
ALTER COLUMN "projectUrl" DROP NOT NULL;

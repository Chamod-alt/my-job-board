/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `jobType` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `type` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "createdAt",
DROP COLUMN "jobType",
ADD COLUMN     "type" TEXT NOT NULL;

-- DropTable
DROP TABLE "User";

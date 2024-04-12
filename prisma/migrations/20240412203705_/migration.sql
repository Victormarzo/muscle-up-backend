/*
  Warnings:

  - Changed the type of `updatedAt` on the `Execution` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `updatedAt` on the `Exercise` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `updatedAt` on the `History` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `updatedAt` on the `Session` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `updatedAt` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `updatedAt` on the `Workout` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Execution" DROP COLUMN "updatedAt",
ADD COLUMN     "updatedAt" VARCHAR(10) NOT NULL;

-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "updatedAt",
ADD COLUMN     "updatedAt" VARCHAR(10) NOT NULL;

-- AlterTable
ALTER TABLE "History" DROP COLUMN "updatedAt",
ADD COLUMN     "updatedAt" VARCHAR(10) NOT NULL;

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "updatedAt",
ADD COLUMN     "updatedAt" VARCHAR(10) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "updatedAt",
ADD COLUMN     "updatedAt" VARCHAR(10) NOT NULL;

-- AlterTable
ALTER TABLE "Workout" DROP COLUMN "updatedAt",
ADD COLUMN     "updatedAt" VARCHAR(10) NOT NULL;

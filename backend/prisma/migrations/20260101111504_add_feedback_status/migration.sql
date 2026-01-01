-- CreateEnum
CREATE TYPE "FeedbackStatus" AS ENUM ('PENDING', 'REVIEWED', 'ACTION_REQUIRED');

-- AlterTable
ALTER TABLE "Feedback" ADD COLUMN     "status" "FeedbackStatus" NOT NULL DEFAULT 'PENDING';

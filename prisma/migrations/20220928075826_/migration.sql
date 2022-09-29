/*
  Warnings:

  - You are about to drop the `Reportaire` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Reportaire";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "SongRef" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "songId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "SongRef_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

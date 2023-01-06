-- CreateTable
CREATE TABLE "LeetcodeDaily" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "LeetcodeDaily_date_key" ON "LeetcodeDaily"("date");

-- CreateIndex
CREATE UNIQUE INDEX "LeetcodeDaily_link_key" ON "LeetcodeDaily"("link");

-- CreateIndex
CREATE UNIQUE INDEX "LeetcodeDaily_title_key" ON "LeetcodeDaily"("title");

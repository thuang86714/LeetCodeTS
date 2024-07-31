function minHeightShelves(books: number[][], shelfWidth: number): number {
    const heightMemo: Map<number, number> = new Map();
    function findMinHeight(idx: number): number {
        if (idx >= books.length) {
            return 0;
        }
        if (heightMemo.get(idx)) {
            return heightMemo.get(idx)!;
        }

        let curLevelHeight = books[idx][1], curIdx = idx, height = 1000001, curWidth = shelfWidth;
        while (curIdx < books.length && curWidth - books[curIdx][0] >= 0) {
            curWidth -= books[curIdx][0];
            curLevelHeight = Math.max(curLevelHeight, books[curIdx][1]);
            curIdx++;
            height = Math.min(height, curLevelHeight + findMinHeight(curIdx));
        }
        heightMemo.set(idx, height);
        return height;
    }
    return findMinHeight(0);
};
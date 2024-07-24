function sortPeople(names: string[], heights: number[]): string[] {
    const heightNameMap: Map<number, string> = new Map();
    for (let i = 0; i < heights.length; i++) {
        heightNameMap.set(heights[i], names[i]);
    }

    heights.sort((a, b) => b - a);

    const result: string[] = [];
    for (let height of heights) {
        result.push(heightNameMap.get(height)!);
    }
    return result;
};
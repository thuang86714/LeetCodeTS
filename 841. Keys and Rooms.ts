function canVisitAllRooms(rooms: number[][]): boolean {
    const visited: Map<number, boolean> = new Map();
    visited.set(0, true);

    const unlockRoom = (key: number) => {
        if (rooms[key].length === 0) {
            return;
        }
        const tempSlice: number[] = rooms[key];
        rooms[key] = [];
        for (const newKey of tempSlice) {
            if (!visited.has(newKey)) {
                visited.set(newKey, true);
                unlockRoom(newKey);
            }
        }
    };

    unlockRoom(0); // Start by unlocking the first room

    return visited.size === rooms.length;
}
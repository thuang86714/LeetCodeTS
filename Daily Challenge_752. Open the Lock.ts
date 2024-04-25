function increaseChar(cur: string): string {
    if (cur === '9') {
        return '0';
    }
    return String.fromCharCode(cur.charCodeAt(0) + 1);
}

function decreaseChar(cur: string): string {
    if (cur === '0') {
        return '9';
    }
    return String.fromCharCode(cur.charCodeAt(0) - 1);
}

function openLock(deadends: string[], target: string): number {
    const deadendsSet: Set<string> = new Set(deadends);
    if (deadendsSet.has("0000")) {
        return -1;
    }

    const visitedSet: Set<string> = new Set();
    visitedSet.add("0000");

    const queue: string[] = ["0000"];
    let stepCount = 0;

    while (queue.length > 0) {
        let currentSize = queue.length;
        for (let i = 0; i < currentSize; i++) {
            const curString = queue.shift()!;
            if (curString === target) {
                return stepCount;
            }

            for (let j = 0; j < curString.length; j++) {
                let chars = curString.split('');
                chars[j] = increaseChar(chars[j]);
                let newString = chars.join('');
                if (!deadendsSet.has(newString) && !visitedSet.has(newString)) {
                    queue.push(newString);
                    visitedSet.add(newString);
                }

                chars[j] = decreaseChar(decreaseChar(chars[j]));
                newString = chars.join('');
                if (!deadendsSet.has(newString) && !visitedSet.has(newString)) {
                    queue.push(newString);
                    visitedSet.add(newString);
                }
                // Reset to the original character after exploration
                chars[j] = increaseChar(chars[j]);
            }
        }
        stepCount++;
    }
    return -1;
}

function asteroidCollision(ast: number[]): number[] {
    const asteroidStack: number[] = [];
    for (let i = 0; i < ast.length; i++) {
        let collision = false;
        while (asteroidStack.length > 0 && ast[i] < 0 && asteroidStack[asteroidStack.length - 1] > 0) {
            if (Math.abs(ast[i]) > asteroidStack[asteroidStack.length - 1]) {
                asteroidStack.pop();
                continue;
            } else if (Math.abs(ast[i]) === asteroidStack[asteroidStack.length - 1]) {
                asteroidStack.pop();
            }
            collision = true;
            break;
        }
        if (!collision && (ast[i] > 0 || asteroidStack.length === 0 || asteroidStack[asteroidStack.length - 1] < 0)) {
            asteroidStack.push(ast[i]);
        }
    }
    return asteroidStack;
}
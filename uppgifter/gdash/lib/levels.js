const levels = [];
let levelIndex = 0;

export function createLevel(createCallback) {
    levels.push(createCallback);
}

export function nextLevel() {
    levelIndex++;
    levels[levelIndex]();
}
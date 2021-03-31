const keys = [];

window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);

function onKeyDown(event) {
  keys[event.keyCode] = true;
}

function onKeyUp(event) {
  keys[event.keyCode] = false;
}

export function getKey(keyCode) {
  return keys[keyCode];
}

export const keyCodes = {
  arrowLeft: 65,
  arrowUp: 87,
  arrowRight: 68,
  arrowDown: 83
};
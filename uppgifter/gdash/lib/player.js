import { getKey, keyCodes } from "./input.js";
import { moveCollideX, moveCollideY } from "./physics.js";
import { platforms } from './platforms.js';

const gravity = 0.5;
const speed = 5;

let color = 'lime';

export const playerRect = {
  x: -400,
  y: 450 - 40,
  width: 40,
  height: 40
};

let vy = 0;
let grounded = false;

export function updatePlayer() {

  if(grounded && getKey(keyCodes.arrowUp)) {
    vy = -10;
    grounded = false;
  }

  vy += gravity;

  let vx = speed;
  /* kod så man kan gå
  let vx = 0;
  vx += getKey(keyCodes.arrowLeft) ? -5 : 0;
  vx += getKey(keyCodes.arrowRight) ? 5 : 0;
*/

  moveCollideX(vx, playerRect, platforms, onCollideX);
  moveCollideY(vy, playerRect, platforms, onCollideY);

  if(playerRect.y > 450 - playerRect.height) {
    playerRect.y = 450 - playerRect.height;
    vy = 0;
    grounded = true;
  }
}

/**
 * @param {CanvasRenderingContext2D} context 
 */
export function drawPlayer(context, camera) {
  context.fillStyle = color;
  context.fillRect(playerRect.x - camera.x, playerRect.y - camera.y, playerRect.width, playerRect.height);
}

function onCollideX(pawn, collisionObject) {
  playerRect.x = -100;
  playerRect.y = 760;

  return false;
}

function onCollideY(pawn, collisionObject) {
  if(vy >= 0) {
    grounded = true;
  }
  vy = 0;

  return true;
}
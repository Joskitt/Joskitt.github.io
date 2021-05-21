import { goalRect } from "./goal.js";
import { getKey, keyCodes } from "./input.js";
import { nextLevel } from "./levels.js";
import { moveCollideX, moveCollideY } from "./physics.js";
import { platforms } from './platforms.js';
import { spikes } from "./spikes.js";

const gravity = 0.7;
const speed = 6;
const jumpStrength = -12;

let color = 'lime';

export const playerRect = {
  x: -400,
  y: 450 - 40,
  width: 40,
  height: 40
};

let vy = 0;
let grounded = false;

const collideWithObjects = [ platforms, spikes, [ goalRect ] ]

export function updatePlayer() {

  if(grounded && getKey(keyCodes.arrowUp)) {
    vy = jumpStrength;
    grounded = false;
  }

  vy += gravity;

  let vx = speed;
  /* kod så man kan gå
  let vx = 0;
  vx += getKey(keyCodes.arrowLeft) ? -5 : 0;
  vx += getKey(keyCodes.arrowRight) ? 5 : 0;
*/

  moveCollideX(vx, playerRect, collideWithObjects, onCollideX);
  moveCollideY(vy, playerRect, collideWithObjects, onCollideY);

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
  if(collisionObject.type === "goal") {
    playerRect.x = -100;
    playerRect.y = 760;
    alert("next");
    nextLevel();
    return false;
  }
  playerRect.x = -100;
  playerRect.y = 760;

  return false;
}

function onCollideY(pawn, collisionObject) {
  if(collisionObject.type === 'spike') {
    playerRect.x = -100;
    playerRect.y = 760;
    return false;
  }
  if(vy >= 0) {
    grounded = true;
  }
  vy = 0;

  collisionObject.color = "yellow"

  return true;
}
import { createGoal, drawGoal, goalRect } from "./lib/goal.js";
import { createLevel, startLevel } from "./lib/levels.js";
import { clearPlatforms, createPlatform, drawPlatforms } from "./lib/platforms.js";
import { drawPlayer, updatePlayer, playerRect } from "./lib/player.js";
import { clearSpikes, createSpike, drawSpikes } from "./lib/spikes.js";

const canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 450;

/**
 * @type {CanvasRenderingContext2D}
 */
const context = canvas.getContext('2d');

const camera = {
  x: 0,
  y: 0
};

requestAnimationFrame(gameLoop);

function gameLoop() {
  requestAnimationFrame(gameLoop);

  //
  // Uppdatera alla game objects.
  //

  updatePlayer();
  
  camera.x = Math.max(0, playerRect.x - 100);
  camera.x = Math.min(camera.x, goalRect.x + goalRect.width - canvas.width);

  //
  // Rit ut alla game objects
  //

  context.clearRect(0, 0, canvas.width, canvas.height);
  drawPlatforms(context, camera);
  drawSpikes(context, camera);
  drawGoal(context, camera)
  drawPlayer(context, camera);
}

createLevel(() => {
  clearPlatforms()
  clearSpikes()

  createPlatform(40 * 15, canvas.height - 40 * 2, 40 * 1, 40 * 2)
createPlatform(40 * 15, canvas.height - 40 * 1, 40 * 6, 40 * 2)
createPlatform(40 * 21, canvas.height - 40 * 2, 40 * 1, 40 * 2)
createSpike(40 * 16, canvas.height - 30 * 2, 40 * 5, 40 * 1)
createPlatform(40 * 26, canvas.height - 40 * 3, 40 * 1, 40 * 3)
createPlatform(40 * 31, canvas.height - 40 * 4, 40 * 1, 40 * 4)
createPlatform(40 * 34, canvas.height - 40 * 2.5, 40 * 4, 40 * 2.5)
createSpike(40 * 36, canvas.height - 40 * 6, 40 * 10, 40 * 2)
createPlatform(40 * 44, canvas.height - 40 * 2.5, 40 * 4, 40 * 2.5)
createPlatform(40 * 51, canvas.height - 40 * 4.5, 40 * 1, 40 * 4.5)
createPlatform(40 * 54, canvas.height - 40 * 6, 40 * 1, 40 * 6)
createSpike(40 * 54, canvas.height - 40 * 6, 40 * 1, 40 * 1)
createPlatform(40 * 57, canvas.height - 40 * 5, 40 * 1, 40 * 5)
createPlatform(40 * 57, canvas.height - 40 * 13, 40 * 1, 40 * 5)
createPlatform(40 * 60, canvas.height - 40 * 3, 40 * 1, 40 * 5)
createPlatform(40 * 60, canvas.height - 40 * 12, 40 * 1, 40 * 6)

createGoal(40 * 70, 0, 40, canvas.height)
});


createLevel(() => {
  clearPlatforms()
  clearSpikes()
  
  createPlatform(40 * 15, canvas.height - 40 * 1, 40 * 1, 40 * 1)
  createPlatform(40 * 20, canvas.height - 40 * 2, 40 * 1, 40 * 2)
  createPlatform(40 * 30, canvas.height - 40 * 2, 40 * 1, 40 * 1)
  createPlatform(40 * 30, canvas.height - 40 * 4.5, 40 * 1, 40 * 1)
  createPlatform(40 * 30, canvas.height - 40 * 2, 40 * 12, 40 * 1)
  createSpike(40 * 41, canvas.height - 40 * 1, 40 * 1, 40 * 1)
  createPlatform(40 * 46, canvas.height - 40 * 3, 40 * 1, 40 * 1)
  createPlatform(40 * 52, canvas.height - 40 * 3, 40 * 1, 40 * 1)
  createPlatform(40 * 58, canvas.height - 40 * 3, 40 * 1, 40 * 1)
  createPlatform(40 * 64, canvas.height - 40 * 3, 40 * 1, 40 * 1)
  createPlatform(40 * 70, canvas.height - 40 * 3, 40 * 1, 40 * 1)
  createPlatform(40 * 76, canvas.height - 40 * 3, 40 * 1, 40 * 1)
  createPlatform(40 * 82, canvas.height - 40 * 3, 40 * 1, 40 * 1)
  createPlatform(40 * 88, canvas.height - 40 * 3, 40 * 1, 40 * 1)
  createPlatform(40 * 94, canvas.height - 40 * 3, 40 * 1, 40 * 1)

  createPlatform(40 * 49, canvas.height - 40 * 5, 40 * 1, 40 * 1)
  createPlatform(40 * 55, canvas.height - 40 * 5, 40 * 1, 40 * 1)
  createPlatform(40 * 61, canvas.height - 40 * 5, 40 * 1, 40 * 1)
  createPlatform(40 * 67, canvas.height - 40 * 5, 40 * 1, 40 * 1)
  createPlatform(40 * 73, canvas.height - 40 * 5, 40 * 1, 40 * 1)
  createPlatform(40 * 79, canvas.height - 40 * 5, 40 * 1, 40 * 1)
  createPlatform(40 * 85, canvas.height - 40 * 5, 40 * 1, 40 * 1)
  createPlatform(40 * 91, canvas.height - 40 * 5, 40 * 1, 40 * 1)
  createPlatform(40 * 97, canvas.height - 40 * 5, 40 * 1, 40 * 1)

  createPlatform(40 * 46, canvas.height - 40 * 7, 40 * 1, 40 * 1)
  createPlatform(40 * 52, canvas.height - 40 * 7, 40 * 1, 40 * 1)
  createPlatform(40 * 58, canvas.height - 40 * 7, 40 * 1, 40 * 1)
  createPlatform(40 * 64, canvas.height - 40 * 7, 40 * 1, 40 * 1)
  createPlatform(40 * 70, canvas.height - 40 * 7, 40 * 1, 40 * 1)
  createPlatform(40 * 76, canvas.height - 40 * 7, 40 * 1, 40 * 1)
  createPlatform(40 * 82, canvas.height - 40 * 7, 40 * 1, 40 * 1)
  createPlatform(40 * 88, canvas.height - 40 * 7, 40 * 1, 40 * 1)
  createPlatform(40 * 94, canvas.height - 40 * 7, 40 * 1, 40 * 1)
  createSpike(40 * 100, canvas.height - 40 * 6, 40 * 1, 40 * 6)

  createGoal(40 * 110, 0, 40, canvas.height)
});


startLevel(0);
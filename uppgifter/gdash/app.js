import { createGoal, drawGoal, goalRect } from "./lib/goal.js";
import { createPlatform, drawPlatforms } from "./lib/platforms.js";
import { drawPlayer, updatePlayer, playerRect } from "./lib/player.js";
import { createSpike, drawSpikes } from "./lib/spikes.js";

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

// Skapa spelets level
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
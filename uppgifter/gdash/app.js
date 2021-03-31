import { createPlatform, drawPlatforms } from "./lib/platforms.js";
import { drawPlayer, updatePlayer, playerRect } from "./lib/player.js";

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
createPlatform(200, canvas.height - 40, 500, 40);
createPlatform(500, 320, 40, 120);
createPlatform(635, 240, 40, 70);
createPlatform(635, 370, 40, 40);
createPlatform(835, 300, 200, 150);
createPlatform(1235, 300, 200, 150);
createPlatform(1080, 0, 100, 200);
createPlatform(1500, 360, 40, 160)

requestAnimationFrame(gameLoop);

function gameLoop() {
  requestAnimationFrame(gameLoop);

  //
  // Uppdatera alla game objects.
  //

  updatePlayer();
  
  camera.x = Math.max(0, playerRect.x - 100);

  //
  // Rit ut alla game objects
  //

  context.clearRect(0, 0, canvas.width, canvas.height);
  drawPlatforms(context, camera);
  drawPlayer(context, camera);
}
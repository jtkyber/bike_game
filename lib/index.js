"use strict";

var requestId, now, then, elapsed, fpsInterval;
var gameLoop = function gameLoop() {
  requestId = requestAnimationFrame(gameLoop);
  fpsInterval = 1000 / 60;
  now = Date.now();
  elapsed = now - (then || 0);
  if (elapsed > fpsInterval) {
    then = now - elapsed % fpsInterval;
  }
};
gameLoop();
//# sourceMappingURL=index.js.map
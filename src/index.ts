import Platforms from './platforms';

const world = <HTMLCanvasElement>document.getElementById('world');
const ctx = <CanvasRenderingContext2D>world.getContext('2d');

// For game loop
let requestId: number, now: number, then: number, elapsed: number, fpsInterval: number;

let frameRate = 60;

let paused = true;

// Classes
let platforms: Platforms;

const gameLoop = () => {
	requestId = requestAnimationFrame(gameLoop);

	fpsInterval = 1000 / frameRate;
	now = Date.now();
	elapsed = now - (then || 0);

	if (elapsed > fpsInterval) {
		then = now - (elapsed % fpsInterval);

		ctx.clearRect(0, 0, world.width, world.height);
		if (!paused) platforms.move();
		platforms.draw();
	}
};

const startGame = () => {
	platforms = new Platforms(ctx, world);
	gameLoop();
};

startGame();

document.addEventListener('keyup', e => {
	if (e.code === 'Space') paused = !paused;
});

import Platform from './platform';

const world = <HTMLCanvasElement>document.getElementById('world');
const ctx = <CanvasRenderingContext2D>world.getContext('2d');

// For game loop
let requestId: number, now: number, then: number, elapsed: number, fpsInterval: number;

// Classes
let platform: Platform;

const gameLoop = () => {
	requestId = requestAnimationFrame(gameLoop);

	fpsInterval = 1000 / 60;
	now = Date.now();
	elapsed = now - (then || 0);

	if (elapsed > fpsInterval) {
		then = now - (elapsed % fpsInterval);

		ctx.clearRect(0, 0, world.width, world.height);
		platform.draw();
	}
};

const startGame = () => {
	platform = new Platform(ctx);
	gameLoop();
};

startGame();

gameLoop();

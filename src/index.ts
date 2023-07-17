import gameObject from '../public/gameObject.js';
import Platforms from './platforms';
import Player from './player';

const world = <HTMLCanvasElement>document.getElementById('world');
const ctx = <CanvasRenderingContext2D>world.getContext('2d');

// For game loop
let requestId: number | null, now: number, then: number, elapsed: number, fpsInterval: number;

let frameRate = 60;
let paused = true;
let spdIntervalId: ReturnType<typeof setInterval>;

// Classes
let platforms: Platforms, player: Player;

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
		player.draw();
		if (platforms.checkForCollision()) {
			cancelAnimationFrame(requestId);
			requestId = null;
			clearInterval(spdIntervalId);
		}
	}
};

const setSpdIncInterval = () => {
	spdIntervalId = setInterval(() => {
		platforms.increaseSpeed();
	}, 5000);
};

const startGame = () => {
	Object.freeze(gameObject);
	player = new Player(ctx, world);
	platforms = new Platforms(ctx, world, player, frameRate, gameObject);
	gameLoop();
};

startGame();

document.addEventListener('keydown', e => {
	switch (e.code) {
		case 'Space':
			if (requestId) {
				if (paused) {
					paused = false;
					setSpdIncInterval();
				} else player.jump();
			} else {
				paused = false;
				setSpdIncInterval();
				startGame();
			}
			break;
	}
});

document.addEventListener('keyup', e => {
	switch (e.code) {
		case 'Escape':
			if (paused) {
				paused = false;
				setSpdIncInterval();
			} else {
				paused = true;
				clearInterval(spdIntervalId);
			}
			break;
	}
});

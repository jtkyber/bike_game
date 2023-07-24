import gameObject from '../public/gameObject';
import Platforms from './platforms';
import Player from './player';

const world = <HTMLCanvasElement>document.getElementById('world');
const ctx = <CanvasRenderingContext2D>world.getContext('2d', { alpha: false });

const titleDiv = <HTMLDivElement>document.querySelector('.titleDiv');
const startBtn = <HTMLDivElement>document.querySelector('.startBtn');

// For game loop
let requestId: number | null, now: number, then: number, elapsed: number, fpsInterval: number;

let frameRate = 60;
let paused = false;
let levelsStarted = -1;

// Classes
let platforms: Platforms, player: Player;

const endGame = () => {
	if (requestId) cancelAnimationFrame(requestId);
	requestId = null;
	prepGame();
	startBtn.style.display = 'block';
	startBtn.innerHTML = 'Play Again';
	levelsStarted = -1;
};

const gameLoop = () => {
	requestId = requestAnimationFrame(gameLoop);

	fpsInterval = 1000 / frameRate;
	now = Date.now();
	elapsed = now - (then || 0);

	if (elapsed > fpsInterval) {
		then = now - (elapsed % fpsInterval);

		ctx.clearRect(0, 0, world.width, world.height);
		if (!paused) {
			platforms.move();
			player.speed = gameObject.levels[platforms.currentLevel].speed;
		} else {
			player.speed = 0;
		}
		platforms.draw();
		player.draw();

		if (platforms.platsVisible?.[0]?.index === 0 && platforms.currentLevel > levelsStarted) {
			levelsStarted = platforms.currentLevel;
			setTimeout(() => {
				titleDiv.children[0].innerHTML = `Level ${platforms.currentLevel + 1}`;
				titleDiv.style.display = 'block';
				setTimeout(() => {
					titleDiv.style.display = 'none';
				}, 3000);
			}, 1000);
		}

		if (platforms.checkForCollision() || platforms.gameOver) {
			endGame();
		}
	}
};

const startGame = () => {
	gameLoop();
};

const prepGame = () => {
	Object.freeze(gameObject);
	player = new Player(ctx, world);
	platforms = new Platforms(ctx, world, player, gameObject);
	platforms.setUp();
};

prepGame();

document.addEventListener('keydown', e => {
	switch (e.code) {
		case 'Space':
			if (requestId) {
				if (paused) {
					paused = false;
				} else {
					if (!player.loadingJump) player.loadingJump = true;
				}
			} else {
				paused = false;
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
			} else {
				paused = true;
			}
		case 'Space':
			player.loadingJump = false;
			player.jump();
			player.jumpVelStart = player.jumpVelStartReset;
			break;
	}
});

startBtn.onclick = () => {
	startGame();
	startBtn.style.display = 'none';
};

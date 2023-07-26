import gameObject from '../public/gameObject';
import Collisions from './collisions';
import Hud from './hud';
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
let platforms: Platforms, player: Player, hud: Hud, collisions: Collisions;

const endGame = () => {
	if (requestId) cancelAnimationFrame(requestId);
	requestId = null;
	// prepGame();
	// startBtn.style.display = 'block';
	// startBtn.innerHTML = 'Play Again';
	// levelsStarted = -1;
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
		hud.draw();

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

		if (hud.lives === 0) endGame();
	}
};

const startGame = () => {
	gameLoop();
};

const prepGame = () => {
	Object.freeze(gameObject);
	hud = new Hud(ctx, world);
	player = new Player(ctx, world, hud);
	collisions = new Collisions(ctx, world, player, hud);
	platforms = new Platforms(ctx, world, player, hud, collisions, gameObject);
	platforms.setUp();

	startGame();
	startBtn.style.display = 'none';
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
			player.jump();
			break;
	}
});

startBtn.onclick = () => {
	startGame();
	startBtn.style.display = 'none';
};

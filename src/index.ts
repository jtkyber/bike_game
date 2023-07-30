import gameObject from '../public/gameObject';
import Abilities from './abilities';
import Collisions from './collisions';
import Hud from './hud';
import Platforms from './platforms';
import Player from './player';

const world = <HTMLCanvasElement>document.getElementById('world');
const ctx = <CanvasRenderingContext2D>world.getContext('2d', { alpha: false });

const startBtn = <HTMLDivElement>document.querySelector('.startBtn');

// For game loop
let requestId: number | null, now: number, then: number, elapsed: number, fpsInterval: number;

let frameRate = 60;
let frames = 0;
let paused = false;
let levelsStarted = -1;

// Classes
let platforms: Platforms, player: Player, hud: Hud, collisions: Collisions, abilities: Abilities;

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
		if (frames === 0)
			setTimeout(() => {
				hud.fps = frames;
				frames = 0;
			}, 1000);
		frames += 1;
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

		// if (platforms.platsVisible?.[0]?.index === 0 && platforms.currentLevel > levelsStarted) {
		// 	levelsStarted = platforms.currentLevel;
		// }

		if (hud.health === 0) endGame();
	}
};

const startGame = () => {
	gameLoop();
};

const prepGame = async () => {
	Object.freeze(gameObject);

	hud = new Hud(ctx, world);
	player = new Player(ctx, world, hud);
	collisions = new Collisions(ctx, world, player, hud);
	abilities = new Abilities(ctx, world, hud, collisions, player);
	platforms = new Platforms(ctx, world, player, hud, collisions, abilities, gameObject);

	await platforms.setUp();
	await player.setUp();
	await abilities.setUp();

	// startGame();
	startBtn.style.display = 'block';
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

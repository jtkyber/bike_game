import Player from './player';
import { Context, IGameObject, IPlat } from './types';

export default class Platforms {
	private ctx: Context;
	private world: HTMLCanvasElement;
	private player: Player;
	private frameRate: number;
	private platforms: IPlat[];
	private platXGap: number;
	private platYGap: number;
	private speed: number;
	private minW: number;
	private maxW: number;
	private h: number;
	private platTexture: any;
	private gameObject: IGameObject;
	private currentLevel: number;
	private currentPlatform: number;

	constructor(ctx: Context, world: HTMLCanvasElement, player: Player, frameRate: number, gameObject: any) {
		this.ctx = ctx;
		this.world = world;
		this.player = player;
		this.frameRate = frameRate;
		this.platforms = [
			{ x: 0, y: gameObject.levels[0].platforms[0].y, l: gameObject.levels[0].platforms[0].len },
		];
		this.platXGap = 10;
		this.platYGap = 100;
		this.speed = 20;
		this.minW = 800;
		this.maxW = 4000;
		this.h = 16;
		this.platTexture = new Image();
		this.platTexture.src = '../public/platform.png';
		this.gameObject = gameObject;
		this.currentLevel = 0;
		this.currentPlatform = 0;
	}

	public increaseSpeed() {
		this.speed += 0.5;
		this.platXGap = this.speed * 10;
		// console.log(this.platXGap);
	}

	public checkForCollision() {
		if (this.player.y > this.world.height - this.player.h) {
			console.log('Ground Collision!!!');
			return true;
		}
		for (let i = 0; i < this.platforms.length; i++) {
			if (
				this.player.x + this.player.w >= this.platforms[i].x && // Check player right collision
				this.player.x <= this.platforms[i].x + this.platforms[i].l && // Check player left collision
				this.player.y <= this.platforms[i].y + this.h // Check player top collision
			) {
				if (
					this.player.yVelocity < 0 &&
					Math.abs(this.platforms[i].y - (this.player.y + this.player.h)) < 20
				) {
					// Land if negative velocity and within 20px
					this.player.land(this.platforms[i].y);
					return false;
				} else if (this.player.y + this.player.h > this.platforms[i].y) {
					// Check player bottom collision
					console.log('Platform Collision!!!');
					return true;
				}
			}
		}
		return false;
	}

	// private getNextYValue() {
	// 	// Next Platform must be at least this value from the previous one
	// 	const offset = 30;
	// 	const lastPlat = this.platforms[this.platforms.length - 1];

	// 	// Max Posible Y Value
	// 	const max =
	// 		lastPlat.y + this.platYGap < this.world.height
	// 			? lastPlat.y - this.h + this.platYGap
	// 			: this.world.height - this.h;

	// 	// Min Posible Y Value
	// 	const min =
	// 		lastPlat.y - this.platYGap > this.world.height / 2
	// 			? lastPlat.y + this.h - this.platYGap
	// 			: this.world.height / 2;

	// 	// Randomly choose whether next Y is up (2) or down (1)
	// 	const randOneTwo = Math.ceil(Math.random() * 2);
	// 	let randPlatY;

	// 	if (randOneTwo === 1) {
	// 		randPlatY = Math.floor(Math.random() * (max - (lastPlat.y + offset)) + (lastPlat.y + offset));
	// 	} else {
	// 		const maxTemp = lastPlat.y - offset;
	// 		randPlatY = Math.floor(Math.random() * (maxTemp - min) + min);
	// 	}

	// 	// Set new plat Y value if out of bounds
	// 	if (randPlatY > this.world.height - this.h) {
	// 		return this.world.height - this.h - offset;
	// 	} else if (randPlatY < this.world.height / 2) {
	// 		return this.world.height / 2 + offset;
	// 	} else return randPlatY;
	// }

	private nextPlatform() {
		this.currentPlatform++;
		const nextPlat = this.gameObject.levels[this.currentLevel].platforms[this.currentPlatform];
		if (!nextPlat) console.log('Level Finished');

		this.platforms.push({
			x:
				this.platforms[this.platforms.length - 1].x +
				this.platforms[this.platforms.length - 1].l +
				Math.random() * (this.platXGap - 10) +
				10,
			y: nextPlat.y,
			// w: Math.random() * (this.maxW - this.minW) + this.minW,
			l: nextPlat.len,
		});
		if (this.platforms[0].x + this.platforms[0].l < 0) this.platforms.shift();
	}

	public move() {
		if (
			this.platforms[this.platforms.length - 1].x + this.platforms[this.platforms.length - 1].l <=
			this.world.width
		) {
			this.nextPlatform();
		}

		for (let i = 0; i < this.platforms.length; i++) {
			this.platforms[i].x -= this.speed;
		}
	}

	public draw() {
		for (let i = 0; i < this.platforms.length; i++) {
			const imgW = this.platTexture.width * (this.platforms[i].l / this.maxW);

			this.ctx.drawImage(
				this.platTexture,
				0,
				0,
				imgW,
				this.platTexture.height,
				this.platforms[i].x,
				this.platforms[i].y,
				this.platforms[i].l,
				this.h
			);

			// this.ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
			// this.ctx.beginPath();
			// this.ctx.rect(this.platforms[i].x, this.platforms[i].y, this.platforms[i].w, this.h);
			// this.ctx.fill();
		}
	}
}

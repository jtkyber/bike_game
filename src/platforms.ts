import { Context, IPlat } from './types';

export default class Platforms {
	private ctx: Context;
	private world: HTMLCanvasElement;
	private platforms: IPlat[];
	private platXGap: number;
	private platYGap: number;
	private speed: number;
	private minL: number;
	private maxL: number;

	constructor(ctx: Context, world: HTMLCanvasElement) {
		this.ctx = ctx;
		this.world = world;
		this.platforms = [{ x: 0, y: world.height - 300, l: world.width }];
		this.platXGap = 50;
		this.platYGap = 150;
		this.speed = 5;
		this.minL = 200;
		this.maxL = 700;
	}

	private getNextYValue() {
		const lastPlat = this.platforms[this.platforms.length - 1];
		const max =
			lastPlat.y + this.platYGap < this.world.height ? lastPlat.y + this.platYGap : this.world.height;
		const min =
			lastPlat.y - this.platYGap > this.world.height / 2 ? lastPlat.y - this.platYGap : this.world.height / 2;
		return Math.random() * (max - min) + min;
	}

	private nextPlatform() {
		this.platforms.push({
			x:
				this.platforms[this.platforms.length - 1].x +
				this.platforms[this.platforms.length - 1].l +
				this.platXGap,
			y: this.getNextYValue(),
			l: Math.random() * (this.maxL - this.minL) + this.minL,
		});
		if (this.platforms.length > 10) this.platforms.shift();
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
			this.ctx.fillStyle = 'green';
			this.ctx.beginPath();
			this.ctx.rect(this.platforms[i].x, this.platforms[i].y, this.platforms[i].l, 20);
			this.ctx.fill();
		}
	}
}

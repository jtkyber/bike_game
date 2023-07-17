import { Context } from './types';

export default class Player {
	private ctx: Context;
	private world: HTMLCanvasElement;
	public x: number;
	public y: number;
	public w: number;
	public h: number;
	public isInAir: boolean;
	public jumpVelStart: number;
	public yVelocity: number;
	public yAcc: number;

	constructor(ctx: Context, world: HTMLCanvasElement) {
		this.ctx = ctx;
		this.world = world;
		this.x = 100;
		this.y = 300;
		this.w = 50;
		this.h = 50;
		this.isInAir = false;
		this.jumpVelStart = 22;
		this.yVelocity = 0;
		this.yAcc = 2;
	}

	public land(y: number) {
		this.isInAir = false;
		this.yVelocity = 0;
		this.y = y - this.h;
	}

	public jump() {
		if (this.isInAir || this.yVelocity < 0) return;
		this.isInAir = true;
		this.yVelocity = this.jumpVelStart;
	}

	public drop() {
		this.isInAir = true;
	}

	public draw() {
		this.y -= this.yVelocity;
		this.yVelocity -= this.yAcc;

		this.ctx.fillStyle = 'blue';
		this.ctx.beginPath();
		this.ctx.rect(this.x, this.y, this.w, this.h);
		this.ctx.fill();
	}
}

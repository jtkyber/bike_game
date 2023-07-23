import { Context } from './types';

export default class Player {
	private ctx: Context;
	private world: HTMLCanvasElement;
	private bikeImg: HTMLImageElement;
	private aspectRatio: number;
	public x: number;
	public y: number;
	public w: number;
	public h: number;
	public isInAir: boolean;
	public jumpVelStart: number;
	public yVelocity: number;
	public yAcc: number;
	private rotation: number;
	private rotationSpeed: number;
	private isJumping: boolean;
	public loadingJump: boolean;

	constructor(ctx: Context, world: HTMLCanvasElement) {
		this.ctx = ctx;
		this.world = world;
		this.bikeImg = new Image();
		this.bikeImg.src = '../public/mtb_resized.png';
		this.aspectRatio = 1.84;
		this.x = 100;
		this.y = 100;
		this.w = 170;
		this.h = this.w / this.aspectRatio;
		this.isInAir = false;
		this.jumpVelStart = 10;
		this.yVelocity = 0;
		this.yAcc = 0.8;
		this.rotation = 0;
		this.rotationSpeed = 0;
		this.isJumping = false;
		this.loadingJump = false;
	}

	public land(y: number) {
		if (this.rotation < 0) return;
		this.isInAir = false;
		this.isJumping = false;
		this.rotationSpeed = 0;
		this.rotation = 0;
		this.yVelocity = 0;
		this.y = y - this.h;
		if (!this.loadingJump) this.jumpVelStart = 10;
	}

	public jump() {
		if (this.isJumping || this.isInAir || this.yVelocity < 0) return;
		this.rotationSpeed = this.jumpVelStart;
		this.isJumping = true;

		this.isInAir = true;
		this.yVelocity = this.jumpVelStart;
	}

	private loadJump() {
		if (this.jumpVelStart >= 20) return;
		this.jumpVelStart += 0.6;
	}

	public draw() {
		if (this.loadingJump) this.loadJump();

		this.y -= this.yVelocity;
		this.yVelocity -= this.yAcc;

		if (this.isJumping) {
			this.rotation -= this.rotationSpeed / 4;
			this.rotationSpeed -= this.yAcc * 2;

			if (this.rotation >= 5) {
				this.rotationSpeed = 0;
			}
		}

		// this.ctx.fillStyle = 'rgb(0, 0, 0)';
		// this.ctx.beginPath();
		// this.ctx.rect(this.x, this.y, this.w, this.h);
		// this.ctx.fill();

		this.ctx.save();
		this.ctx.translate(this.x + this.w * 0.25, this.y + this.h * 0.7);
		this.ctx.rotate((this.rotation * Math.PI) / 180);
		this.ctx.drawImage(
			this.bikeImg,
			-this.w + this.w * (1 - 0.25),
			-this.h + this.h * (1 - 0.7),
			this.w,
			this.h
		);
		this.ctx.restore();
	}
}

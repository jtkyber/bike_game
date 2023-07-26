import Hud from './hud';
import { Context } from './types';

export default class Player {
	private ctx: Context;
	private world: HTMLCanvasElement;
	private hud: Hud;
	private frameImg: HTMLImageElement;
	private wheelImg: HTMLImageElement;
	private aspectRatio: number;
	public x: number;
	public y: number;
	public w: number;
	public h: number;
	public isInAir: boolean;
	public jumpVelStartReset: number;
	public jumpVelStart: number;
	public yVelocity: number;
	public yAcc: number;
	private rotation: number;
	private rotationSpeed: number;
	private isJumping: boolean;
	public loadingJump: boolean;
	private wheelRot: number;
	private rotCoordsForJump: { x: number; y: number };
	public speed: number;

	constructor(ctx: Context, world: HTMLCanvasElement, hud: Hud) {
		this.ctx = ctx;
		this.world = world;
		this.frameImg = new Image();
		this.frameImg.src = '../public/frame2.png';
		this.wheelImg = new Image();
		this.wheelImg.src = '../public/wheel.png';
		this.aspectRatio = 1.1;
		this.x = 100;
		this.y = 100;
		this.w = 170;
		this.h = this.w / this.aspectRatio;
		this.isInAir = true;
		this.jumpVelStartReset = 10;
		this.jumpVelStart = this.jumpVelStartReset;
		this.yVelocity = 0;
		this.yAcc = 0.8;
		this.rotation = 0;
		this.rotationSpeed = 0;
		this.isJumping = false;
		this.loadingJump = false;
		this.wheelRot = 0;
		this.rotCoordsForJump = { x: 0, y: 0 };
		this.speed = 0;
		this.hud = hud;
	}

	public land(y: number) {
		if (this.rotation < 0) return;
		this.isInAir = false;
		this.isJumping = false;
		this.rotationSpeed = 0;
		this.rotation = 0;
		this.yVelocity = 0;
		this.y = y - this.h;
		if (!this.loadingJump) this.jumpVelStart = this.jumpVelStartReset;
	}

	public jump() {
		if (this.isJumping || this.isInAir || this.yVelocity < 0) return;
		this.rotationSpeed = this.jumpVelStart;
		this.isJumping = true;
		this.loadingJump = false;

		this.isInAir = true;
		this.yVelocity = this.jumpVelStart;
		this.jumpVelStart = this.jumpVelStartReset;
	}

	private loadJump() {
		if (this.jumpVelStart >= 20) return;
		this.jumpVelStart += 0.5;
	}

	private drawFrame() {
		// const yOffset = 5;
		this.ctx.save();
		this.ctx.translate(this.rotCoordsForJump.x, this.rotCoordsForJump.y);
		this.ctx.rotate((this.rotation * Math.PI) / 180);
		this.ctx.drawImage(
			this.frameImg,
			-this.wheelImg.width / 2,
			-this.h + this.wheelImg.height / 2,
			this.w,
			this.h
		);
		this.ctx.restore();
	}

	private drawWheels() {
		const rotOffset = this.hud.lives === 3 ? 0 : this.hud.lives === 2 ? 2 : 4;
		this.ctx.save();
		this.ctx.translate(this.rotCoordsForJump.x + rotOffset, this.rotCoordsForJump.y);
		this.ctx.rotate((this.rotation * Math.PI) / 180); // Rotate for jump
		this.ctx.rotate((this.wheelRot * Math.PI) / 180); // Rotate for wheel spin
		this.ctx.drawImage(
			this.wheelImg,
			-this.wheelImg.width / 2 - rotOffset,
			-this.wheelImg.height / 2,
			this.wheelImg.width,
			this.wheelImg.height
		);
		this.ctx.restore();

		this.ctx.save();
		this.ctx.translate(this.rotCoordsForJump.x, this.rotCoordsForJump.y + rotOffset);
		this.ctx.rotate((this.rotation * Math.PI) / 180); // Rotate for jump
		this.ctx.translate(-this.rotCoordsForJump.x, -this.rotCoordsForJump.y); // Move to start
		this.ctx.translate(this.x + this.w - this.wheelImg.width / 2, this.rotCoordsForJump.y);
		this.ctx.rotate((this.wheelRot * Math.PI) / 180); // Rotate for wheel spin
		this.ctx.translate(-(this.x + this.w - this.wheelImg.width / 2), -this.rotCoordsForJump.y); // Move to start
		this.ctx.translate(this.rotCoordsForJump.x, this.rotCoordsForJump.y);

		this.ctx.drawImage(
			this.wheelImg,
			-(this.rotCoordsForJump.x - this.x) + this.w - this.wheelImg.width,
			-this.wheelImg.height / 2 - rotOffset,
			this.wheelImg.width,
			this.wheelImg.height
		);
		this.ctx.restore();
	}

	public draw() {
		this.wheelRot += this.speed;

		if (this.loadingJump) this.loadJump();

		this.y -= this.yVelocity;
		if (this.isInAir) this.yVelocity -= this.yAcc;

		if (this.isJumping) {
			this.rotation -= this.rotationSpeed / 4;
			this.rotationSpeed -= this.yAcc * 2;

			if (this.rotation >= 5) {
				this.rotationSpeed = 0;
			}
		}

		// this.ctx.fillStyle = 'rgb(0, 0, 0, 0.5)';
		// this.ctx.beginPath();
		// this.ctx.rect(this.x, this.y, this.w, this.h);
		// this.ctx.fill();

		this.rotCoordsForJump = {
			x: this.x + this.wheelImg.width / 2,
			y: this.y + this.h - this.wheelImg.height / 2,
		};

		this.drawWheels();
		this.drawFrame();
	}
}

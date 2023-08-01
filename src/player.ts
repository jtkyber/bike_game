import Hud from './hud';
import { Context } from './types';

export default class Player {
	private ctx: Context;
	private world: HTMLCanvasElement;
	private hud: Hud;
	private aspectRatio: number;
	public x: number;
	public y: number;
	public w: number;
	public h: number;
	public isInAir: boolean;
	public maxJumpStart: number;
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
	private imagePaths: string[];
	private images: any;
	private isBeingDamaged: boolean;
	private lastObjectHit: string;
	private isDucking: boolean;
	public shieldActivated: boolean;

	constructor(ctx: Context, world: HTMLCanvasElement, hud: Hud) {
		this.ctx = ctx;
		this.world = world;
		this.aspectRatio = 1.1;
		this.x = 100;
		this.y = 100;
		this.w = 150;
		this.h = this.w / this.aspectRatio;
		this.isInAir = true;
		this.maxJumpStart = 20;
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
		this.imagePaths = [
			'../public/frame.png',
			'../public/frameDucked.png',
			'../public/frameDamaged.png',
			'../public/frameDuckedDamaged.png',
			'../public/wheel.png',
			'../public/wheelDamaged.png',
		];
		this.images = {};
		this.isBeingDamaged = false;
		this.lastObjectHit = '';
		this.isDucking = false;
		this.shieldActivated = false;
	}

	public async setUp() {
		const preloadImages = () => {
			const promises = this.imagePaths.map((path: string) => {
				return new Promise((resolve, reject) => {
					const name = path.split('/').pop()?.split('.')[0];
					const image = new Image();

					image.src = path;
					image.onload = () => {
						resolve([name, image]);
					};
					image.onerror = () => reject(`Image failed to load: ${path}`);
				});
			});
			return Promise.all(promises);
		};

		const imgArraytemp: any[] = await preloadImages();
		this.images = Object.fromEntries(imgArraytemp);
		this.w = this.images.frame.width;
		this.h = this.images.frame.height;
	}

	public changeToDamagedImgs(object: string) {
		if (object === this.lastObjectHit) return;
		this.lastObjectHit = object;
		this.isBeingDamaged = true;
		const flashInterval = 50;

		setTimeout(() => {
			this.isBeingDamaged = false;
			setTimeout(() => {
				this.isBeingDamaged = true;
				setTimeout(() => {
					this.isBeingDamaged = false;
					setTimeout(() => {
						this.isBeingDamaged = true;
						setTimeout(() => {
							this.isBeingDamaged = false;
						}, flashInterval);
					}, flashInterval);
				}, flashInterval);
			}, flashInterval);
		}, flashInterval);
	}

	public duck() {
		if (this.isDucking) return;
		this.isDucking = true;
		this.w = this.images.frameDucked.width;
		this.h = this.images.frameDucked.height;
		this.y += this.images.frame.height - this.images.frameDucked.height;
	}

	public stand() {
		if (!this.isDucking) return;
		this.isDucking = false;
		this.w = this.images.frame.width;
		this.h = this.images.frame.height;
		this.y -= this.images.frame.height - this.images.frameDucked.height;
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
		this.loadingJump = false;
		if (this.isJumping || this.isInAir || this.yVelocity < 0) return;
		this.rotationSpeed = this.jumpVelStart;
		this.isJumping = true;

		this.isInAir = true;
		this.yVelocity = this.jumpVelStart;
		this.jumpVelStart = this.jumpVelStartReset;
	}

	private loadJump() {
		if (this.jumpVelStart < this.maxJumpStart) {
			this.jumpVelStart += 0.5;
			this.hud.drawJumpCharge(
				1 - (this.maxJumpStart - this.jumpVelStart) / (this.maxJumpStart - this.jumpVelStartReset),
				this.x,
				this.y
			);
		} else {
			this.hud.drawJumpCharge(1, this.x, this.y);
		}
	}

	private drawFrame() {
		let frameImg: HTMLImageElement;
		if (!this.isDucking) {
			frameImg = this.isBeingDamaged ? this.images.frameDamaged : this.images.frame;
		} else frameImg = this.isBeingDamaged ? this.images.frameDuckedDamaged : this.images.frameDucked;

		this.ctx.save();
		this.ctx.translate(this.rotCoordsForJump.x, this.rotCoordsForJump.y);
		this.ctx.rotate((this.rotation * Math.PI) / 180);
		this.ctx.drawImage(
			frameImg,
			-this.images.wheel.width / 2,
			-this.h + this.images.wheel.height / 2,
			this.w,
			this.h
		);
		this.ctx.restore();
	}

	private drawWheels() {
		const rotOffset = this.hud.health >= 90 ? 0 : this.hud.health < 90 && this.hud.health >= 50 ? 1 : 2;

		this.ctx.save();
		this.ctx.translate(this.rotCoordsForJump.x + rotOffset, this.rotCoordsForJump.y);
		this.ctx.rotate((this.rotation * Math.PI) / 180); // Rotate for jump
		this.ctx.rotate((this.wheelRot * Math.PI) / 180); // Rotate for wheel spin
		this.ctx.drawImage(
			this.isBeingDamaged ? this.images.wheelDamaged : this.images.wheel,
			-this.images.wheel.width / 2 - rotOffset,
			-this.images.wheel.height / 2,
			this.images.wheel.width - 0.5,
			this.images.wheel.height - 0.5
		);
		this.ctx.restore();

		this.ctx.save();
		this.ctx.translate(this.rotCoordsForJump.x, this.rotCoordsForJump.y + rotOffset);
		this.ctx.rotate((this.rotation * Math.PI) / 180); // Rotate for jump
		this.ctx.translate(-this.rotCoordsForJump.x, -this.rotCoordsForJump.y); // Move to start
		this.ctx.translate(this.x + this.w - this.images.wheel.width / 2, this.rotCoordsForJump.y);
		this.ctx.rotate((this.wheelRot * Math.PI) / 180); // Rotate for wheel spin
		this.ctx.translate(-(this.x + this.w - this.images.wheel.width / 2), -this.rotCoordsForJump.y); // Move to start
		this.ctx.translate(this.rotCoordsForJump.x, this.rotCoordsForJump.y);

		this.ctx.drawImage(
			this.isBeingDamaged ? this.images.wheelDamaged : this.images.wheel,
			-(this.rotCoordsForJump.x - this.x) + this.w - this.images.wheel.width,
			-this.images.wheel.height / 2 - rotOffset,
			this.images.wheel.width - 0.5,
			this.images.wheel.height - 0.5
		);
		this.ctx.restore();
	}

	private drawShield() {
		const rOffset = 20;
		this.ctx.fillStyle = 'rgba(220, 220, 255, 0.4)';
		this.ctx.strokeStyle = 'rgba(220, 220, 255, 0.8)';
		this.ctx.lineWidth = 2;
		this.ctx.beginPath();
		this.ctx.ellipse(
			this.x + this.w / 2,
			this.y + this.h / 2,
			this.w / 2 + rOffset,
			this.w / 2 + rOffset,
			2 * Math.PI,
			0,
			2 * Math.PI
		);
		this.ctx.fill();
		this.ctx.stroke();
	}

	public draw() {
		if (!this.images?.frame) return;
		this.wheelRot += this.speed;
		// this.wheelRot += 10;

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

		if (this.shieldActivated) this.drawShield();

		this.rotCoordsForJump = {
			x: this.x + this.images.wheel.width / 2,
			y: this.y + this.h - this.images.wheel.height / 2,
		};

		this.drawWheels();
		this.drawFrame();
	}
}

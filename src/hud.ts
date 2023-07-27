import throttle from '../utils/throttle';
import { Context } from './types';

export default class Hud {
	private ctx: Context;
	private world: HTMLCanvasElement;
	public lives: number;
	private lastObjectHit: any;

	constructor(ctx: Context, world: HTMLCanvasElement) {
		this.ctx = ctx;
		this.world = world;
		this.lives = 3;
		this.lastObjectHit = '';
	}

	public drawJumpCharge(percentCharged: number, x: number, y: number) {
		const w = 8;
		const h = 60;
		const xOffset = 0;
		const yOffset = -20;
		this.ctx.strokeStyle = 'rgb(0, 0, 0)';
		this.ctx.fillStyle = 'rgb(7, 191, 4)';
		this.ctx.beginPath();
		this.ctx.rect(x + xOffset, y + yOffset, w, h);
		this.ctx.stroke();
		this.ctx.fillRect(x + xOffset, y + yOffset + h, w, -h * percentCharged);
	}

	public reduceHealth(object: string) {
		if (this.lastObjectHit === object) return;
		this.lives -= 1;
		this.lastObjectHit = object;
	}

	private drawHeart(sectionW: number, heartIndex: number, sectionStartX: number) {
		const xShiftInsideBox = 8;
		const heartContainerW = 50;
		const xoff =
			(heartIndex === 0 ? 0 : heartIndex === 1 ? heartContainerW : heartContainerW * 2) +
			sectionStartX +
			xShiftInsideBox;
		const yoff = 14;
		const scale = 0.06;

		this.ctx.fillStyle = 'red';
		this.ctx.strokeStyle = 'rgba(255, 0, 0, 0.8)';
		this.ctx.lineWidth = 2;

		this.ctx.beginPath();
		this.ctx.moveTo(scale * 372 + xoff, scale * 240 + yoff);
		this.ctx.bezierCurveTo(
			scale * 487 + xoff,
			scale * 117 + yoff,
			scale * 642 + xoff,
			scale * 262 + yoff,
			scale * 551 + xoff,
			scale * 363 + yoff
		);
		this.ctx.bezierCurveTo(
			scale * 541 + xoff,
			scale * 374 + yoff,
			scale * 398 + xoff,
			scale * 550 + yoff,
			scale * 385 + xoff,
			scale * 594 + yoff
		);
		this.ctx.bezierCurveTo(
			scale * 371 + xoff,
			scale * 550 + yoff,
			scale * 233 + xoff,
			scale * 379 + yoff,
			scale * 222 + xoff,
			scale * 367 + yoff
		);
		this.ctx.bezierCurveTo(
			scale * 121 + xoff,
			scale * 257 + yoff,
			scale * 294 + xoff,
			scale * 125 + yoff,
			scale * 385 + xoff,
			scale * 246 + yoff
		);

		this.ctx.save();
		this.ctx.clip();
		this.ctx.lineWidth *= 2;
		this.ctx.stroke();
		this.ctx.restore();

		if (heartIndex + 1 <= this.lives) this.ctx.fill();
	}

	private drawLives() {
		const sectionStartX = 30;
		const sectionStartY = 11;
		const sectionW = 160;
		const sectionH = 50;
		this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
		this.ctx.beginPath();
		this.ctx.roundRect(sectionStartX, sectionStartY, sectionW, sectionH, 10);
		this.ctx.fill();

		for (let i = 0; i < 3; i++) {
			this.drawHeart(sectionW, i, sectionStartX);
		}
	}

	public draw() {
		this.drawLives();
	}
}

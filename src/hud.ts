import throttle from '../utils/throttle';
import { Context } from './types';

export default class Hud {
	private ctx: Context;
	private world: HTMLCanvasElement;
	public health: number;
	private lastObjectHit: any;
	public drawingLevelText: boolean;
	private levelTextOpacity: number;
	private levelTextOpacityInc: number;
	public currentLevel: number;
	public fps: number;
	public fpsEnabled: boolean;

	constructor(ctx: Context, world: HTMLCanvasElement) {
		this.ctx = ctx;
		this.world = world;
		this.health = 100;
		this.lastObjectHit = '';
		this.drawingLevelText = false;
		this.levelTextOpacity = 0;
		this.levelTextOpacityInc = 0.02;
		this.currentLevel = 0;
		this.fps = 0;
		this.fpsEnabled = true;
	}

	private drawFps() {
		if (!this.fpsEnabled) return;

		this.ctx.font = '20px Arial';
		this.ctx.fillStyle = 'rgba(0, 255, 0, 1)';
		this.ctx.textAlign = 'right';
		this.ctx.fillText(`${this.fps} FPS`, this.world.width - 20, 30);
	}

	public drawJumpCharge(percentCharged: number, x: number, y: number) {
		const w = 8;
		const h = 60;
		const xOffset = 0;
		const yOffset = -20;
		this.ctx.strokeStyle = 'rgb(0, 0, 0)';
		this.ctx.fillStyle = 'rgb(7, 191, 4)';
		this.ctx.beginPath();
		this.ctx.rect(x + xOffset - 1, y + yOffset - 1, w + 2, h + 2);
		this.ctx.stroke();
		this.ctx.fillRect(x + xOffset, y + yOffset + h, w, -h * percentCharged);
	}

	public reduceHealth(object: string, amt: number) {
		if (this.lastObjectHit === object) return;
		if (this.health - amt <= 0) this.health = 0;
		else this.health -= amt;

		this.lastObjectHit = object;
	}

	public increaseHealth(amt: number) {
		if (this.health + amt >= 100) this.health = 100;
		else this.health += amt;
	}

	private drawHealth() {
		const sectionStartX = 30;
		const sectionStartY = 11;
		const sectionW = 160;
		const sectionH = 12;

		this.ctx.shadowOffsetX = 3;
		this.ctx.shadowOffsetY = 3;
		this.ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
		this.ctx.shadowBlur = 4;

		this.ctx.lineWidth = 2;
		this.ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
		this.ctx.beginPath();
		this.ctx.roundRect(sectionStartX - 1, sectionStartY - 1, sectionW + 2, sectionH + 2, 10);
		this.ctx.stroke();

		this.ctx.fillStyle =
			this.health >= 90
				? 'rgba(0, 170, 0, 1)'
				: this.health >= 50 && this.health < 90
				? 'rgba(170, 170, 0, 1)'
				: 'rgba(255, 0, 0, 1)';
		this.ctx.beginPath();
		this.ctx.roundRect(sectionStartX, sectionStartY, sectionW * (this.health / 100), sectionH, 10);
		this.ctx.fill();

		this.ctx.shadowOffsetX = 0;
		this.ctx.shadowOffsetY = 0;
		this.ctx.shadowBlur = 0;
	}

	private drawNextLevelText() {
		const w = 250;
		const h = 70;
		const yOffset = -200;

		this.ctx.fillStyle = `rgba(0, 0, 0, ${this.levelTextOpacity >= 0.7 ? 0.7 : this.levelTextOpacity})`;
		this.ctx.beginPath();
		this.ctx.roundRect(this.world.width / 2 - w / 2, this.world.height / 2 - h / 2 + yOffset, w, h, 10);
		this.ctx.fill();

		this.ctx.font = '40px Arial';
		this.ctx.fillStyle = `rgba(255, 255, 255, ${this.levelTextOpacity})`;
		this.ctx.textAlign = 'center';
		this.ctx.textBaseline = 'middle';
		this.ctx.fillText(
			`Level ${this.currentLevel + 1}`,
			this.world.width / 2,
			this.world.height / 2 + yOffset
		);

		this.levelTextOpacity += this.levelTextOpacityInc;
	}

	public beginLevelTextAnimation() {
		this.drawingLevelText = true;
		setTimeout(() => {
			this.levelTextOpacityInc *= -1;
			setTimeout(() => {
				this.drawingLevelText = false;
				this.levelTextOpacityInc *= -1;
			}, 1500);
		}, 1500);
	}

	public draw() {
		this.drawHealth();
		this.drawFps();

		if (this.drawingLevelText) this.drawNextLevelText();
	}
}

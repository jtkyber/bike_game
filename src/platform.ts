import { Context } from './types';

export default class Platform {
	ctx: Context;
	topY: number;
	leftX: number;

	constructor(ctx: Context) {
		this.ctx = ctx;
		this.topY = 0;
		this.leftX = 0;
	}

	draw() {
		this.ctx.fillStyle = 'green';
		this.ctx.beginPath();
		this.ctx.rect(this.topY, this.leftX, 150, 20);
		this.ctx.fill();
	}
}

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
	public framerate: number;
	public fpsEnabled: boolean;
	private imagePaths: string[];
	private images: any;
	public currentPowerUp: {
		name: string;
		durationInSecs: number;
	};
	public usingPowerUp: boolean;
	public powerUpPercentUsed: number;

	constructor(ctx: Context, world: HTMLCanvasElement, framerate: number) {
		this.ctx = ctx;
		this.world = world;
		this.health = 100;
		this.lastObjectHit = '';
		this.drawingLevelText = false;
		this.levelTextOpacity = 0;
		this.levelTextOpacityInc = 0.02;
		this.currentLevel = 0;
		this.fps = 0;
		this.framerate = framerate;
		this.fpsEnabled = false;
		this.imagePaths = ['../public/images/powerups/invincibility.png'];
		this.images = {};
		this.currentPowerUp = {
			name: '',
			durationInSecs: 0,
		};
		this.powerUpPercentUsed = 0;
		this.usingPowerUp = false;
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
	}

	private drawPowerUp() {
		if (!this.currentPowerUp.name) return;

		const w = this.images[this.currentPowerUp.name].width;
		const h = this.images[this.currentPowerUp.name].height;
		const circleSeparation = 6;
		const rInner = Math.max(w, h) / 2 + 10;
		const rOuter = rInner + circleSeparation;
		const xOffset = -20;
		const yOffset = 20;

		// Inner circle
		this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
		this.ctx.beginPath();
		this.ctx.ellipse(
			this.world.width - rInner + xOffset,
			rInner + yOffset,
			rInner,
			rInner,
			2 * Math.PI,
			0,
			2 * Math.PI
		);
		this.ctx.fill();

		// Middle circle Static
		this.ctx.strokeStyle = 'rgba(40, 40, 40, 1)';
		this.ctx.lineWidth = circleSeparation + 2;
		this.ctx.beginPath();
		this.ctx.ellipse(
			this.world.width - rOuter + xOffset + circleSeparation,
			rOuter + yOffset - circleSeparation,
			rOuter - circleSeparation / 2 + 1,
			rOuter - circleSeparation / 2 + 1,
			2 * Math.PI,
			-Math.PI / 2,
			(3 * Math.PI) / 2
		);
		this.ctx.stroke();

		// Middle circle Dynamic
		this.ctx.strokeStyle = 'rgba(7, 191, 4, 1)';
		this.ctx.lineWidth = circleSeparation;
		this.ctx.beginPath();
		this.ctx.ellipse(
			this.world.width - rOuter + xOffset + circleSeparation,
			rOuter + yOffset - circleSeparation,
			rOuter - circleSeparation / 2,
			rOuter - circleSeparation / 2,
			2 * Math.PI,
			-Math.PI / 2 + 2 * Math.PI * this.powerUpPercentUsed,
			(3 * Math.PI) / 2
		);
		this.ctx.stroke();

		this.ctx.drawImage(
			this.images[this.currentPowerUp.name],
			this.world.width - rInner - w / 2 + xOffset,
			yOffset + rInner - h / 2,
			w,
			h
		);

		if (this.usingPowerUp) {
			this.powerUpPercentUsed += 1 / (this.framerate * this.currentPowerUp.durationInSecs);
		}
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
		this.ctx.strokeStyle = 'rgb(40, 40, 40)';
		this.ctx.lineWidth = 2;
		this.ctx.fillStyle = 'rgb(7, 191, 4)';
		this.ctx.beginPath();
		this.ctx.roundRect(x + xOffset - 1, y + yOffset - 1, w + 2, h + 2, 8);
		this.ctx.stroke();

		this.ctx.beginPath();
		this.ctx.roundRect(x + xOffset, y + yOffset + h, w, -h * percentCharged, 8);
		this.ctx.fill();
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

		this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
		this.ctx.beginPath();
		this.ctx.roundRect(sectionStartX - 2, sectionStartY - 2, sectionW + 4, sectionH + 4, 10);
		this.ctx.fill();

		this.ctx.fillStyle =
			this.health >= 90
				? 'rgba(7, 191, 4, 1)'
				: this.health >= 50 && this.health < 90
				? 'rgba(200, 200, 0, 1)'
				: 'rgba(230, 0, 0, 1)';
		this.ctx.beginPath();
		this.ctx.roundRect(sectionStartX, sectionStartY, sectionW * (this.health / 100), sectionH, 10);
		this.ctx.fill();
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
		this.drawPowerUp();

		if (this.drawingLevelText) this.drawNextLevelText();
	}
}

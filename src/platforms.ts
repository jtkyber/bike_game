import Abilities from './abilities';
import Collisions from './collisions';
import Hud from './hud';
import Player from './player';
import { Context, IGameObject, ILevel, IPlatObject, IPlatform, IPowerUp, IVisiblePlat } from './types';

export default class Platforms {
	private ctx: Context;
	private world: HTMLCanvasElement;
	private player: Player;
	private hud: Hud;
	private collisions: Collisions;
	private abilities: Abilities;
	private gameObject: IGameObject;
	public currentLevel: number;
	public platsVisible: IVisiblePlat[];
	private backgroundX: number;
	private backgroundX2: number;
	private bgImgYOffset: number;
	private bgImgYOffset2: number;
	public gameOver: boolean;
	private collisionMargin: number;
	private imagePaths: string[];
	private images: any;
	private bgImg1: string;
	private bgImg2: string;

	constructor(
		ctx: Context,
		world: HTMLCanvasElement,
		player: Player,
		hud: Hud,
		collisions: Collisions,
		abilities: Abilities,
		gameObject: any
	) {
		this.ctx = ctx;
		this.world = world;
		this.player = player;
		this.hud = hud;
		this.collisions = collisions;
		this.abilities = abilities;
		this.gameObject = gameObject;
		this.currentLevel = 0;
		this.platsVisible = [
			{
				index: 0,
				x: 0,
				level: 0,
			},
		];
		this.backgroundX = 0;
		this.backgroundX2 = this.world.width;
		this.bgImgYOffset = 0;
		this.bgImgYOffset2 = 0;
		this.gameOver = false;
		this.collisionMargin = 30;
		this.imagePaths = [
			'../public/bgLevel1.png',
			'../public/bgLevel2.png',
			// Platform Textures
			'../public/woodPlat.png',
			'../public/dirtPlat.png',
			// Decor
			'../public/startSign.png',
			// Obsticles
			'../public/rock1.png',
			'../public/rock2.png',
			'../public/rock3.png',
		];
		this.images = {};
		this.bgImg1 = '';
		this.bgImg2 = '';
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

	private nextPlatform() {
		const lastVisiblePlat: IVisiblePlat = this.platsVisible[this.platsVisible.length - 1];
		const platsRef: IPlatform[] = this.gameObject.levels[this.currentLevel].platforms;
		const lastPlatRef: IPlatform = platsRef[lastVisiblePlat.index];
		// const nextPlat: IPlatform = platsRef[lastVisiblePlat.index + 1];

		if (lastVisiblePlat.index === platsRef.length - 1) {
			this.currentLevel += 1;

			this.platsVisible.push({
				index: 0,
				x: lastVisiblePlat.x + lastPlatRef.len + lastPlatRef.gapToNext,
				level: this.currentLevel,
			});

			if (this.platsVisible[0].x + platsRef[this.platsVisible[0].index].len < 0) this.platsVisible.shift();

			return;
		}

		if (lastVisiblePlat.index === 0) {
			this.hud.currentLevel = this.currentLevel;
			this.hud.beginLevelTextAnimation();
		}

		this.platsVisible.push({
			index: lastVisiblePlat.index + 1,
			x: lastVisiblePlat.x + lastPlatRef.len + lastPlatRef.gapToNext,
			level: this.currentLevel,
		});

		if (this.platsVisible[0].x + platsRef[this.platsVisible[0].index].len < 0) this.platsVisible.shift();
	}

	public move() {
		const level: ILevel = this.gameObject.levels[this.currentLevel];
		const platRef: IPlatform = level.platforms[this.platsVisible[this.platsVisible.length - 1].index];

		const lastPlatX = this.platsVisible[this.platsVisible.length - 1].x;

		if (lastPlatX + platRef.len <= this.world.width) this.nextPlatform();

		for (let i = 0; i < this.platsVisible.length; i++) this.platsVisible[i].x -= level.speed;
		this.backgroundX -= level.speed / 8;
		if (this.bgImg2) this.backgroundX2 -= level.speed / 8;
	}

	private drawDecorForPlat(decor: IPlatObject[], platYTop: number, platX: number, platLen: number) {
		for (let i = 0; i < decor?.length; i++) {
			const imgSrc: HTMLImageElement = this.images[decor[i].name];
			const decorXVals = decor[i].xLocsOnPlatByPerc;

			for (let i = 0; i < decorXVals?.length; i++) {
				this.ctx.drawImage(
					imgSrc,
					platX + platLen * decorXVals[i],
					platYTop - this.images[decor[i].name].height + 10,
					this.images[decor[i].name].width,
					this.images[decor[i].name].height
				);
			}
		}
	}

	private drawObsticleOnPlat(
		obsticles: IPlatObject[],
		platYTop: number,
		platX: number,
		platLen: number,
		platIndex: number
	) {
		for (let i = 0; i < obsticles?.length; i++) {
			const imgSrc: HTMLImageElement = this.images[obsticles[i].name];
			const obsticleXVals = obsticles[i].xLocsOnPlatByPerc;

			for (let i = 0; i < obsticleXVals?.length; i++) {
				this.ctx.drawImage(
					imgSrc,
					platX + platLen * obsticleXVals[i],
					platYTop - this.images[obsticles[i].name].height + 10,
					this.images[obsticles[i].name].width,
					this.images[obsticles[i].name].height
				);

				this.collisions.checkForCollision({
					x1: this.player.x,
					y1: this.player.y,
					x2: platX + platLen * obsticleXVals[i],
					y2: platYTop - this.images[obsticles[i].name].height + 10,
					w1: this.player.w,
					h1: this.player.h,
					w2: this.images[obsticles[i].name].width,
					h2:
						this.images[obsticles[i].name].height ||
						this.world.height - (platYTop - this.images[obsticles[i].name].height + 10),
					margin: this.collisionMargin,
					object: `${obsticles[i].name}_${platIndex}_${obsticleXVals[i]}`,
				});
			}
		}
	}

	private drawBgImage() {
		if (!this.bgImg1.length) {
			this.bgImgYOffset = this.gameObject.levels[this.currentLevel].bgImgYOffset;
			this.bgImg1 = this.gameObject.levels[this.currentLevel].backgroundImg;
		}

		if (this.bgImg2.length && this.backgroundX2 <= 0) {
			this.bgImg1 = this.gameObject.levels[this.currentLevel].backgroundImg;
			this.bgImg2 = '';
			this.backgroundX = this.backgroundX2;
			this.backgroundX2 = this.world.width;
			this.bgImgYOffset = this.bgImgYOffset2;
			this.bgImgYOffset2 = 0;
		}

		const bgImage1 = this.images[this.bgImg1]; // Left Side Background

		if (
			(this.backgroundX + bgImage1.width < this.world.width ||
				this.platsVisible[0].level !== this.currentLevel) &&
			!this.bgImg2.length
		) {
			this.backgroundX2 = this.world.width;
			this.bgImgYOffset2 = this.gameObject.levels[this.currentLevel].bgImgYOffset;
			this.bgImg2 = this.gameObject.levels[this.currentLevel].backgroundImg;
		}

		const bgImage2 = this.images?.[this.bgImg2]; // Right Side Background

		this.ctx.drawImage(
			bgImage1,
			0,
			0,
			bgImage1.width,
			bgImage1.height,
			this.backgroundX,
			this.world.height - bgImage1.height + this.bgImgYOffset,
			bgImage1.width,
			bgImage1.height
		);

		if (bgImage2) {
			this.ctx.drawImage(
				bgImage2,
				0,
				0,
				bgImage2.width,
				bgImage2.height,
				this.backgroundX2,
				this.world.height - bgImage2.height + this.bgImgYOffset2,
				bgImage2.width,
				bgImage2.height
			);
		}
	}

	public draw() {
		this.drawBgImage();

		let isFalling = true;
		for (const plat of this.platsVisible) {
			const level: ILevel = this.gameObject.levels[plat.level];
			const imgW =
				this.images[level.platformTexture].width * (level.platforms[plat.index].len / level.maxPlatLen);

			const platform: IPlatform = this.gameObject.levels[plat.level].platforms[plat.index] || [];

			if (platform?.decor) {
				this.drawDecorForPlat(
					platform.decor,
					level.platforms[plat.index].y,
					plat.x,
					level.platforms[plat.index].len
				);
			}
			if (platform?.obsticles) {
				this.drawObsticleOnPlat(platform.obsticles, platform.y, plat.x, platform.len, plat.index);
			}
			if (platform?.powerUps) {
				this.abilities.draw(platform.powerUps, platform.y, plat.x, platform.len, plat.index);
			}

			if (level.platformH) {
				this.ctx.drawImage(
					this.images[level.platformTexture],
					0,
					0,
					imgW,
					this.images[level.platformTexture].height,
					plat.x,
					level.platforms[plat.index].y,
					level.platforms[plat.index].len,
					level.platformH
				);
			} else {
				this.ctx.drawImage(
					this.images[level.platformTexture],
					0,
					this.images[level.platformTexture].height,
					imgW,
					-3 *
						this.images[level.platformTexture].height *
						((this.world.height - level.platforms[plat.index].y) / this.images[level.platformTexture].height),
					plat.x,
					level.platforms[plat.index].y,
					level.platforms[plat.index].len,
					this.world.height - level.platforms[plat.index].y
				);
			}

			const isColliding = this.collisions.checkForPlatCollision({
				x1: this.player.x,
				y1: this.player.y,
				x2: plat.x,
				y2: level.platforms[plat.index].y,
				w1: this.player.w,
				h1: this.player.h,
				w2: level.platforms[plat.index].len,
				h2: level.platformH || this.world.height - level.platforms[plat.index].y,
				margin: this.collisionMargin,
				object: `${this.currentLevel}_${plat.index}`,
			});

			if (isColliding) isFalling = false;

			// this.ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
			// this.ctx.beginPath();
			// this.ctx.rect(this.platforms[i].x, this.platforms[i].y, this.platforms[i].w, this.h);
			// this.ctx.fill();
		}

		if (isFalling) this.player.isInAir = true;
	}
}

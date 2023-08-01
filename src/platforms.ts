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
	public gameCompleted: boolean;

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
		this.collisionMargin = 26;
		this.imagePaths = [
			'../public/bgLevel1.png',
			'../public/bgLevel2.png',
			// Platform Textures
			'../public/woodPlat.png',
			'../public/dirtPlat.png',
			// Decor
			'../public/startSign.png',
			'../public/treeBack.png',
			// Obsticles
			'../public/rock1.png',
			'../public/rock2.png',
			'../public/rock3.png',
			'../public/treeFront.png',
		];
		this.images = {};
		this.bgImg1 = '';
		this.bgImg2 = '';
		this.gameCompleted = false;
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
			if (!this.gameObject.levels[this.currentLevel + 1]) {
				this.gameCompleted = true;
				return;
			}
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
		if (this.gameCompleted) return;

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

			// if (decor[i].name === 'treeBack') console.log(this.images[decor[i].name].width);
			for (let j = 0; j < decorXVals?.length; j++) {
				this.ctx.drawImage(
					imgSrc,
					platX + platLen * decorXVals[j],
					platYTop + 10,
					this.images[decor[i].name].width,
					-this.images[decor[i].name].height
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
			// if (obsticles[i].name === 'treeFront') console.log(this.images[obsticles[i].name].width);

			for (let j = 0; j < obsticleXVals?.length; j++) {
				this.ctx.drawImage(
					imgSrc,
					platX + platLen * obsticleXVals[j],
					platYTop + 4,
					this.images[obsticles[i].name].width,
					-this.images[obsticles[i].name].height
				);

				this.collisions.checkForCollision({
					x1: this.player.x,
					y1: this.player.y,
					x2: platX + platLen * obsticleXVals[j],
					y2: platYTop - this.images[obsticles[i].name].height + 10,
					w1: this.player.w,
					h1: this.player.h,
					w2: this.images[obsticles[i].name].width,
					h2:
						this.images[obsticles[i].name].height ||
						this.world.height - (platYTop - this.images[obsticles[i].name].height + 10),
					marginLeft: obsticles[i].name === 'treeFront' ? this.collisionMargin + 150 : this.collisionMargin,
					marginRight: obsticles[i].name === 'treeFront' ? 180 : 0,
					marginBot: obsticles[i].name === 'treeFront' ? 130 : 0,
					object: `${obsticles[i].name}_${platIndex}_${obsticleXVals[j]}`,
				});
			}
		}
	}

	private drawBgImage() {
		// If no bg image 1, assign to it and assign it's y offset
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

		// this.ctx.drawImage(
		// 	bgImage1,
		// 	0,
		// 	bgImage1.height - bgImage1.height * this.bgImgScaler,
		// 	bgImage1.width * this.bgImgScaler,
		// 	bgImage1.height * this.bgImgScaler,
		// 	this.backgroundX,
		// 	this.world.height + this.bgImgYOffset,
		// 	bgImage1.width,
		// 	-bgImage1.height
		// );
		// console.log(this.world.width / bgImage1.width);

		this.ctx.drawImage(
			bgImage1,
			-this.backgroundX,
			bgImage1.height,
			bgImage1.width * (this.world.width / bgImage1.width),
			-bgImage1.height * (this.world.height / bgImage1.height),
			0,
			0,
			this.world.width,
			this.world.height
		);

		if (bgImage2) {
			// this.ctx.drawImage(
			// 	bgImage2,
			// 	0,
			// 	bgImage2.height - bgImage2.height * this.bgImgScaler2,
			// 	bgImage2.width * this.bgImgScaler2,
			// 	bgImage2.height * this.bgImgScaler2,
			// 	this.backgroundX2,
			// 	this.world.height + this.bgImgYOffset2,
			// 	bgImage2.width,
			// 	-bgImage2.height
			// );
			this.ctx.drawImage(
				bgImage2,
				-this.backgroundX2,
				bgImage2.height,
				bgImage2.width * (this.world.width / bgImage2.width),
				-bgImage2.height * (this.world.height / bgImage2.height),
				0,
				0,
				this.world.width,
				this.world.height
			);
		}
	}

	public draw() {
		this.drawBgImage();

		let isFalling = true;
		for (let i = 0; i < this.platsVisible.length; i++) {
			const level: ILevel = this.gameObject.levels[this.platsVisible[i].level];
			const imgW =
				this.images[level.platformTexture].width *
				(level.platforms[this.platsVisible[i].index].len / level.maxPlatLen);

			const platform: IPlatform =
				this.gameObject.levels[this.platsVisible[i].level].platforms[this.platsVisible[i].index] || [];

			if (platform?.decor) {
				this.drawDecorForPlat(platform.decor, platform.y, this.platsVisible[i].x, platform.len);
			}

			if (platform?.powerUps) {
				this.abilities.draw(
					platform.powerUps,
					platform.y,
					this.platsVisible[i].x,
					platform.len,
					this.platsVisible[i].index
				);
			}

			if (i === 0) this.player.draw();

			if (level.platformH) {
				this.ctx.drawImage(
					this.images[level.platformTexture],
					0,
					0,
					imgW,
					this.images[level.platformTexture].height,
					this.platsVisible[i].x,
					level.platforms[this.platsVisible[i].index].y,
					level.platforms[this.platsVisible[i].index].len,
					level.platformH
				);
			} else {
				this.ctx.drawImage(
					this.images[level.platformTexture],
					0,
					this.images[level.platformTexture].height,
					imgW,
					-2.5 *
						this.images[level.platformTexture].height *
						((this.world.height - level.platforms[this.platsVisible[i].index].y) /
							this.images[level.platformTexture].height),
					this.platsVisible[i].x,
					level.platforms[this.platsVisible[i].index].y,
					level.platforms[this.platsVisible[i].index].len,
					this.world.height - level.platforms[this.platsVisible[i].index].y
				);

				// this.ctx.strokeStyle = 'black';
				// this.ctx.rect(
				// 	plat.x,
				// 	level.platforms[plat.index].y,
				// 	level.platforms[plat.index].len,
				// 	this.world.height - level.platforms[plat.index].y
				// );
				// this.ctx.stroke();
			}

			if (platform?.obsticles) {
				this.drawObsticleOnPlat(
					platform.obsticles,
					platform.y,
					this.platsVisible[i].x,
					platform.len,
					this.platsVisible[i].index
				);
			}

			const isColliding = this.collisions.checkForPlatCollision({
				x1: this.player.x,
				y1: this.player.y,
				x2: this.platsVisible[i].x,
				y2: level.platforms[this.platsVisible[i].index].y,
				w1: this.player.w,
				h1: this.player.h,
				w2: level.platforms[this.platsVisible[i].index].len,
				h2: level.platformH || this.world.height - level.platforms[this.platsVisible[i].index].y,
				margin: this.collisionMargin,
				object: `${this.currentLevel}_${this.platsVisible[i].index}`,
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

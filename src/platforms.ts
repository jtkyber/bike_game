import Player from './player';
import { Context, IGameObject, ILevel, IPlatObject, IPlatform, IVisiblePlat } from './types';

export default class Platforms {
	private ctx: Context;
	private world: HTMLCanvasElement;
	private player: Player;
	private gameObject: IGameObject;
	public currentLevel: number;
	public platsVisible: IVisiblePlat[];
	private backgroundX: number;
	public gameOver: boolean;
	private collisionMargin: number;
	private imagePaths: any[];
	private images: any;

	constructor(ctx: Context, world: HTMLCanvasElement, player: Player, gameObject: any) {
		this.ctx = ctx;
		this.world = world;
		this.player = player;
		this.gameObject = gameObject;
		this.currentLevel = 0;
		this.platsVisible = [
			{
				index: 0,
				x: 0,
			},
		];
		this.backgroundX = 0;
		this.gameOver = false;
		this.collisionMargin = 25;
		this.imagePaths = [
			'../public/bgMountains.png',
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

	public checkForCollision() {
		if (this.player.y > this.world.height - this.player.h) {
			console.log('Ground Collision!!!');
			return true;
		}
		for (let i = 0; i < this.platsVisible.length; i++) {
			const platX = this.platsVisible[i].x;
			const level: ILevel = this.gameObject.levels[this.currentLevel];
			const platRef: IPlatform = level.platforms[this.platsVisible[i].index];
			const platY = platRef.y;
			const len = platRef.len;

			if (
				this.player.x + this.player.w >= platX + this.collisionMargin && // Check player right collision
				this.player.x <= platX + len && // Check player left collision
				this.player.y <= platY + (level.platformH || this.world.height - platY) // Check player top collision
			) {
				if (this.player.yVelocity < 0 && Math.abs(platY - (this.player.y + this.player.h)) < 20) {
					// Land if negative velocity and within 20px
					this.player.land(platY);
				} else if (this.player.y + this.player.h > platY + (this.player.isInAir ? this.collisionMargin : 0)) {
					// Check player bottom collision
					console.log('Platform Collision!!!');
					return true;
				}
			}
		}
		return false;
	}

	private checkObsticleCollision(obsticle: IPlatObject, xVal: number, yVal: number) {
		if (
			this.player.x + this.player.w >= xVal + this.collisionMargin && // Check player right collision
			this.player.x <= xVal + this.images[obsticle.name].width && // Check player left collision
			this.player.x <= xVal + this.images[obsticle.name].width && // Check player left collision
			this.player.y <= yVal + (this.images[obsticle.name].height || this.world.height - yVal) && // Check player top collision
			this.player.y + this.player.h > yVal // Check player bottom collision
		) {
			console.log('Collision with: ', obsticle.name);
			this.gameOver = true;
		}
	}

	private nextPlatform() {
		const lastVisiblePlat: IVisiblePlat = this.platsVisible[this.platsVisible.length - 1];
		const platsRef: IPlatform[] = this.gameObject.levels[this.currentLevel].platforms;
		const lastPlatRef: IPlatform = platsRef[lastVisiblePlat.index];
		const nextPlat: IPlatform =
			this.gameObject.levels[this.currentLevel].platforms[lastVisiblePlat.index + 1];

		if (!nextPlat) {
			console.log('No More Platforms');
			return;
		}

		this.platsVisible.push({
			index: lastVisiblePlat.index + 1,
			x: lastVisiblePlat.x + lastPlatRef.len + lastPlatRef.gapToNext,
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
	}

	private drawDecorForPlat(decor: IPlatObject[], platYTop: number, platX: number, platLen: number) {
		for (let i = 0; i < decor?.length; i++) {
			const imgSrc: HTMLImageElement = this.images[decor[i].name];
			const decorXVals = decor[i].xLocsOnPlatByPerc;

			// console.log(this.images[decor[i].name].height);
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

	private drawObsticleOnPlat(obsticles: IPlatObject[], platYTop: number, platX: number, platLen: number) {
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

				this.checkObsticleCollision(
					obsticles[i],
					platX + platLen * obsticleXVals[i],
					platYTop - this.images[obsticles[i].name].height + 10
				);
			}
		}
	}

	public draw() {
		if (!this.images?.bgMountains) return;
		// Draw BG
		this.ctx.drawImage(
			this.images.bgMountains,
			0,
			0,
			this.images.bgMountains.width,
			this.images.bgMountains.height,
			this.backgroundX,
			this.world.height - this.images.bgMountains.height,
			this.images.bgMountains.width,
			this.images.bgMountains.height
		);

		for (const plat of this.platsVisible) {
			const level: ILevel = this.gameObject.levels[this.currentLevel];
			const imgW =
				this.images[level.platformTexture].width * (level.platforms[plat.index].len / level.maxPlatLen);

			const platform: IPlatform = this.gameObject.levels[this.currentLevel].platforms[plat.index] || [];

			if (platform?.decor) {
				this.drawDecorForPlat(
					platform.decor,
					level.platforms[plat.index].y,
					plat.x,
					level.platforms[plat.index].len
				);
			}
			if (platform?.obsticles) {
				this.drawObsticleOnPlat(platform.obsticles, platform.y, plat.x, platform.len);
			}

			this.ctx.drawImage(
				this.images[level.platformTexture],
				0,
				0,
				imgW,
				this.images[level.platformTexture].height,
				plat.x,
				level.platforms[plat.index].y,
				level.platforms[plat.index].len,
				level.platformH || this.world.height - level.platforms[plat.index].y
			);
			// this.ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
			// this.ctx.beginPath();
			// this.ctx.rect(this.platforms[i].x, this.platforms[i].y, this.platforms[i].w, this.h);
			// this.ctx.fill();
		}
	}
}

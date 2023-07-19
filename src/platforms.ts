import Player from './player';
import { Context, IGameObject, ILevel, IPlatObject, IPlatform, IVisiblePlat } from './types';

export default class Platforms {
	private ctx: Context;
	private world: HTMLCanvasElement;
	private player: Player;
	public speed: number;
	private bg_mountains: HTMLImageElement;
	private woodPlat: HTMLImageElement;
	private dirtPlat: HTMLImageElement;
	private startSign: HTMLImageElement;
	private rock1: HTMLImageElement;
	private rock2: HTMLImageElement;
	private gameObject: IGameObject;
	private currentLevel: number;
	private platsVisible: IVisiblePlat[];
	private backgroundX: number;
	public gameOver: boolean;

	constructor(ctx: Context, world: HTMLCanvasElement, player: Player, gameObject: any) {
		this.ctx = ctx;
		this.world = world;
		this.player = player;
		this.speed = 20;
		// Backgrounds -------------------------------------------
		this.bg_mountains = new Image();
		this.bg_mountains.src = '../public/bg_mountains.png';
		// Platforms ---------------------------------------------
		this.woodPlat = new Image();
		this.woodPlat.src = '../public/woodPlat.png';
		this.dirtPlat = new Image();
		this.dirtPlat.src = '../public/dirtPlat.png';
		// Decor -------------------------------------------------
		this.startSign = new Image();
		this.startSign.src = '../public/start_sign.png';
		// Obsticles ---------------------------------------------
		this.rock1 = new Image();
		this.rock1.src = '../public/rock1.png';
		this.rock2 = new Image();
		this.rock2.src = '../public/rock2.png';
		// -------------------------------------------------------
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
	}

	public increaseSpeed() {
		// this.speed += 0.5;
		// this.platXGap = this.speed * 10;
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
				this.player.x + this.player.w >= platX && // Check player right collision
				this.player.x <= platX + len && // Check player left collision
				this.player.y <= platY + (level.platformH || this.world.height - platY) // Check player top collision
			) {
				if (this.player.yVelocity < 0 && Math.abs(platY - (this.player.y + this.player.h)) < 20) {
					// Land if negative velocity and within 20px
					this.player.land(platY);
					return false;
				} else if (this.player.y + this.player.h > platY) {
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
			this.player.x + this.player.w >= xVal && // Check player right collision
			this.player.x <= xVal + obsticle.imgInfo.w && // Check player left collision
			this.player.y <= yVal + (obsticle.imgInfo.h || this.world.height - yVal) && // Check player top collision
			this.player.y + this.player.h > yVal // Check player bottom collision
		) {
			console.log('Collision with: ', obsticle.imgInfo.fileName);
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
		const platRefLen =
			this.gameObject.levels[this.currentLevel].platforms[
				this.platsVisible[this.platsVisible.length - 1].index
			].len;

		const lastPlatX = this.platsVisible[this.platsVisible.length - 1].x;

		if (lastPlatX + platRefLen <= this.world.width) this.nextPlatform();

		for (let i = 0; i < this.platsVisible.length; i++) this.platsVisible[i].x -= this.speed;
		this.backgroundX -= this.speed / 8;
	}

	private drawDecorForPlat(decor: IPlatObject[], platYTop: number, platX: number, platLen: number) {
		for (let i = 0; i < decor?.length; i++) {
			const imgSrc: HTMLImageElement = this[decor[i].imgInfo.fileName as keyof this] as HTMLImageElement;
			const decorXVals = decor[i].xLocsOnPlatByPerc;

			for (let i = 0; i < decorXVals?.length; i++) {
				this.ctx.drawImage(
					imgSrc,
					platX + platLen * decorXVals[i],
					platYTop - decor[i].imgInfo.h + 10,
					decor[i].imgInfo.w,
					decor[i].imgInfo.h
				);
			}
		}
	}

	private drawObsticleOnPlat(obsticles: IPlatObject[], platYTop: number, platX: number, platLen: number) {
		for (let i = 0; i < obsticles?.length; i++) {
			const imgSrc: HTMLImageElement = this[obsticles[i].imgInfo.fileName as keyof this] as HTMLImageElement;
			const obsticleXVals = obsticles[i].xLocsOnPlatByPerc;

			for (let i = 0; i < obsticleXVals?.length; i++) {
				this.ctx.drawImage(
					imgSrc,
					platX + platLen * obsticleXVals[i],
					platYTop - obsticles[i].imgInfo.h + 10,
					obsticles[i].imgInfo.w,
					obsticles[i].imgInfo.h
				);

				this.checkObsticleCollision(
					obsticles[i],
					platX + platLen * obsticleXVals[i],
					platYTop - obsticles[i].imgInfo.h + 10
				);
			}
		}
	}

	public draw() {
		// Draw BG
		this.ctx.drawImage(
			this.bg_mountains,
			0,
			0,
			this.bg_mountains.width,
			this.bg_mountains.height,
			this.backgroundX,
			this.world.height - this.bg_mountains.height,
			this.bg_mountains.width,
			this.bg_mountains.height
		);

		for (const plat of this.platsVisible) {
			const level: ILevel = this.gameObject.levels[this.currentLevel];
			const imgW =
				(<HTMLImageElement>this[level.platformTexture as keyof this]).width *
				(level.platforms[plat.index].len / level.maxPlatLen);

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
				<HTMLImageElement>this[level.platformTexture as keyof this],
				0,
				0,
				imgW,
				(<HTMLImageElement>this[level.platformTexture as keyof this]).height,
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

import Player from './player';
import { Context, IGameObject, ILevel, IPlat, IPlatObject, IPlatform, IVisiblePlat } from './types';

export default class Platforms {
	private ctx: Context;
	private world: HTMLCanvasElement;
	private player: Player;
	private speed: number;
	private h: number;
	private platTexture: HTMLImageElement;
	private startSign: HTMLImageElement;
	private gameObject: IGameObject;
	private currentLevel: number;
	private images: any;
	private platsVisible: IVisiblePlat[];

	constructor(ctx: Context, world: HTMLCanvasElement, player: Player, gameObject: any) {
		this.ctx = ctx;
		this.world = world;
		this.player = player;
		this.speed = 20;
		this.h = 16;
		// Images ------------------------------------------------
		this.platTexture = new Image();
		this.platTexture.src = '../public/platform.png';
		this.startSign = new Image();
		this.startSign.src = '../public/start_sign.png';
		// -------------------------------------------------------
		this.gameObject = gameObject;
		this.currentLevel = 0;
		this.images = {
			platTexture: this.platTexture,
			startSign: this.startSign,
		};
		this.platsVisible = [
			{
				index: 0,
				x: 0,
			},
		];
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
			const platRef = this.gameObject.levels[this.currentLevel].platforms[this.platsVisible[i].index];
			const platY = platRef.y;
			const len = platRef.len;

			if (
				this.player.x + this.player.w >= platX && // Check player right collision
				this.player.x <= platX + len && // Check player left collision
				this.player.y <= platY + this.h // Check player top collision
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
			x: lastVisiblePlat.x + lastPlatRef.len + lastPlatRef.gapFromLast,
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
	}

	private drawDecorForPlat(decor: IPlatObject[], platYTop: number, platX: number, platLen: number) {
		for (let i = 0; i < decor?.length; i++) {
			const imgSrc = this.images[decor[i].imgInfo.fileName];
			const decorXVals = decor[i].xLocsOnPlatByPerc;
			// console.log(platX + platLen);

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

	public draw() {
		for (const plat of this.platsVisible) {
			const level: ILevel = this.gameObject.levels[this.currentLevel];
			const imgW = this.platTexture.width * (level.platforms[plat.index].len / level.maxPlatLen);

			const decor: IPlatObject[] =
				this.gameObject.levels[this.currentLevel].platforms[plat.index]?.decor || [];

			if (decor) {
				this.drawDecorForPlat(decor, level.platforms[plat.index].y, plat.x, level.platforms[plat.index].len);
			}

			this.ctx.drawImage(
				this.platTexture,
				0,
				0,
				imgW,
				this.platTexture.height,
				plat.x,
				level.platforms[plat.index].y,
				level.platforms[plat.index].len,
				this.h
			);
			// this.ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
			// this.ctx.beginPath();
			// this.ctx.rect(this.platforms[i].x, this.platforms[i].y, this.platforms[i].w, this.h);
			// this.ctx.fill();
		}
	}
}

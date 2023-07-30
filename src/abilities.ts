import Collisions from './collisions';
import Hud from './hud';
import Player from './player';
import { Context, IPowerUp } from './types';

export default class Abilities {
	ctx: Context;
	world: HTMLCanvasElement;
	hud: Hud;
	collisions: Collisions;
	player: Player;
	imagePaths: string[];
	images: any;
	collectedPowerUps: string[];

	constructor(ctx: Context, world: HTMLCanvasElement, hud: Hud, collisions: Collisions, player: Player) {
		this.ctx = ctx;
		this.world = world;
		this.hud = hud;
		this.collisions = collisions;
		this.player = player;
		this.imagePaths = ['../public/healthBoost.png'];
		this.images = {};
		this.collectedPowerUps = [];
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

	public draw(powerUps: IPowerUp[], platYTop: number, platX: number, platLen: number, platIndex: number) {
		for (let i = 0; i < powerUps?.length; i++) {
			const imgSrc: HTMLImageElement = this.images[powerUps[i].name];

			if (!imgSrc) continue;

			const imgX = platX + platLen * powerUps[i].xPercAlongPlat;
			const imgY = platYTop - imgSrc.height + 10 - powerUps[i].distAbovePlat;
			const object = `${powerUps[i].name}_${platIndex}_${powerUps[i].xPercAlongPlat}`;

			if (this.collectedPowerUps.includes(object)) {
				if (imgX + imgSrc.width < 0) this.collectedPowerUps.shift();
				continue;
			}

			this.ctx.drawImage(imgSrc, imgX, imgY, imgSrc.width, imgSrc.height);

			const collidedWithPowerUp = this.collisions.powerUpCollision({
				x1: this.player.x,
				y1: this.player.y,
				x2: imgX,
				y2: imgY,
				w1: this.player.w,
				h1: this.player.h,
				w2: this.images[powerUps[i].name].width,
				h2:
					this.images[powerUps[i].name].height ||
					this.world.height - (platYTop - this.images[powerUps[i].name].height + 10),
				margin: 0,
				object: object,
			});

			if (collidedWithPowerUp) {
				this.collectedPowerUps.push(object);
				this.hud.IncreaseHealth();
			}
		}
	}
}

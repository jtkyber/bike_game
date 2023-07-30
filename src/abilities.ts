import Hud from './hud';
import { Context, IPowerUp } from './types';

export default class Abilities {
	ctx: Context;
	world: HTMLCanvasElement;
	hud: Hud;
	imagePaths: string[];
	images: any;

	constructor(ctx: Context, world: HTMLCanvasElement, hud: Hud) {
		this.ctx = ctx;
		this.world = world;
		this.hud = hud;
		this.imagePaths = ['../public/bgMountains.png'];
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

	public draw(powerUps: IPowerUp[], platYTop: number, platX: number, platLen: number, platIndex: number) {
		for (let i = 0; i < powerUps?.length; i++) {
			const imgSrc: HTMLImageElement = this.images[powerUps[i].name];
			if (!imgSrc) continue;
			const puX = powerUps[i].xPercAlongPlat;

			this.ctx.drawImage(
				imgSrc,
				platX + platLen * puX,
				platYTop - imgSrc.height + 10,
				imgSrc.width,
				imgSrc.height
			);
		}
	}
}

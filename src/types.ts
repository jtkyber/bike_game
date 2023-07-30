export type Context = CanvasRenderingContext2D;

export interface IPlat {
	x: number;
	y: number;
	l: number;
}

export interface ICollisionArgs {
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	w1: number;
	h1: number;
	w2: number;
	h2: number;
	margin: number;
	object: string;
}

export interface IPlatObject {
	name: string;
	xLocsOnPlatByPerc: number[];
}

export interface IPowerUp {
	name: string;
	xPercAlongPlat: number;
	distAbovePlat: number;
}

export interface IPlatform {
	y: number;
	len: number;
	gapToNext: number;
	obsticles?: IPlatObject[];
	decor?: IPlatObject[];
	powerUps?: IPowerUp[];
}

export interface ILevel {
	platforms: IPlatform[];
	platformTexture: string;
	platformH: number | null;
	backgroundImg: string;
	bgImgYOffset: number;
	maxPlatLen: number;
	speed: number;
}

export interface IGameObject {
	levels: ILevel[];
}

export interface IVisiblePlat {
	index: number;
	x: number;
	level: number;
}

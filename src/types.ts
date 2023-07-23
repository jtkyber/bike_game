export type Context = CanvasRenderingContext2D;

export interface IPlat {
	x: number;
	y: number;
	l: number;
}

export interface IImgInfo {
	fileName: string;
	w: number;
	h: number;
}

export interface IPlatObject {
	imgInfo: IImgInfo;
	xLocsOnPlatByPerc: number[];
}

export interface IPlatform {
	y: number;
	len: number;
	gapToNext: number;
	obsticles?: IPlatObject[];
	decor?: IPlatObject[];
}

export interface ILevel {
	platforms: IPlatform[];
	platformTexture: string;
	platformH: number | null;
	backgroundImg: string;
	maxPlatLen: number;
	speed: number;
}

export interface IGameObject {
	levels: ILevel[];
}

export interface IVisiblePlat {
	index: number;
	x: number;
}

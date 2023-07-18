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
	gapFromLast: number;
	obsticles?: IPlatObject[];
	decor?: IPlatObject[];
}

export interface ILevel {
	platforms: IPlatform[];
	platformTexture: string;
	backgroundImg: string;
	maxPlatLen: number;
}

export interface IGameObject {
	levels: ILevel[];
}

export interface IVisiblePlat {
	index: number;
	x: number;
}

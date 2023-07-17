export type Context = CanvasRenderingContext2D;

export interface IPlat {
	x: number;
	y: number;
	l: number;
}

interface IPlatform {
	y: number;
	len: number;
}

interface ILevel {
	platforms: IPlatform[];
	platformTexture: string;
	backgroundImg: string;
}

export interface IGameObject {
	levels: ILevel[];
}

import { IGameObject, IImgInfo, ILevel, IPlatObject } from '../src/types';

const decor_startSign: IImgInfo = {
	fileName: 'startSign',
	w: 50,
	h: 50,
};

const obsticle_rock1: IImgInfo = {
	fileName: 'rock1',
	w: 70,
	h: 70,
};

const obsticle_rock2: IImgInfo = {
	fileName: 'rock2',
	w: 70,
	h: 70,
};

const levelOne: ILevel = {
	platforms: [
		{
			y: 600,
			len: 2000,
			gapToNext: 200,
			decor: [{ imgInfo: decor_startSign, xLocsOnPlatByPerc: [0.1] }],
			obsticles: [{ imgInfo: obsticle_rock1, xLocsOnPlatByPerc: [0.6] }],
		},
		{ y: 700, len: 1000, gapToNext: 0 },
		{ y: 600, len: 800, gapToNext: 0 },
		{ y: 500, len: 2000, gapToNext: 0, obsticles: [{ imgInfo: obsticle_rock2, xLocsOnPlatByPerc: [0.4] }] },
		{ y: 700, len: 1200, gapToNext: 0 },
		{ y: 450, len: 1000, gapToNext: 0 },
		{ y: 650, len: 1000, gapToNext: 0 },
		{ y: 625, len: 600, gapToNext: 0 },
		{ y: 600, len: 800, gapToNext: 0 },
		{ y: 700, len: 2000, gapToNext: 0 },
		{ y: 650, len: 700, gapToNext: 0 },
		{ y: 610, len: 1000, gapToNext: 0 },
	],
	platformTexture: 'woodPlat',
	platformH: 16,
	backgroundImg: '',
	maxPlatLen: 4000,
	speed: 15,
};

const gameObject: IGameObject = {
	levels: [levelOne],
};

export default gameObject;

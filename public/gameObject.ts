import { IGameObject, IImgInfo, ILevel, IPlatObject } from '../src/types';

const decor_startSign: IImgInfo = {
	fileName: 'startSign',
	w: 50,
	h: 50,
};

const levelOne: ILevel = {
	platforms: [
		{
			y: 610,
			len: 2000,
			gapFromLast: 0,
			decor: [{ imgInfo: decor_startSign, xLocsOnPlatByPerc: [0.1] }],
		},
		{ y: 650, len: 600, gapFromLast: 50 },
		{ y: 600, len: 800, gapFromLast: 0 },
		{ y: 700, len: 2000, gapFromLast: 0 },
		{ y: 700, len: 700, gapFromLast: 0 },
		{ y: 650, len: 1000, gapFromLast: 0 },
		{ y: 650, len: 1000, gapFromLast: 0 },
		{ y: 625, len: 600, gapFromLast: 0 },
		{ y: 600, len: 800, gapFromLast: 0 },
		{ y: 700, len: 2000, gapFromLast: 0 },
		{ y: 650, len: 700, gapFromLast: 0 },
		{ y: 610, len: 1000, gapFromLast: 0 },
	],
	platformTexture: 'platform',
	backgroundImg: '',
	maxPlatLen: 4000,
};

const gameObject: IGameObject = {
	levels: [levelOne],
};

export default gameObject;

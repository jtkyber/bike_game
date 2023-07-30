import { IGameObject, ILevel } from '../src/types';

const levelOne: ILevel = {
	platforms: [
		{
			y: 600,
			len: 3000,
			gapToNext: 0,
			decor: [{ name: 'startSign', xLocsOnPlatByPerc: [0.6] }],
		},
		{
			y: 600,
			len: 2000,
			gapToNext: 200,
		},
		{
			y: 700,
			len: 1000,
			gapToNext: 0,
		},
		{ y: 600, len: 800, gapToNext: 0 },
		{ y: 500, len: 2000, gapToNext: 0, obsticles: [{ name: 'rock2', xLocsOnPlatByPerc: [0.4] }] },
		{ y: 700, len: 1200, gapToNext: 0 },
		{ y: 450, len: 1000, gapToNext: 0, obsticles: [{ name: 'rock3', xLocsOnPlatByPerc: [0.8] }] },
		{ y: 650, len: 1000, gapToNext: 0 },
		{ y: 625, len: 600, gapToNext: 0 },
		{ y: 600, len: 800, gapToNext: 50 },
		{ y: 550, len: 1000, gapToNext: 0, obsticles: [{ name: 'rock3', xLocsOnPlatByPerc: [0.1] }] },
		{ y: 410, len: 1000, gapToNext: 300 },
		{ y: 700, len: 1000, gapToNext: 0, obsticles: [{ name: 'rock1', xLocsOnPlatByPerc: [0.6] }] },
		{ y: 600, len: 800, gapToNext: 0 },
		{ y: 700, len: 1200, gapToNext: 100 },
		{ y: 450, len: 1000, gapToNext: 0, obsticles: [{ name: 'rock1', xLocsOnPlatByPerc: [0.8] }] },
		{
			y: 650,
			len: 1000,
			gapToNext: 0,
			powerUps: [{ name: 'healthBoost', xPercAlongPlat: 0.8, distAbovePlat: 300 }],
		},
		{
			y: 625,
			len: 600,
			gapToNext: 0,
		},
	],
	platformTexture: 'dirtPlat',
	platformH: null,
	backgroundImg: 'bgLevel1',
	bgImgYOffset: 0,
	maxPlatLen: 4000,
	speed: 20,
};

const levelTwo: ILevel = {
	platforms: [
		{
			y: 600,
			len: 3000,
			gapToNext: 0,
			decor: [{ name: 'startSign', xLocsOnPlatByPerc: [0.6] }],
		},
		{
			y: 600,
			len: 2000,
			gapToNext: 200,
		},
		{ y: 700, len: 1000, gapToNext: 0, obsticles: [{ name: 'rock1', xLocsOnPlatByPerc: [0.1] }] },
		{ y: 600, len: 800, gapToNext: 0 },
		{ y: 500, len: 2000, gapToNext: 0, obsticles: [{ name: 'rock2', xLocsOnPlatByPerc: [0.4] }] },
		{ y: 700, len: 1200, gapToNext: 0 },
		{ y: 450, len: 1000, gapToNext: 0, obsticles: [{ name: 'rock3', xLocsOnPlatByPerc: [0.8] }] },
		{ y: 650, len: 1000, gapToNext: 0 },
		{ y: 625, len: 600, gapToNext: 0 },
		{
			y: 600,
			len: 800,
			gapToNext: 50,
			powerUps: [{ name: 'healthBoost', xPercAlongPlat: 0.2, distAbovePlat: 300 }],
		},
		{ y: 700, len: 2000, gapToNext: 0 },
		{ y: 550, len: 700, gapToNext: 0, obsticles: [{ name: 'rock3', xLocsOnPlatByPerc: [0.1] }] },
		{ y: 410, len: 1000, gapToNext: 300 },
		{ y: 700, len: 1000, gapToNext: 0, obsticles: [{ name: 'rock1', xLocsOnPlatByPerc: [0.6] }] },
		{ y: 600, len: 800, gapToNext: 0 },
		{ y: 550, len: 1500, gapToNext: 0, obsticles: [{ name: 'rock3', xLocsOnPlatByPerc: [0.4] }] },
		{ y: 700, len: 1200, gapToNext: 100 },
		{ y: 450, len: 1000, gapToNext: 0, obsticles: [{ name: 'rock1', xLocsOnPlatByPerc: [0.8] }] },
		{ y: 650, len: 1000, gapToNext: 0 },
		{ y: 625, len: 600, gapToNext: 0 },
	],
	platformTexture: 'woodPlat',
	platformH: 16,
	backgroundImg: 'bgLevel2',
	bgImgYOffset: 600,
	maxPlatLen: 4000,
	speed: 20,
};

const gameObject: IGameObject = {
	levels: [levelOne, levelTwo],
};

export default gameObject;

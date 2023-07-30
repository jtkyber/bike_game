import Hud from './hud';
import Player from './player';
import { Context, ICollisionArgs } from './types';

export default class Collisions {
	private ctx: Context;
	private world: HTMLCanvasElement;
	private player: Player;
	private hud: Hud;

	constructor(ctx: Context, world: HTMLCanvasElement, player: Player, hud: Hud) {
		this.ctx = ctx;
		this.world = world;
		this.player = player;
		this.hud = hud;
	}

	public checkForPlatCollision({ x1, y1, x2, y2, w1, h1, w2, h2, margin, object }: ICollisionArgs): boolean {
		const playerRightOfPlatLeft = x1 + w1 >= x2 + margin; // Player right side to right of plat left
		const playerLeftOfPlatRight = x1 <= x2 + w2; // Player left side to left of plat right
		const playerAbovePlatBot = y1 <= y2 + h2; //Player top above plat bottom
		const playerBelowPlatTop = y1 + this.player.h > y2 + (this.player.isInAir ? margin : 0); // Player bottom above plat top

		if (playerRightOfPlatLeft && playerLeftOfPlatRight && playerAbovePlatBot) {
			// Land if negative velocity and within 20px of platform
			if (this.player.yVelocity <= 0 && Math.abs(y2 - (y1 + h1)) < 16) {
				this.player.land(y2);
				return true;
			} else if (playerBelowPlatTop) {
				console.log('Platform Collision!');
				this.hud.health = 0;
				return true;
			}
		}
		if (this.player.y + this.player.h > this.world.height) {
			this.hud.health = 0;
			console.log('Out Of Bounds Collision!');
			return true;
		}
		return false;
	}

	public checkForCollision({ x1, y1, x2, y2, w1, h1, w2, h2, margin, object }: ICollisionArgs) {
		if (
			x1 + w1 >= x2 + margin && // Check player right collision
			x1 <= x2 + w2 && // Check player left collision
			y1 <= y2 + h2 && // Check player top collision
			y1 + h1 > y2 // Check player bottom collision
		) {
			this.hud.reduceHealth(object, 30);
			this.player.changeToDamagedImgs(object);
		}
	}

	public powerUpCollision({ x1, y1, x2, y2, w1, h1, w2, h2, margin, object }: ICollisionArgs): boolean {
		if (
			x1 + w1 >= x2 + margin && // Check player right collision
			x1 <= x2 + w2 && // Check player left collision
			y1 <= y2 + h2 && // Check player top collision
			y1 + h1 > y2 // Check player bottom collision
		) {
			return true;
		}
		return false;
	}
}

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

	public checkForPlatCollision({ x1, y1, x2, y2, w1, h1, w2, h2, margin, object }: ICollisionArgs) {
		if (
			x1 + w1 >= x2 + margin && // Check player right collision
			x1 <= x2 + w2 && // Check player left collision
			y1 <= y2 + h2 // Check player top collision
		) {
			// Land if negative velocity and within 20px of platform
			if (this.player.yVelocity <= 0 && Math.abs(y2 - (y1 + h1)) < 20) this.player.land(y2);
			// Check player bottom collision
			else if (y1 + this.player.h > y2 + (this.player.isInAir ? margin : 0)) {
				console.log('Platform Collision!!!');
				this.hud.lives = 0;
			}
			// Player is in air if not touching platform
			else this.player.isInAir = true;
		}
	}

	public checkForCollision({ x1, y1, x2, y2, w1, h1, w2, h2, margin, object }: ICollisionArgs) {
		if (
			x1 + w1 >= x2 + margin && // Check player right collision
			x1 <= x2 + w2 && // Check player left collision
			y1 <= y2 + h2 && // Check player top collision
			y1 + h1 > y2 // Check player bottom collision
		) {
			console.log('checkForCollision');
			this.hud.reduceHealth(object);
		}
	}
}

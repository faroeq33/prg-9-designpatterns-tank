import { Game } from "./Game";
import { GameObject } from "./GameObject";
import { Bullet } from "./projectiles/Bullet";
import { Missile } from "./projectiles/Missile";
import { Rocket } from "./projectiles/rocket";
import { Tank } from "./Tank";
import { Vector } from "./Vector";

export class Enemy extends GameObject {
  // Fields
  private speed: number = 1;
  private game: Game;
  private player: Tank;
  private type: string;

  constructor(game: Game, type: string, position: Vector, player: Tank) {
    super(type);

    this.game = game;
    this.type = type;
    this.player = player;
    this.position = position;
  }

  public update() {
    this.position = this.position.add(
      this.position.getDirectionToObject(this.player).scale(this.speed)
    );
    this.rotation = this.position.getDirectionToObject(this.player).angle();

    super.update();
  }

  onCollision(target: GameObject): void {
    // if the enemy is enemy-light and its been hit by a bullet, it should be destroyed
    // if the enemy is enemy-medium and its been hit by a rocket, it should be destroyed
    // if the enemy is enemy-heavy and its been hit by a mine, it should be destroyed

    if (
      (target instanceof Bullet && this.type == "enemy-light") ||
      (target instanceof Rocket && this.type == "enemy-medium") ||
      (target instanceof Missile && this.type == "enemy-heavy")
    ) {
      let index = this.game.gameObjects.indexOf(this);
      if (index > -1) {
        this.game.gameObjects.splice(index, 1);
      }
      this.div.remove();
    }
  }
}

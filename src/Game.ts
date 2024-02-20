import { Enemy } from "./Enemy";
import { GameObject } from "./GameObject";
import { Tank } from "./Tank";
import { Vector } from "./Vector";
import { BulletAmmo } from "./ammo/BulletAmmo";
import { RocketAmmo } from "./ammo/RocketAmmo";
import { MissileAmmo } from "./ammo/MissileAmmo";

import "./css/style.css";

export class Game {
  // Fields
  public gameObjects: GameObject[] = [];

  constructor() {
    this.gameObjects.push(new BulletAmmo(new Vector(800, 200)));
    this.gameObjects.push(new RocketAmmo(new Vector(500, 200)));
    this.gameObjects.push(new MissileAmmo(new Vector(500, 500)));

    let tank = new Tank(this);
    this.gameObjects.push(tank);

    this.gameObjects.push(
      new Enemy(this, "enemy-light", new Vector(50, 50), tank)
    );

    // Because viewport may be null according to typescript
    const viewportWidth = visualViewport ? visualViewport.width : 0;
    const viewportHeight = visualViewport ? visualViewport.height : 0;

    this.gameObjects.push(
      new Enemy(
        this,
        "enemy-medium",
        new Vector(viewportWidth - 50, viewportHeight - 50),
        tank
      )
    );
    this.gameObjects.push(
      new Enemy(this, "enemy-heavy", new Vector(0, viewportHeight - 50), tank)
    );

    this.gameLoop();
  }

  private gameLoop(): void {
    // Update all game objects
    for (const gameObject of this.gameObjects) {
      gameObject.update();
    }
    // After update check for collisions
    for (const gameObject of this.gameObjects) {
      this.checkCollision(gameObject);
    }

    requestAnimationFrame(() => this.gameLoop());
  }

  /**
   * Checks the collision of the givin game object against all other game objects.
   * If a collision occurs, the onCollision of the given game object is called
   * @param gameObject1 The game object to check
   */
  private checkCollision(gameObject1: GameObject) {
    for (const gameobject2 of this.gameObjects) {
      if (gameObject1 != gameobject2 && gameObject1.hasCollision(gameobject2)) {
        gameObject1.onCollision(gameobject2);
      }
    }
  }
}

window.addEventListener("DOMContentLoaded", () => new Game());

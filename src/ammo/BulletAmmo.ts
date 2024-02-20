import { GameObject } from "../GameObject";
import { Vector } from "../Vector";
import { Ammunition } from "./Ammunition";

export class BulletAmmo extends Ammunition {
  constructor(position: Vector) {
    super("ammo-bullet", position);
  }

  public onCollision(target: GameObject): void {}
}

import { GameObject } from "../GameObject";
import { Vector } from "../Vector";
import { Ammunition } from "./Ammunition";

export class RocketAmmo extends Ammunition {
  constructor(position: Vector) {
    super("ammo-rocket", position);
  }

  public onCollision(target: GameObject): void {}
}

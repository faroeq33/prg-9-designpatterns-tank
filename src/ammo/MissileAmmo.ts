import { GameObject } from "../GameObject";
import { Vector } from "../Vector";
import { Ammunition } from "./Ammunition";

export class MissileAmmo extends Ammunition {
  constructor(position: Vector) {
    super("ammo-missile", position);
  }

  public onCollision(target: GameObject): void {}
}

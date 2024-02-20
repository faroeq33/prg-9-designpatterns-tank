import { GameObject } from "../GameObject";
import { Vector } from "../Vector";

export abstract class Ammunition extends GameObject {
  constructor(type: string, position: Vector) {
    super(type);

    this.position = position;
  }

  abstract onCollision(target: GameObject): void;
}

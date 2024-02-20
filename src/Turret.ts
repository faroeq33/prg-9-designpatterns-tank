import { Tank } from "./Tank";
import { GameObject } from "./GameObject";
import { Vector } from "./Vector";

export class Turret extends GameObject {
  // Fields
  private tank: Tank;
  private speed: Vector = new Vector(0, 0);

  constructor(tank: Tank) {
    super("tank-turret");

    this.tank = tank;
  }

  public update() {
    this.position = new Vector(this.tank.Position.x, this.tank.Position.y);
    this.speed = this.tank.Speed;
    this.rotation = this.tank.Rotation;

    super.update();
  }

  onCollision(target: GameObject): void {
    throw new Error("Method not implemented.");
  }
}

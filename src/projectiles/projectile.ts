import { GameObject } from "../GameObject";
import { Tank } from "../Tank";
import { Turret } from "../Turret";
import { Vector } from "../Vector";

export abstract class Projectile extends GameObject {
  // Field
  private _damage: number = 15;

  private speed: number = 10;
  private parentTurret: Turret;
  private direction: Vector;

  // Properties
  public set Damage(value: number) {
    this._damage = value;
  }

  public get Damage(): number {
    return this._damage;
  }
  public get ParentTurret(): GameObject {
    return this.parentTurret;
  }

  constructor(type: string, tank: Tank) {
    super(type);

    this.parentTurret = tank.Turret;
    this.position = this.parentTurret.Position;
    this.rotation = this.parentTurret.Rotation;
    this.direction = Vector.getVectorFromAngle(this.rotation);

    // move the bullet in front of the barrel
    let dist = 30;
    this.position = this.Position.add(this.direction.scale(dist));
  }

  public update() {
    this.position = this.Position.add(this.direction.scale(this.speed));
    super.update();
  }

  public onCollision(target: GameObject): void {}
}

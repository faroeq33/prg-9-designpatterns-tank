import { GameObject } from "../GameObject";
import { Tank } from "../Tank";
import { Rocket } from "../projectiles/rocket";
import { ProjectileStrategy } from "./ProjectileStrategy";

export class RocketStrategy implements ProjectileStrategy {
  public tank;
  private _fireRate!: number;

  public get fireRate(): number {
    return this._fireRate;
  }

  public setFireRate(value: number) {
    this._fireRate = value;
  }

  constructor(tank: Tank) {
    this.tank = tank;
  }

  getAmmoType(): GameObject {
    return new Rocket(this.tank);
  }

  execute(): void {
    this.setFireRate(2000); // 1 rocket per 2000ms
    console.log("Rocket strategy executed");
  }
}

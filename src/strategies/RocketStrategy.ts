import { GameObject } from "../GameObject";
import { Tank } from "../Tank";
import { Rocket } from "../projectiles/rocket";
import { WeaponStrategy } from "./WeaponStrategy";

export class RocketStrategy implements WeaponStrategy {
  ammoType: GameObject;
  tank: Tank;
  fireRate: number;

  constructor(tank: Tank) {
    this.tank = tank;
    this.fireRate = 1000;
    this.ammoType = new Rocket(this.tank);
  }

  public setFireRate(value: number) {
    this.fireRate = value;
  }

  getAmmoType(): GameObject {
    return new Rocket(this.tank);
  }

  execute(): void {
    this.setFireRate(2000); // 1 rocket per 2000ms
    console.log("Rocket strategy executed");
  }
}

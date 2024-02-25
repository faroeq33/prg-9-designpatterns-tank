import { GameObject } from "../GameObject";
import { Tank } from "../Tank";
import { Bullet } from "../projectiles/Bullet";
import { WeaponStrategy } from "./WeaponStrategy";

export class BulletStrategy implements WeaponStrategy {
  ammoType: GameObject;
  public tank;
  public fireRate: number; // ms

  constructor(tank: Tank) {
    this.tank = tank;
    this.ammoType = new Bullet(this.tank);
    this.fireRate = 500;
  }
  public setFireRate(value: number) {
    this.fireRate = value;
  }

  getAmmoType() {
    return new Bullet(this.tank);
  }

  execute(): void {
    console.log("Bullet strategy executed");
  }
}

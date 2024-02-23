import { Tank } from "../Tank";
import { Bullet } from "../projectiles/Bullet";
import { ProjectileStrategy } from "./ProjectileStrategy";

export class BulletStrategy implements ProjectileStrategy {
  public tank;
  public fireRate: number = 500; // ms

  constructor(tank: Tank) {
    this.tank = tank;
  }
  public setFireRate(value: number) {
    this.fireRate = value;
  }

  getAmmoType() {
    return new Bullet(this.tank);
  }

  execute(): void {
    this.setFireRate(500); // 1 bullet per 500ms
    console.log("Bullet strategy executed");
  }
}

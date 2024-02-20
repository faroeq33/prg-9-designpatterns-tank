import { Tank } from "../Tank";
import { Projectile } from "./projectile";

export class Bullet extends Projectile {
  constructor(tank: Tank) {
    super("bullet", tank);
  }
}

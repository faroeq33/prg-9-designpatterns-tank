import { Game } from "./Game";
import { GameObject } from "./GameObject";
import { Turret } from "./Turret";
import { Vector } from "./Vector";
import { BulletStrategy } from "./strategies/BulletStrategy";
import { RocketAmmo } from "./ammo/RocketAmmo";
import { MissileAmmo } from "./ammo/MissileAmmo";
import { WeaponStrategy } from "./strategies/WeaponStrategy";
import { RocketStrategy } from "./strategies/RocketStrategy";
import { BulletAmmo } from "./ammo/BulletAmmo";

export class Tank extends GameObject {
  private readonly FRICTION: number = 0.3;
  private readonly ACCELERATION: number = 0.2;
  // Fields
  private turnLeft: boolean = false;
  private turnRight: boolean = false;
  private accelerate: boolean = false;
  private canFire: boolean = true;
  private previousState: boolean = false;
  public rotation: number = 0;
  public rotationSpeed: number = 2;
  private turret: Turret;
  private game: Game;

  protected speed: Vector = new Vector(0, 0);

  private strategy: WeaponStrategy;

  constructor(game: Game) {
    super("tank-body");

    const viewportWidth = visualViewport ? visualViewport.width : 0;
    const viewportHeight = visualViewport ? visualViewport.height : 0;

    this.game = game;
    this.position.x = viewportWidth / 2;
    this.position.y = viewportHeight / 2;
    this.speed = new Vector(0, 0);

    this.turret = new Turret(this);

    this.strategy = new BulletStrategy(this);

    window.addEventListener("keydown", (e: KeyboardEvent) =>
      this.handleKeyDown(e)
    );
    window.addEventListener("keyup", (e: KeyboardEvent) => this.handleKeyUp(e));
  }

  // Properties
  public get Speed(): Vector {
    return this.speed;
  }
  public get Turret(): Turret {
    return this.turret;
  }

  public update() {
    this.turret.update();

    // handle rotation if active
    if (this.turnLeft) {
      this.rotation -= this.rotationSpeed;
    }
    if (this.turnRight) {
      this.rotation += this.rotationSpeed;
    }

    // handle movement if active
    if (this.accelerate) {
      if (this.speed.x < 5) this.speed.x += this.ACCELERATION;
      if (this.speed.y < 5) this.speed.y += this.ACCELERATION;
    } else {
      // slow down the tank if not accelerating
      if (this.speed.x > 0) this.speed.x -= this.FRICTION;
      if (this.speed.y > 0) this.speed.y -= this.FRICTION;
    }
    if (this.speed.x < 0) this.speed.x = 0;
    if (this.speed.y < 0) this.speed.y = 0;

    this.position.x += Math.cos(this.degToRad(this.rotation)) * this.speed.x;
    this.position.y += Math.sin(this.degToRad(this.rotation)) * this.speed.y;

    this.keepInWindow();

    super.update();
  }

  private handleKeyDown(e: KeyboardEvent) {
    if (e.key == "ArrowLeft") this.turnLeft = true;
    else if (e.key == "ArrowRight") this.turnRight = true;

    if (e.key == "ArrowUp") this.accelerate = true;

    if (e.key == " ") this.fire();
  }

  private handleKeyUp(e: KeyboardEvent) {
    if (e.key == "ArrowLeft") this.turnLeft = false;
    else if (e.key == "ArrowRight") this.turnRight = false;

    if (e.key == "ArrowUp") this.accelerate = false;

    if (e.key == " ") this.previousState = false;
  }

  private fire() {
    if (this.canFire && !this.previousState) {
      const strategyAmmo = this.strategy.ammoType;
      this.game.gameObjects.push(strategyAmmo);
      this.previousState = true;
      this.canFire = false;

      // Timer for the fire rate
      setTimeout(() => {
        this.canFire = true;
      }, this.strategy.fireRate);
    }
  }

  onCollision(target: GameObject): void {
    // If tank hit ammobox then add ammo to tank'
    if (target instanceof BulletAmmo) {
      // switch to bullet strategy
      this.strategy = new BulletStrategy(this);
      this.executeStrategy();
    }

    if (target instanceof RocketAmmo) {
      this.setStrategy(new RocketStrategy(this));
      this.executeStrategy();
    }

    if (target instanceof MissileAmmo) {
      // this._projectileStrategy = new MissileStategy();
    }
  }

  private keepInWindow() {
    if (this.position.x + this.width < 0) this.position.x = window.innerWidth;
    if (this.position.y + this.height < 0) this.position.y = window.innerHeight;
    if (this.position.x > window.innerWidth) this.position.x = -this.width;
    if (this.position.y > window.innerHeight) this.position.y = -this.height;
  }

  /**
   * Converts angle from degrees to radians
   * @param degrees angle in degrees
   */
  protected degToRad(degrees: number) {
    return (degrees * Math.PI) / 180;
  }

  public setStrategy(value: WeaponStrategy) {
    this.strategy = value;
  }

  public executeStrategy(): void {
    this.strategy.execute();
  }
}

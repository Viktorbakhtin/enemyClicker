import { Loader } from "pixi.js";
import { Spine } from "pixi-spine";
import * as PIXI from "pixi.js";
import CounterEnemy from "../CounterEnemy/CounterEnemy";

export class EnemyCreate {
    private spine: Spine;
    private container: PIXI.Container;

    constructor(x: number, y: number, animation: string) {
        if (!Loader.shared.resources.pixie.spineData) {
            throw new Error("Pixie spine is not loaded");
        }

        this.spine = new Spine(Loader.shared.resources.pixie.spineData);
        this.spine.scale.set(0.1, 0.2);
        this.spine.y = y;
        this.spine.x = x;

        this.spine.state.setAnimation(0, animation, true);

        this.container = new PIXI.Container();
        this.container.addChild(this.spine);
        this.container.interactive = true;
        this.container.on("pointerdown", this.removeThisEnemy.bind(this));
    }

    public getEnemy(): PIXI.Container {
        return this.container;
    }

    private removeThisEnemy(): void {
        CounterEnemy.decrement();
        this.container.removeChild(this.spine);
        this.spine.destroy({ children: true });
    }
}

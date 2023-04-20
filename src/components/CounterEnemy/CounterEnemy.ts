import * as PIXI from "pixi.js";

export default class CounterEnemy {
    static count = 0;
    static counterText: PIXI.Text;

    static initCounter(x: number, y: number, container: any): void {
        this.counterText = new PIXI.Text(`Enemies: ${this.count}`, {
            fontSize: 36,
            fill: 0xffffff,
        });
        this.counterText.x = x;
        this.counterText.y = y;
        container.stage.addChild(this.counterText);
    }

    static increment(): void {
        this.count++;
        this.updateCounterText();
    }

    static decrement(): void {
        this.count--;
        this.updateCounterText();
    }

    static updateCounterText(): void {
        this.counterText.text = `Enemies: ${this.count}`;
    }
}

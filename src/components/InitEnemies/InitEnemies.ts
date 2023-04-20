import { EnemyCreate } from "../EnemyCreate/EnemyCreate";
import CounterEnemy from "../CounterEnemy/CounterEnemy";

interface Asset {
    animation: string;
    x: number;
    y: number;
}

interface Config {
    enemies: Asset[];
}

export default class InitEnemies {
    static initEnemies(config: Config, container: any): void {
        config.enemies.forEach((item: Asset) => {
            CounterEnemy.increment();
            const create = new EnemyCreate(item.x, item.y, item.animation);
            const spine = create.getEnemy();

            container.stage.addChild(spine);
        });
    }
}

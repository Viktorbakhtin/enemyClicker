import { Application, Loader, Sprite } from "pixi.js";
import enemyConfig from "./configs/enemyCreateConfig.json";
import loadConfig from "./configs/gameAssetLoaderConfig.json";
import GameAssetLoader from "./components/GameAssetLoader/GameAssetLoader";
import InitEnemies from "./components/InitEnemies/InitEnemies";
import CounterEnemy from "./components/CounterEnemy/CounterEnemy";
import "./style.css";

class Game {
    private readonly app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    public async start(): Promise<void> {
        document.body.appendChild(this.app.view);
        await GameAssetLoader.loadAssets(loadConfig);

        this.addBackground();

        CounterEnemy.initCounter(15, 15, this.app);
        InitEnemies.initEnemies(enemyConfig, this.app);
    }

    private addBackground(): void {
        const backgroundSprite = new Sprite(Loader.shared.resources.background.texture);
        this.app.stage.addChild(backgroundSprite);
    }
}

const game = new Game(
    new Application({
        backgroundColor: 0xd3d3d3,
        width: 1280,
        height: 720,
    }),
);

window.onload = async (): Promise<void> => {
    await game.start();
};

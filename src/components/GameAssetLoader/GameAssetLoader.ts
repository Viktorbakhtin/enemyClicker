import { Loader } from "pixi.js";

interface Asset {
    name: string;
    url: string;
}

interface LoadAssets {
    spines: Asset[];
    sprites: Asset[];
}

export default class GameAssetLoader {
    private static loader: Loader;

    static async loadAssets(config: LoadAssets): Promise<void> {
        this.loader = Loader.shared;

        const assets = [...config.spines, ...config.sprites];
        assets.forEach((asset: Asset) => {
            this.loader.add(asset.name, asset.url);
        });

        return new Promise((resolve, reject) => {
            this.loader.onComplete.once(() => {
                resolve();
            });
            this.loader.onError.once(reject);
            this.loader.load();
        });
    }
}

import {join} from "path";
import {Configuration, HotModuleReplacementPlugin, ProgressPlugin} from "webpack";

export default function (): Configuration {
    const devMode: boolean = process.env.NODE_ENV === "development";
    const path: string = process.cwd();
    const srcPath: string = join(path, "./view/src");
    const entry: string[] = [join(srcPath, "./index.tsx")];

    function commonjsExternals({
        app,
        modules
    }: {
        app: Record<string, string>;
        modules: string[];
    }): Record<string, string> {
        const externals: Record<string, string> = {};
        const appPath: string = devMode ? "./dist" : "../../dist";

        for (const name in app) {
            const path: string = join(appPath, app[name]);

            externals["@" + name] = "commonjs ./" + path;
        }
        for (const name of modules) {
            externals[name] = "commonjs " + name;
        }

        return externals;
    }

    if (devMode) {
        entry.push("webpack-hot-middleware/client?reload=true");
    }

    return {
        mode: devMode ? "development" : "production",
        devtool: devMode ? "source-map" : undefined,
        entry,
        output: {
            path: join(path, "./view/public/assets"),
            filename: "index.js",
            chunkFilename: "[chunkhash].chunk.js",
            assetModuleFilename: "[hash][ext][query]",
            publicPath: devMode ? "/assets/" : "./assets/",
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.tsx?$/i,
                    loader: "ts-loader"
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                modules: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                                sassOptions: {
                                    outputStyle: "compressed"
                                }
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [new ProgressPlugin(), new HotModuleReplacementPlugin()],
        resolve: {
            extensions: [".js", ".ts", ".tsx"],
            alias: {
                "@app": join(srcPath, "./app"),
                "@api": join(srcPath, "./api"),
                "@pages": join(srcPath, "./pages")
            }
        },
        externals: commonjsExternals({
            app: {
                config: "./config"
            },
            modules: []
        })
    };
}

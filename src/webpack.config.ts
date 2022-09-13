import {join} from "path";
import {Configuration, HotModuleReplacementPlugin, ProgressPlugin} from "webpack";

export default function(): Configuration {
    const devMode: boolean = process.env.NODE_ENV === "development";
    const path: string = process.cwd();
    const srcPath: string = join(path, "./view/src");
    const entry: string[] = [join(srcPath, "./index.tsx")];
    if(devMode)
        entry.push("webpack-hot-middleware/client?reload=true");
    return {
        mode: devMode ? "development" : "production",
        devtool: devMode ? "source-map" : undefined,
        entry,
        output: {
            path: join(path, "./view/public/assets"),
            filename: "index.js",
            chunkFilename: "[chunkhash].chunk.js",
            assetModuleFilename: "[hash][ext][query]",
            publicPath: "/assets/",
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
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
                        "sass-loader"
                    ]
                }
            ]
        },
        plugins: [
            new ProgressPlugin,
            new HotModuleReplacementPlugin
        ],
        resolve: {
            extensions: [".js", ".ts", ".tsx"],
            alias: {
                "@app": join(srcPath, "./app"),
                "@api": join(srcPath, "./api"),
                "@pages": join(srcPath, "./pages")
            }
        }
    };
}
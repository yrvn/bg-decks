const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    devtool: "eval-cheap-module-source-map",
    entry: {
        index: "./src/index/main.js",
        patchwork: "./src/patchwork/main.js",
        archipelage: "./src/archipelago/main.js"
    },
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, "dist"),
        writeToDisk: false,
    },
    node: {
        fs: "empty",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["env"],
                },
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        // creates style nodes from JS strings
                        loader: "style-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        // translates CSS into CommonJS
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        // compiles Sass to CSS
                        loader: "sass-loader",
                        options: {
                            outputStyle: "expanded",
                            sourceMap: true,
                            sourceMapContents: true,
                        },
                    },
                    // Please note we are not running postcss here
                ],
            },
            {
                // Load all images as base64 encoding if they are smaller than 8192 bytes
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            // On development we want to see where the file is coming from, hence we preserve the [path]
                            name: "[path][name].[ext]?hash=[hash:20]",
                            limit: 8192,
                        },
                    },
                ],
            },
            {
                // Load all icons
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index/template.html",
            inject: true,
            chunks: ["index"],
            filename: "index.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/patchwork/template.html",
            inject: true,
            chunks: ["patchwork"],
            filename: "patchwork.html",
            title: "Patchwork Automa",
        }),
        new HtmlWebpackPlugin({
            template: "./src/archipelago/template.html",
            inject: true,
            chunks: ["archipelago"],
            filename: "archipelago.html",
            title: "Archipelago Solo",
        }),
        new CopyPlugin({
            patterns: [{ from: "src/patchwork/decks", to: "patchwork/decks" },{ from: "src/archipelago/decks", to: "archipelago/decks" }],
        }),
    ],
};

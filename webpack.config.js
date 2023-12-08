const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve("./dist"),
        filename: "bundle.js"
        // publicPath: "/"
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            "styled-components": path.resolve(
                __dirname,
                "node_modules/styled-components"
            )
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(html)$/,
                use: "html-loader"
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "images/"
                    }
                }
            },
            {
                test: /\.svg$/i,
                use: [
                    {
                        loader: "@svgr/webpack",
                        options: {
                            // name: "[name].[ext]",
                            // outputPath: "images/"
                        }
                    },
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "images/"
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "fonts/"
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    devServer: {
        // static: {
        //     directory: path.resolve(__dirname, "public")
        // },
        liveReload: true,
        port: 3000,
        open: true,
        historyApiFallback: true
    }
};

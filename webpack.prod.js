const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "production",
    output: {
        filename: "main.[contenthash].js",
        clean: true,
    },
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    minimize: true,
                },
            },
            {
                test: /\.css$/i,
                exclude: /styles\.css$/i,
                use: [{ loader: "style-loader" }, "css-loader"],
            },
            {
                test: /styles\.css$/i,
                use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    optimization: {
        minimizer: [`...`, new CssMinimizerWebpackPlugin()],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            ignoreOrder: false,
        }),
        // new CopyWebpackPlugin({
        //     patterns: [{from: 'src/assets/', to: 'assets/'}]
        // })
    ],
};
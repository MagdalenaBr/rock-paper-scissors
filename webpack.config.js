const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, "src/script.js"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js",
		assetModuleFilename: "[name][ext]",
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		open: true,
		hot: true,
		compress: true,
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|svg|jpg|jprg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Webpack App",
			filename: "index.html",
			template: "src/index.html",
		}),
	],
};

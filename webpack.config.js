var Webpack = require("webpack");
var path = require("path");
module.exports = {
    entry: ["./src/entry.js"],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: "style!css"
            },
            { test: /\.(png|jpg)$/, loader: "url-loader?limit=8192" } // 添加到这！并且会按照文件大小, 或者转化为 base64, 或者单独作为文件
            //在大小限制后可以加上&name=./build/images/[name]ys.[ext]，会将我们的文件生成在设定的文件夹下。
        ]
    },
    plugins: [
        new Webpack.BannerPlugin("这里是打包文件头部注释！") //注意这是一个数组..
    ]
}

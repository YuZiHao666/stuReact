const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')


const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, '/src/index.html'),
    filename: 'index.html'
})
// 默认入口
module.exports = {
    // 指定打包的环境
    mode: "development", // development 开发环境  production 发布环境
    plugins: [
        htmlPlugin
    ],
    module: { // 第三方包
        rules: [ // 规则
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', 'json'],
        alias:{
            '@':path.join(__dirname,'./src')
        }
    }
}  
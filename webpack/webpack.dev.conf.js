const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const appConf = require('./app');

let plugins = [];
let chunkMap = {};

plugins.push(new CleanWebpackPlugin());
appConf.pages.forEach((pageObj) => {
    let fileName = '';
    let template = 'src/common_template.ejs';

    if (pageObj.route) {
        fileName = `${pageObj.route}/`;
    }
    fileName = `${fileName}${pageObj.path}.html`;

    if (pageObj.tpl) {
        template = `src/${pageObj.path}/${pageObj.tpl}.ejs`;
    }

    // 适配无配置该项情况
    pageObj.chunks = pageObj.chunks || [];

    const htmlPlugin = new HtmlWebpackPlugin({
        filename: fileName,
        template: template,
        chunks: [
            pageObj.path,
            ...pageObj.chunks,
            ...appConf.commonChunk
        ],
        hash: true, // 为静态资源生成hash值
        minify: true,
        xhtml: true,
        title: 'Development'
    });
    plugins.push(htmlPlugin);

    chunkMap[pageObj.path] = [`./src/${pageObj.path}/index.js`, ...appConf.commonChunk];
});
// 将样式抽离为一个公共的style.css文件
// plugins.push(new ExtractTextPlugin("[name].css"));
plugins.push(new ExtractTextPlugin("style.css"));
// 打包详细分布分析  自动打开 http://127.0.0.1:8888/
// plugins.push(new BundleAnalyzerPlugin());
// 拷贝公共资源
plugins.push(new CopyWebpackPlugin([
    {
        from: path.resolve(__dirname, '../public'),
        to: path.resolve(__dirname, '../dist')
    }
]));
// HMR
plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = {
    mode: 'development',
    entry: chunkMap,
    devtool: 'inline-source-map',
    plugins: plugins,
    optimization: {
        splitChunks: { // 代码抽取分离配置
            // chunks: 'all'
            cacheGroups: {
                graphlib: {
                    test: /[\\/]node_modules[\\/]graphlib/,
                    // test: /node_modules\/jquery/,
                    priority: 100,
                    chunks: 'initial',
                    name: 'graphlib'
                },
                jqLib: { // jquery相关包
                    test: /[\\/]node_modules[\\/]jquery/,
                    // test: /node_modules\/jquery/,
                    priority: 100,
                    chunks: 'initial',
                    name: 'jquery'
                },
                jsPlumbLib: {
                    // test: /[\\/]node_modules[\\/]jsplumb/,
                    // 这个插件的代码在\node_modules\webpack\lib\optimize\SplitChunksPlugin.js
                    test: function(module) {
                        if (module.nameForCondition && /[\\/]node_modules[\\/]jsplumb/.test(module.nameForCondition())) {
                            console.info("====================");
                            console.info(module.nameForCondition());
                            return true;
                        }
                        return false;
                    },
                    priority: 100,
                    chunks: 'initial',
                    name: 'jsplumb'
                }
                // 不能有下面配置，好像是过多抽取了页面中的代码，导致入口js不会执行。
                // commonLib: { // 其余加载包
                //     test: /[\\/]node_modules[\\/]/,
                //     chunks: 'initial',
                //     minChunks: 2,
                //     name: 'commons',
                //     priority: 80
                // }
            }
        }
    },
    module: {
        rules: [
            {
                // 得到jquery模块的绝对路径
                test: require.resolve('jquery'),
                // 将jquery绑定为window.jQuery 和 window.$
                use: [
                    'expose-loader?jQuery',
                    'expose-loader?$'
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
                // use: [
                //     "style-loader/url",
                //     "file-loader",
                //     'css-loader'
                // ]
                // use: [
                //     'style-loader',
                //     'css-loader'
                // ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js[x]?$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    }
};
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('./webpack.dev.conf.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        children: false
    },
    // watchOptions: {
    //     aggregateTimeout: 3000,
    //     poll: true
    // },
    lazy: false,
    hot: true
}));

app.use(webpackHotMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

// Serve the files on port 3000.
app.listen(3000, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Example app listening on port 3000!\n');
});
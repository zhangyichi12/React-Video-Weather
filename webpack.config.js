var path = require('path');
const SERVER_PORT = process.env.SERVER_PORT || 8080;

module.exports = {
    entry: path.join(__dirname, 'src/index.jsx'),
    output: {
        publicPath: '/',    //For 'webpack-dev-server'
                            //In terminal - webpack result is served from: DOMAIN/publicPath/filename
        path: path.join(__dirname, 'public'), // For 'webpack'
        filename: "bundle.js"
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            { exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        port: SERVER_PORT,
        host: '0.0.0.0',
        colors: true,
        inline: true,
        contentBase: path.join(__dirname, 'public')     //content is served from
    }
};
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});


module.exports = {
    entry: [
        "./app/index.js"
    ],
    output: {
        path: __dirname + "/dist",
        filename : "index_boundle.js"
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude: /node_modules/,
                loader : 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    plugins : [
        HtmlWebpackPluginConfig
    ]
}
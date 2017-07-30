const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        './frontend/index.js'
    ],
    module: {
        rules: [
          {
            test: /frontend\/(.)*\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['react', 'es2015']
              }
            }
          },
          { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' },

          {
            test: /\.css$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader?importLoaders=1" }
            ]
          },
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel-loader', 'babel-loader?presets[]=react,presets[]=es2015'],
          }
        ]
    },
    resolve: {
        extensions: ['.js', '.scss']
    },
    output: {
        path: path.join(__dirname, '/public'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: 'cheap-eval-source-map',
    devServer: {
        contentBase: './public',
        hot: true
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

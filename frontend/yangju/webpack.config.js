const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode : 'development', // production
    devtool : 'eval', // hidden-source-map
    resolve : {
        extensions :['.jsx', '.js', '.tsx', '.ts'],
    },

    entry : {
        app : './client'
    },
    modules : {
        rules : [{
            test : /\.tsx?$/,
            loader : 'awesome-typescript-loader', // babel 과 함께 사용가능
        }]
    },
    output :{
        filename : '[name].js',
        path : path.join(__dirname, 'dist'),
    }
}

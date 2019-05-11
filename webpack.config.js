const path = require('path');


module.exports = {
    entry: './src/app.ts',
    output: {
        path: path.resolve(process.cwd(), './dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader']
            }
        ]
    },
    mode: 'development',
    devtool: 'source-map'
};

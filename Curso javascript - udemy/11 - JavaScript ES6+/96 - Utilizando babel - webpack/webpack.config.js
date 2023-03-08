module.exports = {
    entry: './src/main.js',                 // Apontar onde esta o main.js
    output: {
        path: __dirname + '/public',        // Apontar onde esta o index.html
        filename: 'bundle.js',
    },
    devServer: {
        allowedHosts: __dirname + '/public',  // Apontar onde esta o index.html
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    }
};
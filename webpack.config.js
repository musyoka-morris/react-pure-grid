/**
 * Created by musyoka-morris on 12/26/2016.
 */
module.exports = {
    entry: "./examples/main.js",
    output: {
        path: __dirname,
        filename: "examples/bundle.js"
    },
    module: {
        loaders: [
            {
                test  : /.jsx?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    }
};

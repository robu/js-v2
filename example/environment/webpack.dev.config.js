const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env) => {
    console.log("HERE: ", env.kmom);
    return {
        mode: 'development',
        devtool: 'inline-source-map',
        entry: `./${env.kmom}/js/main.js`,
        plugins: [
            new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })
        ],
        output: {
            filename: 'bundle.js',
            path: path.resolve(`${__dirname}/${env.kmom}`, 'dist')
        }
    }
}

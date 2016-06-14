var join = require("path").join;

module.exports = {
    entry: [
        "babel-polyfill",
        "whatwg-fetch",
        join(__dirname, "./src/polyfill.js")
    ],
    module: {
        loaders: [{
            test: /\.js/,
            include: [join(__dirname, "./src")],
            exclude: /node_modules/,
            loader: "babel",
            query: {
                presets: ["es2015", "stage-0"],
                plugins: [
                    ["transform-runtime", {
                        polyfill: false,
                        regenerator: true
                    }]
                ]
            }
        }]
    },
    output: {
        path: join(__dirname, "./lib"),
        filename: "polyfill.js"
    }
};
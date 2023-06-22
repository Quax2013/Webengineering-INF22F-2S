const path = require("path");

module.exports = {
    entry: "./src/scripts/script.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
    },
};
const path = require('path')

module.exports = {
    mode: "development",
    entry: "./src/componenetes/listagem/listagem-clientes.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
}
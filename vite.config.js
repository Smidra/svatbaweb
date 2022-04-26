const { resolve } = require('path')
export default {
    plugins: [],
    server: {
        open: '/src/sandbox.html',
        port: 3116,
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                sandbox: resolve(__dirname, '/src/sandbox.html'),
                another: resolve(__dirname, 'another.html')
            }
        }
    }
}

const { resolve } = require('path')

export default {
    plugins: [],
    server: {
        open: '/src/index.html',
        port: 3116,
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, './src/index.html'),
                aboutUs: resolve(__dirname, './src/aboutUs.html'),
                gifts: resolve(__dirname, './src/gifts.html'),
                inviteForm: resolve(__dirname, './src/inviteForm.html'),
            }
        }
    }
}

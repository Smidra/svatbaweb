const colors = require('tailwindcss/colors')
module.exports = {
    content: ['./src/*.html', './*.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        fontFamily: {
            'sans': ['Noto Sans Display', 'sans-serif'],
            'serif': ['Bodoni Moda', 'serif'],
        },
        extend: {
            colors: {
                //add your own color
                //https://tailwindcss.com/docs/customizing-colors
            },
            container: {
                center: true,
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

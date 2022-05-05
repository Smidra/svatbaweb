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
                // padding: {
                //     '2xl': '128px',
                // }
            },
            screens: {
                'xl': '1441px',
                '2xl': '1441px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

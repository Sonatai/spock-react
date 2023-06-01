/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                black: '#000',
                white: '#fff',
                eerieBlack: '#1A1A1D',
                davysGray: '#4E4E50',
                silver: '#B3B0A8',
                claret: '#950740',
                redNcs: '#C3073F',
                frenchRose: '#EE4C7C',
            },
            space: {
                0.25: '0.063rem' /*1px*/,
            },
            maxWidth: {
                '8xl': '90rem',
            },
        },
    },
    plugins: [],
};

/*
    Dark Theme:
        headlines: #EE4C7C
*/

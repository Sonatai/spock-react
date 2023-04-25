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
                cardinal: '#BF2232',
                claret: '#950740',
                redNcs: '#C3073F',
                bistre: '#2C211B',
                chocolateCosmos: '#5D001E',
                platinum: '#E3E2DF',
                orchidPink: '#E3AFBC',
                murrey: '#9A1750',
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

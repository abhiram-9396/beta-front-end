module.exports = {
    content: [
        './public/index.html',
        './src/components/Header/index.jsx',
        './src/components/Footer/index.jsx',
        './src/components/Content/index.jsx',
        './src/components/Content/FormInput/index.jsx',
        './src/components/Content/FormPickOne/index.jsx',
        './src/components/Content/FormPickOne/FormPickOneItem/index.jsx',
        './src/components/Content/FormPorfolio2/index.jsx',
        './src/components/Content/FormPickMultiple/index.jsx',
        './src/components/Content/FormPickOne/FormPickOneItem/index.jsx',
        './src/components/Content/FormPickMultiple/index.jsx',
        './src/components/Content/FormPickMultiple/FormPickMultipleItem/index.jsx',
        './src/components/Content/FormPortfolio1/FormPortfolioItem1/index.jsx',
        './src/components/Content/FormPortfolio1/FormPortfolioItem1/PortfolioTable/index.jsx',
        './src/components/Content/FormPortfolio1/index.jsx',
        './src/components/Content/FormPortfolio2/index.jsx',
        './src/components/Content/FormPortfolio2/FormPortfolioItem2/index.jsx',
        './src/components/Content/FormPortfolioRate/index.jsx',
        './src/components/Content/FormPortfolio3/index.jsx',
        './src/components/Content/FormPortfolio3/FormPortfolioItem2/index.jsx',
        './src/components/Footer/index.jsx',
        './src/components/Content/FormHello/index.jsx',
        './src/components/Investment/index.jsx',
    ],
    theme: {
        extend: {
            fontSize: {
                icon: '.5rem',
                icon2: '.7rem',
                ticket: '.625rem',
                14: '.875rem',
                dot: '.25rem',
            },
            width: {
                18: '4.5rem',
                '1/3': '30%',
            },
            maxWidth: {
                128: '8rem',
                230: '232px',
                690: '700px',
                264: '264px',
                552: '552px',
                400: '400px',
                936: '936px',
                1008: '1008px',
                1152: '1152px',
            },
            minWidth: {
                264: '264px',
            },
            maxHeight: {
                420: '420px',
            },
            minHeight: {
                291: '291px',
            },
            height: {
                18: '4.5rem',
                10.89: '10.89vh',
                13.223: '13.223vh',
                75.887: '75.887vh',
                46.667: '46.667vh',
            },
            lineHeight: {
                h2: '1.625rem',
                title: '1.536875rem',
                p: '2.025rem',
                18: '1.125rem',
                14: '.875rem',
                17: '1.0625rem',
                19: '1.1875rem',
                22: '1.375rem',
                26: '1.625rem',
                49: '3.07375rem',
            },
            colors: {
                primary: '#30303F',
                second: '#626262',
                pink: '#EB5471',
                input: '#F2E9E0',
                gray: '#A4A4A4',
                'input-border': '#DDDDDD',
                table: '#333333',
                porfolio: '#F5F5F5',
                low: '#00DC4B',
                high: '#FF0000',
                med: '#FFB800',
                bgportfolio: '#F2E9E0',
                questionActive: '#F2E9E0',
            },
            boxShadow: {
                focus: '0px 0px 12px rgba(235, 84, 113, 0.5)',
                input: '0px 1px 2px rgba(16, 24, 40, 0.05)',
            },
            borderWidth: {
                '1/2': '.5px',
            },
            borderRadius: {
                input: '1.3125rem',
                10: '10px',
            },
            spacing: {
                center: '-50%',
                92: '5.75rem',
                100: '6.25rem',
                35: '2.1875rem',
                top: '-0.75rem',
                'top-0.20': '-0.20rem',
                60: '3.75rem',
                'top-21': '-.3125rem',
                'top-16': '-1.2rem',
                45: '2.8125rem',
                51: '3.1875rem',
                22: '1.375rem',
                17: '1.0625rem',
                50: '3.125rem',
                166: '10.375rem',
                'bottom-29': '-1.8125rem',

                'bottom-38': '-2.375rem',
            },
            flex: {
                50: '0 0 calc(50% - 24px)',
                '0-50': '0 0 50%',
                33: '0 0 33.333%',
                25: '0 0 25%',
            },
            rotate: {
                265: '265deg',
            },
        },

        fontFamily: {
            manrope: ['Manrope', 'sans-serif'],
        },
    },
    plugins: [],
    purge: {
        safelist: [
          'text-med',
          'text-low',
          'text-high',
        ]
      },
};

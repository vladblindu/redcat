const plugin = require('tailwindcss/plugin')
const {spacing, colors} = require('./theme-data')

const addons = plugin(({addUtilities}) => {
    const newUtilities = {
        '.page-height': {
            height: `calc(100% - ${spacing.header})`
        },
        '.flex-between': {
            display: 'flex',
            justifyItems: 'space-between',
            alignItems: 'center'
        },
        '.central-window': {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -70%)'
        },
        '.top-window': {
            position: 'fixed',
            top: '100px',
            left: '50%',
            transform: 'translate(-50%, -70%)',
            transition: 'opacity 2.5s'
        },
        '.thin-line': {
            height: '2px'
        },
        '.slide-up':{
            transition: 'top .5s ease 0s'
        },
        '.date-grid': {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
            gridTemplateRows: "2rem auto",
            alignItems: "stretch"
        },
        '.date-subgrid': {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gridTemplateRows: "2rem auto",
            alignItems: "stretch"
        },
        '.grid-1to5': {
            gridColumn: "1/5"
        },
        '.grid-2to5': {
            gridColumn: "2/5"
        },
        '.grid-5to7': {
            gridColumn: "5/7"
        },
        'input[type=range]': {
            '-webkit-appearance': 'none',
            appearance: 'none',
            width: '100%',
            height: '10px',
            background: colors['ink-hover'],
            outline: 'none'
        },
        'input[type=range]::-webkit-slider-runnable-track': {
            opacity: 0.7,
            '-webkit-transition': '.2s',
            transition: 'opacity .2s'
        },
        'input[type=range]::-moz-range-track': {
            opacity: 0.7,
            '-webkit-transition': '.2s',
            transition: 'opacity .2s'
        },
        'input[type=range]::-webkit-slider-runnable-track:hover': {
            opacity: 1
        },
        'input[type=range]::-moz-range-track:hover': {
            opacity: 1
        },
        'input[type=range]::-webkit-slider-thumb': {
            '-webkit-appearance': 'none',
            appearance: 'none',
            borderRadius: '5px',
            width: '15px',
            height: '15px',
            background: colors.primary,
            cursor: 'pointer',
        },

        'input[type=range]::-moz-range-thumb': {
            appearance: 'none',
            borderRadius: '5px',
            width: '15px',
            height: '15px',
            background: colors.primary,
            cursor: 'pointer',
        },
        '.stripes': {
            background: `repeating-linear-gradient(
                45deg,
                ${colors.paper},
                ${colors.paper} 10px,
                ${colors['paper-hover']} 10px,
                ${colors['paper-hover']} 20px
            )`
        }
    }
    addUtilities(newUtilities)
})

module.exports = [addons]
const {theme, plugins} = require('./src/assets/theme')

module.exports = {
    theme: {
        extend: {
            ...theme
        }
    },
    variants: {
        input: ['hover', 'readonly', 'focus']
    },
    plugins
}
export const omit = (o, ...keys) =>
    Object.keys(o).reduce((acc, k) => {
        if (!keys.includes(k)) acc[k] = o[k]
        return acc
    }, {})

export const pick = (o, ...keys) =>
    Object.keys(o).reduce((acc, k) => {
        if (keys.includes(k)) acc[k] = o[k]
        return acc
    }, {})

export const identity = x => x

export function range() {
    let start = 0
    let end
    if (!arguments.length && (typeof arguments[0] === 'number'))
        throw new Error('DEVERR: Range requires at least 1 numeric(integer) argument.')
    if (arguments.length > 1) {
        if (typeof arguments[1] === 'number') {
            start = arguments[0]
            end = arguments[1]
        }
        if (typeof arguments[1] === 'boolean') {
            end = arguments[0]
            start = arguments[1] ? 1 : 0
        }
    } else {
        start = 0
        end = arguments[0]
    }
    const tmp = []
    for (let i = start; i < end; i++)
        tmp.push(i)
    return tmp
}

export const capitalize = st => st[0].toUpperCase() + st.slice(1)

export const mustacheIt = (strIn, vars = {}) => {

    const pattern = new RegExp('{{([0-9a-zA-Z_-]+)}}', 'g')

    return strIn.replace(pattern, (match, i, index) => {

        let result

        if (strIn[index - 1] === '{{' &&
            strIn[index + match.length] === '}}') {
            return i
        } else {
            result = vars.hasOwnProperty(i) ? vars[i] : null
            if (result === null || result === undefined) {
                return ''
            }
            return result
        }
    })
}

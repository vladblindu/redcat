const getKey = (it, opts) => {
    if (it.key) return it.key
    else if (opts.key && it[opts.key]) return it[opts.key]
    else if (Object.keys(it).length === 0)
        throw new Error('DEVERR: Empty object in item list provided to dropdown.')
    return Object.keys(it)[0]
}

const getValue = (it, opts) => {
    if (it.value) return it.value
    else if (opts.value && it[opts.value]) return it[opts.value]
    else if (Object.keys(it).length === 0)
        throw new Error('DEVERR: Empty object in item list provided to dropdown.')
    else if (Object.keys(it).length === 1)
        return Object.keys(it)[0]
    const extraEntry = Object.keys(it).filter(k => k!== 'key' && k !== 'icon')
    if(extraEntry.length) return it[extraEntry[0]]
    else return it['key']
}

/**
 * @name extractor
 * @param {object[] | strings[]} items
 * @param {object} opts
 * @returns {(function(*): *)[]}
 */

export const extractor = (items, opts) =>
    items.reduce(
        (acc, it) => {
            if (typeof it === 'string')
                acc.push([it, it])
            if (it instanceof Array)
                acc.push(it)
            if (typeof it === 'object') {
                acc.push([getKey(it, opts), getValue(it, opts)])
            }
            return acc
        }, [])

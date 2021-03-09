import {PRIMITIVES} from './constants'

const unquote = st => st.replace(/"([^"]+)":/g, '$1:')

export const createMutation = (name, values) => `query=mutation{${name}(data:${JSON.stringify(unquote(values))})}`

export const camelCase = st =>
    st.replace(/(_\w)/g, m => m[1].toUpperCase())

export const snakeCase = st =>
    st.replace(/[\w]([A-Z])/g, m => m[0] + "_" + m[1]).toLowerCase()

export const initialize = shape => Object.keys(shape).reduce(
    (acc, k) => {
        if (k[0] === '$') return acc
        const type = PRIMITIVES.includes(shape[k])
            ? shape[k]
            : shape[k].type
        if (!type) throw new Error(`DEVERR: ${shape[k]} has no valid type definition.`)
        if (shape[k].default) acc[k] = shape[k].default
        else switch (type.toLowerCase()) {
            case 'number':
                acc[k] = 0
                break
            case 'date':
                acc[k] = new Date()
                break
            case 'object':
                acc[k] = shape[k].shape
                    ? initialize(shape[k].shape)
                    : acc[k] = {}
                break
            case 'array':
                if (shape[k].shape)
                    acc[k] = shape[k].shape
                        ? [initialize(shape[k].shape)]
                        : initialize(shape[k].shape)
                else acc[k] = []
                break
            case 'boolean':
                acc[k] = false
                break
            case 'bool':
                acc[k] = false
                break
            default:
                acc[k] = ''
        }
        return acc
    }, {})


// TODO normalization for data types
export const normalizeData = (values, shape, incoming) => {
    Object.keys(shape).reduce(
        (acc, k) => {
            if (k[0] === '$') return acc
            if (shape[k].case)
                if (incoming) acc[camelCase(k)] = values[k]
                else acc[snakeCase(k)] = values[k]
            return acc
        }
    )
}
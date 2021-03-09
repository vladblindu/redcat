/* eslint  no-template-curly-in-string: 0 */
export default {
    en: {
        mixed: {
            default: '${path} is invalid',
            required: '${path} is a required field',
            oneOf: '${path} must be one of the following values: ${values}',
            notOneOf: '${path} must not be one of the following values: ${values}',
            defined: '${path} must be defined'
        },
        string: {
            length: '${path} must be exactly ${length} characters',
            min: '${path} must be at least ${min} characters',
            max: '${path} must be at most ${max} characters',
            matches: '${path} must match the following: "${regex}"',
            email: '${path} must be a valid email',
            url: '${path} must be a valid URL',
            trim: '${path} must be a trimmed string',
            lowercase: '${path} must be a lowercase string',
            uppercase: '${path} must be a upper case string'
        }, number: {
            min: '${path} must be greater than or equal to ${min}',
            max: '${path} must be less than or equal to ${max}',
            lessThan: '${path} must be less than ${less}',
            moreThan: '${path} must be greater than ${more}',
            notEqual: '${path} must be not equal to ${notEqual}',
            positive: '${path} must be a positive number',
            negative: '${path} must be a negative number',
            integer: '${path} must be an integer'
        },
        date: {
            min: '${path} field must be later than ${min}',
            max: '${path} field must be at earlier than ${max}'
        },
        boolean: {},
        object: {
            noUnknown: '${path} field has unspecified keys: ${unknown}'
        },
        array: {
            min: '${path} field must have at least ${min} items',
            max: '${path} field must have less than or equal to ${max} items'
        }
    },
    ro: {
        mixed: {
            default: '${path} este invalid',
            required: '${path} este un camp obligatoriu',
            oneOf: '${path} trebuie sa fie una dintre urmatoarele valori: ${values}',
            notOneOf: '${path} trebuie sa nu fie una dintre urmatoarele valoris: ${values}',
            defined: '${path} trebuie sa fie definit'
        },
        string: {
            length: '${path} trebuie sa aiba exact ${length} caractere',
            min: '${path} trebuie sa aiba cel putin ${min} caractere',
            max: '${path} trebuie sa aiba maximum ${max} caractere',
            matches: '${path} trebuie sa satisfaca urmatoarea expresie: "${regex}"',
            email: '${path} trebuie sa fie o adresa de email valida',
            url: '${path} trebuie sa fie un URL valid',
            trim: '${path} trebuie sa fie un sir de caractere fara spatii sau caractere speciale (tab, sfarsit de liie, etc)',
            lowercase: '${path} trebuie sa contina doar litere mici',
            uppercase: '${path} trebuie sa contina doar litere mari'
        }, number: {
            min: '${path} trebuie sa fie mai mare sau egal cu ${min}',
            max: '${path} trebuie sa fie mai mic sau egal cu ${max}',
            lessThan: '${path} trebuie sa fie mai mic decat ${less}',
            moreThan: '${path} trebuie sa fie mai mare decat ${more}',
            notEqual: '${path} trebuie sa fie egal cu ${notEqual}',
            positive: '${path} trebuie sa fie un numar pozitiv',
            negative: '${path} trebuie sa fie un numar negativ',
            integer: '${path} trebuie sa fie un numar intreg'
        },
        date: {
            min: '${path} trebuie sa fie o data ulterioara ${min}',
            max: '${path} trebuie sa fie o data anterioara ${max}'
        },
        boolean: {},
        object: {
            noUnknown: 'Campul ${path} are key nespecificate: ${unknown}'
        },
        array: {
            min: 'Campul ${path} trebuie sa aiba cel putin ${min} elemente',
            max: 'Campul ${path} un numar de elemnte mai mic sau egal cu ${max}'
        }
    }
}
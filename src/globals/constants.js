export const ROOT_ID = 'root'
export const XSM = 'xsm'
export const SM = 'sm'
export const MD = 'md'
export const LG = 'lg'
export const XLG = 'xlg'
export const XL = 'xl'
export const XXL = 'xxl'
export const JUMBO = 'jumbo'
export const SIZES = {
    [XSM]: '2',
    [SM]: '4',
    [MD]: '6',
    [LG]: '8',
    [XLG]: '12',
    [XL]: '16',
    [XXL]: '24',
    [XXL]: '32',
    [JUMBO]: '64'
}

export const LEFT = 'left'
export const UP = 'up'
export const RIGHT = 'right'
export const DOWN = 'down'

export const rotationDirection = {
    [RIGHT]: 'transform -rotate-90',
    [DOWN]: '',
    [LEFT]: 'transform rotate-90',
    [UP]: 'transform rotate-180'
}

// App sp
export const COMPANY = 'COMPANY'
export const INDIVIDUAL = 'INDIVIDUAL'
export const ACCOUNTING_ENTITIES = [
    COMPANY, INDIVIDUAL
]
export const VOICE_TALENT = 'voice-talent/g'
export const ACTING_TALENT = 'acting-talent/g'
export const SCREENWRITER = 'screen-writer/g'
export const DIRECTOR = 'director/g'
export const TALENT_TYPES = [VOICE_TALENT, ACTING_TALENT, SCREENWRITER, DIRECTOR]
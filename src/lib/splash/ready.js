import {SPLASH_KEY} from './constants'

const ready = () => {
    //dev-code-in
    if (process.env.REACT_APP_SPLASH === 'disabled') {
        document.getElementById('root').style.display = 'block'
        return
    }
    //dev-code-out
    if (window[SPLASH_KEY]) window[SPLASH_KEY]()

}

export default ready
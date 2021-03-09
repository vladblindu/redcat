import Splash from './splash.class'
import {SPLASH_KEY} from './constants'

const splash = (splashHtml, activateHtml, opts) => {
    //dev-code-in
    if (process.env.REACT_APP_SPLASH === 'disabled') return
    //dev-code-out
    const tmp = new Splash(splashHtml, activateHtml, opts)
    window[SPLASH_KEY] = tmp.ready
}

export {SPLASH_KEY}
export default splash

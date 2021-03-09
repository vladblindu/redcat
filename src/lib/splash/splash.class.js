import {getTime, setupElement, splashContent} from './helpers'
import {
    ABOUT,
    ACCEPTED,
    APP_READY_KEY,
    COOKIES_KEY,
    DEFAULT_CSS,
    DEFAULT_OPTS,
    ROOT,
    SPLASH,
    SPLASH_CONTENT,
    SPLASH_KEY
} from './constants'

/**
 * @class Splash
 */

class Splash {

    /**
     * @constructor
     * @param {string} splashHtml
     * @param {string|object?} activationHtml
     * @param {opts?} opts
     * @param {number?} opts.minShowTime - defaults to 1000ms
     * @param {number?} opts.transitionTime - defaults to 500ms
     * @param {number?} opts.cleanupDelay - defaults to 200ms
     * @param {boolean?} opts.isCookie - default true
     * @param {string?} opts.splashContentCss - defaults to DEFAULT_SPLASH_CSS
     */
    constructor(splashHtml, activationHtml, opts = {}) {

        if (!splashHtml) throw new Error('DEVERR: No innerHtml string for the splash screen provided.')
        if (typeof activationHtml === 'object') {
            opts = activationHtml
            activationHtml = ''
        }

        opts = {...DEFAULT_OPTS, ...opts}
        this._transitionTime = opts.transitionTime
        this._minShowTime = opts.minShowTime
        this._cleanupDelay = opts.cleanupDelay
        this._splashContentCss = opts.splashContentCss || DEFAULT_CSS[SPLASH_CONTENT]

        this.cleanedUp = false
        // initialize or create the __base__ html elements
        this.splash = setupElement(
            document.getElementById(SPLASH),
            SPLASH,
            {
                transitionTime: this._transitionTime,
                initialHtml: splashContent(this._splashContentCss)
            }
        )
        this.root = setupElement(
            document.getElementById(ROOT),
            ROOT,
            {transitionTime: this._transitionTime}
        )

        document.getElementById(ABOUT).innerHTML = splashHtml

        localStorage.removeItem(APP_READY_KEY)

        // if there is no GDPR cookie situation or it has already been accepted
        if (!activationHtml || localStorage.getItem(COOKIES_KEY) === ACCEPTED) {
            // we have a timed splash situation
            this.needsActivation = false
            this._startTime = getTime()
        } else {
            // lets create the activation section
            const activator = document.getElementById(COOKIES_KEY)
            activator.innerHTML = activationHtml
            // else let's check for a button
            const hasButtons = document.getElementsByTagName('button')
            if (!hasButtons.length) throw new Error('DEVERR: The GDPR activation InnerHtml does\'t contain any button element.')
            this._activator = hasButtons[0]
            this.needsActivation = true
            this._activator.addEventListener('click', this.activate.bind(this))
        }

        // bind methods
        this._timedTransition = this._timedTransition.bind(this)
        this._transition = this._transition.bind(this)
        this.ready = this.ready.bind(this)
    }

    activate() {
        localStorage.setItem(COOKIES_KEY, ACCEPTED)
        if (localStorage.getItem(APP_READY_KEY)) this._transition()
    }

    _hideSplash() {
        this.splash.style.opacity = '0'
    }

    _showRoot() {
        this.root.style.display = 'block'
        this.root.style.opacity = '1'
        this.root.style.transform = 'none'
    }

    _cleanup() {
        if (!this.cleanedUp)
            setTimeout(() => {
                this.splash.parentNode.removeChild(this.splash)
                delete window[SPLASH_KEY]
            }, this._transitionTime + this._cleanupDelay)
      this.cleanedUp = true
    }

    _transition() {
        this._showRoot()
        this._hideSplash()
        this._cleanup()
    }

    _timedTransition() {
        const timeElapsed = getTime() - this._startTime
        if (timeElapsed > this._minShowTime) this._transition()
        else setTimeout(this._transition, this._minShowTime - timeElapsed)
    }

    ready() {
        localStorage.setItem(APP_READY_KEY, 'ready')
        if (this.needsActivation) {
            if (localStorage.getItem(COOKIES_KEY) === ACCEPTED)
                this._transition()
        } else this._timedTransition()
    }
}

export default Splash

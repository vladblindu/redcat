export const CLEANUP_DELAY = 200
export const MIN_SHOW_TIME = 1000
export const TRANSITION_TIME = 1000

export const DEFAULT_OPTS = {
  minShowTime: MIN_SHOW_TIME,
  cleanupDelay: CLEANUP_DELAY,
  transitionTime: TRANSITION_TIME
}

export const ROOT = 'root'
export const SPLASH = 'splash'
export const COOKIES_KEY = 'cookies'
export const APP_READY_KEY = 'app-ready'
export const ACCEPTED = 'accepted'
export const ABOUT = 'about'
export const SPLASH_KEY = '__SPLASH__'
export const SPLASH_CONTENT = 'splash-content'

export const DEFAULT_CSS = {
  [ROOT]: 'display: block; opacity: 0; transition: opacity ',
  [SPLASH]: 'position:absolute;top:0;left:0;width:100vw;height:100vh;display:flex;' +
  'justify-items:center;align-items:center; overflow:hidden;opacity:1;transition:opacity ',
  [SPLASH_CONTENT]: 'mx-auto z-50 p-8'
}

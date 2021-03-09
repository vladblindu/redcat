import {ABOUT, COOKIES_KEY, DEFAULT_CSS} from './constants'

/**
 * @param {number} time
 * @returns {string}
 */
const toCss = time => (time / 1000).toString() + 's'

/**
 * @returns {Date|number}
 */
export const getTime = () => {
  try {
    return performance.now()
  } catch {
    return new Date()
  }
}

/**
 *
 * @param {HTMLElement} elem
 * @param {string} name
 * @param {object} opts
 * @param {number} opts.transitionTime
 * @param {string?} opts.initialHtml
 * @returns {HTMLElement}
 */
export const setupElement = (elem, name, opts) => {
  if (!elem) {
    elem = document.createElement('div')
    elem.id = name
    if(opts.initialHtml) elem.innerHTML = opts.initialHtml
    document.body.appendChild(elem)
  }
  elem.style.cssText = DEFAULT_CSS[name] + toCss(opts.transitionTime) + ';'
  return elem
}

export const splashContent = css => `
    <div class="${css}">
      <section id="${ABOUT}"> </section>
      <section id="${COOKIES_KEY}"> </section>
    </div>`

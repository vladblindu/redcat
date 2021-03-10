import './css/styles.css'
import './lib/splash'
import * as serviceWorker from './serviceWorker'
import React, {Suspense} from 'react'
import ReactDOMServ from 'react-dom/server'
import ReactDOM from 'react-dom'
import splash from './lib/splash'
import {checkOldAuth} from './lib/auth'
import About from './components/splash/about'
import Activate from './components/splash/activate'
import {splashContentCss} from './components/splash/splash-content-css'
import {ROOT_ID} from './globals/constants'
import EndGame from './components/bad-karma/end-game'


const aboutHtml = ReactDOMServ.renderToString(<About/>)
const activateHtml = ReactDOMServ.renderToString(<Activate/>)

splash(
    aboutHtml,
    activateHtml,
    {
        splashContentCss: splashContentCss
    })

const Loader = () => {
    const AppLoader = React.lazy(() => import('./App.js'))
    return <Suspense fallback={<div>Loading...</div>}>
        <AppLoader/>
    </Suspense>
}

const root = document.getElementById(ROOT_ID)

checkOldAuth()
    .then(() => {
        ReactDOM.render(<Loader/>, root)
    })
    .catch(err => {
        ReactDOM.render(
            <EndGame err={err}/>,
            root
        )
    })

// service worker registration
serviceWorker.unregister()

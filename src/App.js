import React from 'react'
import {HttpProvider} from './lib/http'
import {AuthProvider} from './lib/auth'
import httpConfig from './config/http.config'
import {AppRouter, Routing} from './components/routing'
import ready from './lib/splash/ready'
import {StatusProvider} from './lib/status'


const App = () => {

    React.useEffect(ready, [])

    return <React.StrictMode>
        <AppRouter>
                <StatusProvider>
                    <HttpProvider config={httpConfig}>
                        <AuthProvider>
                            <Routing/>
                        </AuthProvider>
                    </HttpProvider>
                </StatusProvider>
        </AppRouter>
    </React.StrictMode>
}

export default App

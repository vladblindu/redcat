import Logo from '../assets/app-id/logo'
const appName = 'RedCat'
const appUrl = 'RedCatStudios.uk'
const appPhone = '+44 (0)2380 333 360'

const appCfg = {
    Logo: Logo,
    appName,
    appUrl,
    appPhone,
    webadmin: `Contact@${appUrl}`,
    accountTypes: [
        'talent',
        'producer',
        'broadcast',
        'collector'
    ]
}

export default appCfg

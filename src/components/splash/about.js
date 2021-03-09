/*
* These components will be rendered to string
*/

import React from 'react'
import Logo from '../../assets/app-id/logo'
import {JUMBO} from '../../globals/constants'


const About = () =>
    <div className="relative w-full bg-paper text-2xl text-primary text-center">
        <div className="inline-block mx-auto">
            <Logo size={JUMBO} />
        </div>
        <div className="w-full text-4xl font-bold text-center">
            RedCat Studios
        </div>
        <div className="text-2xl text-center">
            Description
        </div>
    </div>

export default About

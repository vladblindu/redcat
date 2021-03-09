import React from 'react'

import Peugeot from './../../../assets/app-id/peugeot.png'
import BBC from './../../../assets/app-id/bbc.png'
import Disney from './../../../assets/app-id/disney.png'
import Microsoft from './../../../assets/app-id/microsoft.png'
import HomeOffice from './../../../assets/app-id/home_office.png'
import WorldHealth from './../../../assets/app-id/who.png'

//de modificat css si facute mai mici imaginile
const Clients = () =>
    <div className='mt-lg'>
        <p className='font-bold text-orange-600 text-4xl'>OUR CLIENTS</p>
        <p className='font-bold text-lg mb-10'>Well... some of them:</p>
        <div className='flex justify-between content-evenly' >
            <img src={Peugeot} alt="Client_1"/>
            <img src={BBC} alt="Client_2"/>
            <img src={Disney} alt="Client_3"/>
        </div>
        <div className='flex justify-between content-evenly'>
            <img src={Microsoft} alt="Client_4"/>
            <img src={HomeOffice} alt="Client_5"/>
            <img src={WorldHealth} alt="Client_6"/>
        </div>
    </div>

export default Clients

import React from 'react'

import Peugeot from './../../../assets/app-id/peugeot.png'
import BBC from './../../../assets/app-id/bbc.png'
import Disney from './../../../assets/app-id/disney.png'
import Microsoft from './../../../assets/app-id/microsoft.png'
import HomeOffice from './../../../assets/app-id/home_office.png'
import WorldHealth from './../../../assets/app-id/who.png'
import {Link} from "react-router-dom";

const Clients = () =>
    <div className='mt-lg'>
        <p className='font-bold text-orange-600 text-4xl'>OUR CLIENTS</p>
        <p className='font-bold text-lg mb-10'>Well... some of them:</p>
        <div className='flex row justify-between content-evenly mt-lg'>
            <div className='col col-sm-4'>
                <img src={Peugeot} alt="Client_1" className='w-full h-full'/>
            </div>
            <div className='col col-sm-4'>
                <img src={BBC} alt="Client_2" className='w-full h-full'/>
            </div>
            <div className='col col-sm-4'>
                <img src={Disney} alt="Client_3" className='w-full h-full'/>
            </div>
        </div>
        <div className='flex justify-between content-evenly mt-10'>
            <div className='col col-sm-4 p-0'>
                <img src={Microsoft} alt="Client_4" className='w-full h-full p-0'/>
            </div>
            <div className='col col-sm-4 '>
                <img src={HomeOffice} alt="Client_5" className='w-full h-full p-0'/>
            </div>
            <div className='col col-sm-4 pr-0'>
                <img src={WorldHealth} alt="Client_6" className='w-full h-full p-0'/>
            </div>
        </div>
        <div className='mt-lg'>
            <p className='text-4xl font-weight-bold text-orange-500 mb-4'>TESTIMONIALS</p>
            <div className='row'>
                <div className='col-sm'>
                    <p className='font-bold text-justify'>
                        "Thank you so much for sending this [voiceover project] through. It’s lovely to work with a team
                        who is as reliable as you are.
                        I know when I open my mailbox in the morning, the files will be waiting –
                        no need for me to chase and delay other work while we wait for the audio.</p>

                    <p className='font-bold text-justify'>Thanks again and I’ll be in touch with further projects in the
                        New
                        Year.
                        […] Please pass on our thanks to Katie [English UK voice talent] as well – she’s a favourite
                        amongst
                        the team here!"
                    </p>
                    <br/>
                    <p className='font-bold text-justify'>
                        Nicole Mekisich, IT Training Consultant Kaleidoscope Training - Australia
                    </p>
                </div>
                <div className='col-sm'>
                    <p className='font-bold text-justify'>
                        "Hey Dan, I wanted to thank you and your team for the quick turn around on ergonomics,
                        you got us all 12 languages before the 20th and it was a huge help.
                        Thanks again! I’m hoping to have files ready for you a little earlier for our next month's
                        topic...
                        Cheers."
                    </p>
                    <br/>
                    <p className='font-bold text-justify'>
                        Kyle Morton, Senior Editor Multimedia Training Systems, Inc. - USA More testimonials...
                    </p>
                    <div className='flex justify-end'>
                        <div
                            className='flex bg-orange-500 rounded-full px-4 py-2 mt-48 hover:bg-red-600 hover:text-blue-100'>
                            <Link to={'./testimonials'} className='text-dark font-bold italic text-xs'>More
                                testimonials...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

export default Clients

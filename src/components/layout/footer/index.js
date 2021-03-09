import React from 'react'
import appCfg from '../../../config/app.config'


const Footer = () => {
    return <footer className='w-full p-8 text-sm md:text-lg overflow-hidden'>

        {/*<hr className="mx-auto w-4/5 lg:w-3/5 bg-ink thin-line mb-8"/>*/}
        <div className="flex justify-around items-center mx-16 md:mx-48 text-center mt-2">
            <div className="inline-block items-center align-middle">
                <a>Terms and Business</a>
                <a>Privacy Policy</a>
                <a>Contact</a>
                <a>Booking Process</a>
            </div>
            <div>
                <p>32 Queens Terrace, Southampton, SO14 3BQ, United Kingdom</p>
                <br/>
                <a href={`phone:${appCfg}`}>Phone: +44 (0)2380 333 360</a>&nbsp;
                <a href={`mailto:${appCfg.webadmin}`}>E-mail: Contact@RedCatStudios.uk</a>&nbsp;
            </div>
            <div>
                <div>
                    <a href='https://www.facebook.com/RedCatStudiosUK/'>Facebook</a>
                </div>
                <div>
                    <a href='https://twitter.com/RedCatStudiosUK'>Twitter</a>
                </div>
                <div>
                    <a href='https://www.instagram.com/red.cat.studios/'>Instagram</a>
                </div>
                <div>
                    <a href='https://www.linkedin.com/showcase/red-cat-studios/'>LinkedIN</a>
                </div>
                <div>
                    <a href='https://www.youtube.com/channel/UCdLyRwbRdwCTzo7lAb2dnFA'>Youtube</a>
                </div>
            </div>
        </div>
    </footer>
}
export default Footer

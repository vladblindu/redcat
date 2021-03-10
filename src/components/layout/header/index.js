import React, {useEffect, useState} from "react";


import {Link} from "react-router-dom";
import Close from "../../svg/close";
import MenuIcon from "../../svg/menu-icon";
import {Button} from "./button";
import Logo from './../../../assets/app-id/logo.png'

import './styles.css'

export default function Header() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img src={Logo} alt='Logo'/> RedCat Studios
                    </Link>
                    <div className='menu-icon text-white cursor-pointer mt-3' onClick={handleClick}>
                        {click ? <Close size="50px"/> : <MenuIcon size='50px' />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                ABOUT
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/clients'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                CLIENTS
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/catalogue'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                CATALOGUE
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/login'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                LOGIN
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}
                </div>
            </nav>
        </>
    );
}

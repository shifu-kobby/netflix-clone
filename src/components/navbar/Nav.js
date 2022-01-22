import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './Nav.css'; 

const Nav = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true)
            }
            else {
                setShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <img 
            className='nav_logo'
            src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
            alt='Netflix Logo'
            />

            <img 
            className='nav_avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='Netflix Logo'
            />
        </div>
    );
};

export default Nav;
import React from 'react';
import './menu.css';

const Menu = () => {

    const hideMenuFunc = () => {
        console.log(document.getElementById('Topbar').classList.length);
        document.getElementById('Topbar').classList.remove('active');
        document.getElementById('hamburger').classList.remove('hamburgerClicked');
        document.getElementById('Menu').style.right= '-300px';
        document.getElementById('Menu').style.background= 'white';
    }

    return (
        <div className='Menu' id='Menu'>
            <ul>
                <li>
                    <a href='#Intro' id='menuLink' onClick={hideMenuFunc}>Home</a>
                </li>
                <li>
                    <a href='#Portfolio' id='menuLink' onClick={hideMenuFunc}>Portfolio</a>
                </li>
                <li>
                    <a href='#Works' id='menuLink' onClick={hideMenuFunc}>Works</a>
                </li>
                <li>
                    <a href='#Testimonials' id='menuLink' onClick={hideMenuFunc}>Testimonials</a>
                </li>
                <li>
                    <a href='#Contact' id='menuLink' onClick={hideMenuFunc}>Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu

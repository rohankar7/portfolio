import React from 'react';
import {Person, Mail} from '@material-ui/icons';
import './topbar.css';

const Topbar = () => {

    const clickedFunc = () => {
        var topbar = document.getElementById('Topbar').classList;
        console.log();
        if(topbar.length===1){
            document.getElementById('Topbar').classList.add('active');
            document.getElementById('hamburger').classList.add('hamburgerClicked');
            document.getElementById('Menu').style.right= '0';
            document.getElementById('Menu').style.background = '#15023a';
        }
        else{
            document.getElementById('Topbar').classList.remove('active');
            document.getElementById('hamburger').classList.remove('hamburgerClicked');
            document.getElementById('Menu').style.right= '-300px';
            document.getElementById('Menu').style.background= 'white';
        }
    }
    return (
        <div className='Topbar' id='Topbar'>
            <div className='wrapper'>
                <div className="left">
                    <a href='#Intro' className='logo'>genius.</a>
                    <div className="itemContainer">
                        <Person className='icons'/>
                        <span>+91 7003213791</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icons'/>
                        <span>rohankar365@gmail.com</span>
                    </div>
                </div>
                <div className="right" onClick={clickedFunc}>
                    <div className="hamburger" id='hamburger'>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar

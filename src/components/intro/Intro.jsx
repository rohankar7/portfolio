import React, {useEffect, useRef} from 'react';
import { init } from 'ityped';
import './intro.css';

const Intro = () => {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {showCursor: true, backDelay: 1500, backSpeed: 60, strings: ['Developer', 'Designer', 'Content Creator']});
    },[]);

    return (
        <div className='Intro' id='Intro'>
            <div className="Intro_left">
                <div className="imageContainer">
                    <img src='assets/man.png' alt='' />
                </div>
            </div>
            <div className="Intro_right">
                <div className="Intro_wrapper">
                    <h2>Hello there! I'm </h2>
                    <h1>Rohan Kar</h1>
                    <h3>Student <span ref={textRef}></span></h3>
                </div>
                <a href = '#Portfolio' className='downArrow'>
                    <img src='assets/down.png' alt='down' />
                </a>
            </div>
        </div>
    )
}

export default Intro

import React, {useState} from 'react';
import './contact.css';

const Contact = () => {

    const [message, setMessage] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage(true);
    }

    return (
        <div className='Contact' id='Contact'>
            <div className="contact_left">
                <img src='assets/shake.svg' alt=''/>
            </div>
            <div className="contact_right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Email'/>
                    <textarea placeholder='Message'></textarea>
                    <button id='contactSubmitButton' type='submit'>Submit</button>
                    {
                        message && <span>Thanks! I'll reply ASAP :)</span>
                    }
                </form>
            </div>
        </div>
    )
}

export default Contact
import { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import './Hero.css';

function Hero() {
    const [text, setText] = useState('');

    return (
        <>
            <div className="hero">
                <h1 className="hero-title">Quick, cold and affordable drink? Zé delivers everything.</h1>
            <div className='input-container'>
                <FaLocationDot className='input-icon' />
                <input 
                type="text" 
                placeholder="Enter address to see price"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="input-box" 
                />
            </div>
            </div>
        </>
    )
}

export default Hero
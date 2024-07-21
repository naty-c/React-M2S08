import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        if (email === 'admin@admin.com' && password === 'admin123') {
            navigate('/home');
        } else {
            setMessage('Incorrect email and/or password');
        }
    }

    return (
        <>
            <div className="login-container">
                <div className="login-logo">
                    <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2%26fm%3Dpng&w=384&q=75" alt="Zé Delivery Logo" />
                </div>
                <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input 
                        id="email"
                        name="email"
                        placeholder="Email..." 
                        type="text"
                        autoComplete="on"
                        className="input-control" 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />     
                    <input 
                        id="password"
                        name="password"
                        placeholder="Password..." 
                        type="password"
                        autoComplete="on"
                        className="input-control" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} />    
                
                    {message && <p className="error-msg">{message}</p>}

                    <button className="login-btn" type="submit" >Login</button>
                </form>
                </div>
            </div>
        </>
    );
}

export default Login
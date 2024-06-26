import React from 'react';
import './loggingPOPUP.css';
import Button from '../Button/Button';

function LoginPopup({ onClose }) {
    return (
        <div className="login-popup">
            <div className="login-popup-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Login</h2>
                {/* Add your login form and logic here */}
                <form>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />

                    {<Button text={"Submit"} width='30px' />}
                    </form>
            </div>
        </div>
    );
}

export default LoginPopup;

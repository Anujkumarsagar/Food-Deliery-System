import React from 'react'
import './Header.css'
import { useState } from 'react';
import ReactiveButton from 'reactive-button';
import Button from '../Button/Button';
function Header({ image, heading, para }) {
    const [state, setState] = useState('idle');

    const onClickHandler = () => {
        setState('loading');

        // send an HTTP request
        setTimeout(() => {
            setState('success');
        }, 2000);
    };

    return (
        <div className='headerrapper'>

            <img className='image' src={image} alt="" />
            <div className="infoofheader">
                <div>

                    <h1>{heading}</h1>
                    <p>{para}</p>
                </div>

                <Button text='visit'/>

            </div>

        </div>
    )
}

export default Header
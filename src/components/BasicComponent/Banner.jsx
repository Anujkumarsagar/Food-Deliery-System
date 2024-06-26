import React from 'react';
import './Banner.css';

function Banner({ lower = false, upper = false }) {
    return (
        <div className='container-of-banner'>
            {lower && <div className="lower"></div>}
            {upper && <div className="upper"></div>}
        </div>
    );
}

export default Banner;

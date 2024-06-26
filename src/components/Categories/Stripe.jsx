import React, { useState } from 'react'
import './Stripe.css'
import Cards from '../Cards/Cards';
import Card from '../Cards/Card';

const Stripe = ({data}) => {
    const [clickedCategorie, setClickedCategorie] = useState(0);

    return (
        <div className='scrollable-strip'>
            {data.map((item, index) => (
                <div key={index} className={`scrollable ${index === clickedCategorie ? 'shadow outline ' : ''}`} onClick={() => setClickedCategorie(clickedCategorie != index ? index : -1)}>
                    <img src={item.src} alt={item.alt} />
                </div>
            ))}
            {/* if (clickedCategorie === index) {
                <Card title={index} image="hello" para="hello" price="hellow" restaurant="hellow" />
            } */}
            
        </div>
    );
};

export default Stripe;
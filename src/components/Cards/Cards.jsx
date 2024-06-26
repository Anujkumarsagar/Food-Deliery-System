import React, { useState , useEffect, useRef} from 'react'
import './Cards.css'
import Card from './Card'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";




function Cards({data}) {
    
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const cardWrapperRef = useRef(null);

    const goToPrevCard = () => {
        setCurrentCardIndex(prevIndex => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };
    
    const goToNextCard = () => {
        setCurrentCardIndex(prevIndex => (prevIndex + 1) % data.length);
    };

    useEffect(() => {
        const cardWidth = cardWrapperRef.current.clientWidth;
        cardWrapperRef.current.scrollTo({
            left: currentCardIndex/2 * cardWidth,
            behavior: 'smooth'
        });
    }, [currentCardIndex]);

    useEffect(() => {
        const interval = setInterval(goToNextCard, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='cards-of-card'>
            <div className="btn-for-slider">
                <div className="left" onClick={goToPrevCard}><FaArrowLeftLong /></div>
                <div className="right" onClick={goToNextCard}><FaArrowRightLong /></div>
            </div>
            <div className="card-wrapper" ref={cardWrapperRef} style={{ display: 'flex' }}>
                {data.map((item, index) => (
                    <Card key={index} title={item.title} image={item.image} para={item.para} price={item.price} restaurant={item.restaurant} />
                ))}

            </div>
        </div>
    );
}

export default Cards;
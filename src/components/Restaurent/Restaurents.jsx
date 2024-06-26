import React from 'react'
import './Restaurent.css'
import Restaurent from './Restaurent'
const data = [
    {
        title: "Take It Cheesy",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
        para: "Indulge in a haven of melted goodness ation for all things cheesy."
    },
    {
        title: "The Garden of Eat’n",
        image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
        para: "Step into The Garden of Eat’n and immersed  hing experience for both body and soul."
    },
    {
        title: "Wingman’s Pub",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
        para: "Elevate your pub experience at Wingman’s   ingman’s Pub be your ultimate wing destination."
    },
    {
        title: "Kale Me Crazy",
        image: "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
        para: "Fuel your body with wholesome goodness at ant salads to..."
    },
    {
        title: "Wine O’Clock Tapas Bar",
        image: "https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
        para: "Transport yourself to the charming streets of ine O’Clock Tapas Bar is the perfect destination for a memorable dining experience."
    },
    {
        title: "Nacho Daddy",
        image: "https://images.unsplash.com/photo-1613946069412-38f7f1ff0b65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
        para: "Get ready to fiesta at Nacho Daddy, where every  ultimate destination for a fiesta of flavor."
    },
    {
        title: "Lettuce Eat Bistro",
        image: "https://images.unsplash.com/photo-1560053608-13721e0d69e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
        para: "Embrace a fresh approach to dining at Lettuce Eattust aurant, but a celebration of nature's bounty."
    },
    {
        title: "Sconehenge Bakery & Café",
        image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
        para: "Journey to the heart of England at Sconehenge Bakeryat and bustle of everyday life."
    },
    {
        title: "Haute Dog Diner",
        image: "https://plus.unsplash.com/premium_photo-1670984939096-f3cfd48c7408?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
        para: "Elevate your love for hot dogs at Haute Dog Diner, ner, but a destination for hot dog enthusiasts."
    },
    {
        title: "Lord of the Fries",
        image: "https://images.unsplash.com/photo-1543007631-283050bb3e8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
        para: "Satisfy your cravings for fries at Lord of the Fries,y pleasure."
    },
    // Add descriptions for the remaining restaurants here...
  ];
  
function Restaurents() {
  return (
    <div>
        <Restaurent text='Royal Restaurents' data={data} />
    </div>
  )
}

export default Restaurents
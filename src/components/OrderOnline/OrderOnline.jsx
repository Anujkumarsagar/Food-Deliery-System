import React from 'react'
import Banner from '../BasicComponent/Banner'
import './OrderOnline.css'
import Restaurent from '../Restaurent/Restaurent'
import viewPage from '../viewPage/viewPage'
import Cards from '../Cards/Cards'
import Categroies from '../Categories/Categroies'

const dataofrest = [
    {
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
        title: "Rolls",
        para: "Experience the taste of Kolkata with our flavorful and filling rolls!",
        price: "$10",
        restaurant: "Kolkata Roll House",
    },
    {
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
        title: "Ice Creams",
        para: "Beat the heat with our wide range of delicious ice cream flavors!",
        price: "$5",
        restaurant: "Chill 'n' Joy Ice Cream Parlor",
    },
    {
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
        title: "Chinese Cuisine",
        para: "Satisfy your cravings with our mouthwatering Chinese dishes!",
        price: "$15",
        restaurant: "Dragon Palace",
    },
    {
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
        title: "Noodles",
        para: "Enjoy the perfect blend of flavors and textures with our delicious noodle dishes!",
        price: "$12",
        restaurant: "Noodle Junction",
    },
    {
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png",
        title: "South Indian Cuisine",
        para: "Treat yourself to the authentic taste of South Indian cuisine with our flavorful dishes!",
        price: "$20",
        restaurant: "Southern Spice Kitchen",
    },
    // Add similar entries for other items...
    {
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D",
        title: "South Indian Cuisine",
        para: "Treat yourself to the authentic taste of South Indian cuisine with our flavorful dishes!",
    },
    {
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D",
        title: "South Indian Cuisine",
        para: "Treat yourself to the authentic taste of South Indian cuisine with our flavorful dishes!",
    },
    {
        image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D",
        title: "South Indian Cuisine",
        para: "Treat yourself to the authentic taste of South Indian cuisine with our flavorful dishes!",
    },
    {
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
        title: "South Indian Cuisine",
        para: "Treat yourself to the authentic taste of South Indian cuisine with our flavorful dishes!",
    },
    {
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?h=100&w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        title: "South Indian Cuisine",
        para: "Treat yourself to the authentic taste of South Indian cuisine with our flavorful dishes!",
    },
    {
        image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?h=100&w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        title: "South Indian Cuisine",
        para: "Treat yourself to the authentic taste of South Indian cuisine with our flavorful dishes!",
    },
    {
        image: "hhttps://images.unsplash.com/photo-1545696563-af8f6ec2295a?h=100&w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        title: "South Indian Cuisine",
        para: "Treat yourself to the authentic taste of South Indian cuisine with our flavorful dishes!",
    },
    {
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
        title: "South Indian Cuisine",
        para: "Treat yourself to the authentic taste of South Indian cuisine with our flavorful dishes!",
    },
    {
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?h=100&w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        title: "South Indian Cuisine",
        para: "Treat yourself to the authentic taste of South Indian cuisine with our flavorful dishes!",
    },
    {
        image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?h=100&w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        title: "South Indian Cuisine",
        para: "Treat yourself to the authentic taste of South Indian cuisine with our flavorful dishes!",
    },
    {
        image: "hhttps://images.unsplash.com/photo-1545696563-af8f6ec2295a?h=100&w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        title: "South Indian Cuisine",
        para: "Treat yourself to the authentic taste of South Indian cuisine with our flavorful dishes!",
    },
];






function OrderOnline() {
    return (
        <div className='container-of-orderonline'>
            <Restaurent text='Hunger Section' data={dataofrest} />
            <Categroies />
            {/* <Cards text='Hunger Section' data={dataofrest} /> */}
            <Banner upper='true'/>
            <viewPage />

        </div>
    )
}

export default OrderOnline
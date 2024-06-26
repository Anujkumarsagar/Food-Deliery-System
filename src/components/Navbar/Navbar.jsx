import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaHamburger, FaShoppingCart } from "react-icons/fa";
import './Navbar.css';
import Button from '../Button/Button';
import LoginPopup from '../loggingPOPUP/loggingPOPUP'; // Adjust path as needed

function Navbar() {
    const location = useLocation(); // React Router's useLocation hook
    const [menu, setMenu] = useState("home");
    const [showLoginPopup, setShowLoginPopup] = useState(false);

    useEffect(() => {
        // Setting the initial menu state based on the current pathname
        switch (location.pathname) {
            case "/Order":
                setMenu("order");
                break;
            case "/Cart":
                setMenu("cart");
                break;
            default:
                setMenu("home");
                break;
        }
    }, [location.pathname]); // useEffect depends on location.pathname

    const handleMenuChange = (menuItem) => {
        setMenu(menuItem);
    };

    const handleSearchClear = () => {
        document.getElementById("search").value = ""; // Clear the input field
    };

    const toggleLoginPopup = () => {
        setShowLoginPopup(!showLoginPopup);
    };

    const buttonStyles = {
        boxShadow: "5px 9px 10px -1px grey, inset 7px 8px 11px -1px #8080802e"
    };

    return (
        <div className='navbar'>
            <img
                src='https://png.pngtree.com/png-clipart/20231014/original/pngtree-savor-the-perfect-burger-generative-with-ai-png-image_13298444.png'
                width="6%"
                alt="Logo"
                onClick={() => handleMenuChange("home")}
            />
            <ul>
                <li>
                    <Link
                        to="/"
                        className={menu === "home" ? "active" : ""}
                        onClick={() => handleMenuChange("home")}
                    >
                        <FaHome /> Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/Order"
                        className={menu === "order" ? "active" : ""}
                        onClick={() => handleMenuChange("order")}
                    >
                        <FaHamburger /> Order
                    </Link>
                </li>
                <li>
                    <Link
                        to="/Cart"
                        className={menu === "cart" ? "active" : ""}
                        onClick={() => handleMenuChange("cart")}
                    >
                        <FaShoppingCart /> Cart
                    </Link>
                </li>
                <li>
                    <span><Link onClick={toggleLoginPopup}>Login</Link></span> /
                    <span><Link to="/Register">Register</Link></span>
                </li>
            </ul>
            <ul>
                <Button
                    style={buttonStyles}
                    onClick={handleSearchClear}
                    text='Clear'
                    width='64px'
                />
                <input
                    type="text"
                    placeholder='Search Your Dish😋'
                    name="Search"
                    id="search"
                />
            </ul>

            {showLoginPopup && <LoginPopup onClose={toggleLoginPopup} />}
        </div>
    );
}

export default Navbar;

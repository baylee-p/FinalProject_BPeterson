import React from "react";
import { Link } from "react-router-dom";
import { faMagnifyingGlass, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    return (
        <nav className="bg-custom-purple-dark sticky top-0 shadow-md">
            <div className="max-w-6xl mx-auto px-4 lg:px-8 flex justify-between items-center py-2 md:py-4">
                <div className="text-left">
                    <Link to="/">
                        <h2 className="font-bold text-gray-800 text-lg md:text-2xl">Ecomm</h2>
                    </Link>
                </div>

                <ul className="flex space-x-4 md:space-x-6 text-custom-mauve font-semibold text-sm md:text-base">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/sale">Sale</Link></li>
                </ul>

                <div className="flex items-center space-x-4">
                    <Link to="/search" className="text-white hover:text-gray-800">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Link>
                    <Link to="/profile" className="text-white hover:text-gray-800">
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                    <Link to="/cart" className="text-white hover:text-gray-800">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

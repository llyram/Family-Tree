import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-600 p-4 top-0 w-full z-10">
            <ul className="flex space-x-8 justify-center items-center">
                <li className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faHome} className="text-white" />
                    <a href="/" className="text-white hover:text-gray-200">Home</a>
                </li>
                <li className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faInfoCircle} className="text-white" />
                    <a href="/about" className="text-white hover:text-gray-200">About</a>
                </li>
                <li className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                    <a href="/contact" className="text-white hover:text-gray-200">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
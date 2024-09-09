import React from 'react';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

const SocialIcons = () => {
    return (
        <ul className="flex justify-center space-x-4">
            <li>
                <a href="https://x.com/agrowgrad" target="_blank" className="text-gray-700 hover:text-blue-500">
                    <AiFillTwitterCircle className="w-8 h-8 cursor-pointer" />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/agrow-grad-66b89b315/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/agrowgrad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-500">
                    <AiFillInstagram className="w-8 h-8 cursor-pointer" />
                </a>
            </li>
        </ul>
    );
};

export default SocialIcons;

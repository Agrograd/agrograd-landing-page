import React, { useState } from 'react';
import { FaShare, FaFacebook, FaTwitter, FaLinkedin, FaLink } from 'react-icons/fa';

const ShareButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const currentUrl = window.location.href;

    const shareOnFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank');
    };

    const shareOnTwitter = () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`, '_blank');
    };

    const shareOnLinkedIn = () => {
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}`, '_blank');
    };

    const copyLink = () => {
        navigator.clipboard.writeText(currentUrl);
        alert('Link copied to clipboard!');
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-500 text-base hover:bg-blue-600 text-white py-2 px-4 rounded inline-flex mx-2 justify-center "
            >
                <FaShare className="mr-1 mt-1" />
                Share
            </button>
            {isOpen && (
                <div className=" w-auto absolute top-0 left-1 rounded-md shadow-lg bg-white ring-9 ring-black ring-opacity-5">
                    <div className="py-1 flex items-center justify-center" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <button
                            onClick={shareOnFacebook}
                            className="flex items-center p-1 text-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full"
                            role="menuitem"
                        >
                            <FaFacebook className="mr-1 text-blue-600" />
                        </button>
                        <button
                            onClick={shareOnTwitter}
                            className="flex items-center p-1 text-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full"
                            role="menuitem"
                        >
                            <FaTwitter className="mr-1 text-blue-400" />
                        </button>
                        <button
                            onClick={shareOnLinkedIn}
                            className="flex items-center p-1 text-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full"
                            role="menuitem"
                        >
                            <FaLinkedin className="mr-1 text-blue-700" />
                        </button>
                        <button
                            onClick={copyLink}
                            className="flex items-center p-1 py-2 text-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full"
                            role="menuitem"
                        >
                            <FaLink className="mr-1 text-gray-500" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShareButton;
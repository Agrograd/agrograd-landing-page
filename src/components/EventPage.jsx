import React, { useState } from 'react';
import ShareButton from './ShareButton';

const ShimmerEffect = () => (
    <div className="animate-pulse bg-gray-300 h-full w-full rounded-lg"></div>
);

const LazyLoadImage = ({ src, alt, className }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={className}>
            {!loaded && <ShimmerEffect />}
            <img
                src={src}
                alt={alt}
                className={`transition-opacity duration-500 ease-in-out ${loaded ? "opacity-100" : "opacity-0"
                    } ${className}`}
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
};

const EventCard = ({ title, date, description, image }) => (
    <div className="bg-yellow-200 cursor-pointer hover:bg-yellow-100 p-1 w-auto rounded-lg shadow-md overflow-hidden">
        <LazyLoadImage
            src={image}
            alt={title}
            className="w-full rounded-lg object-fill"
        />
        <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-sm font-bold text-gray-600 mb-2">{date}</p>
            <p className="text-gray-700 mb-2">{description}</p>
            <div className='flex justify-center'>
                <a href="https://chat.whatsapp.com/Lcc5yEFSAcRAQjcMtwcU5X">
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
                        Join Now
                    </button>
                </a>
                <ShareButton />
            </div>
        </div>
    </div>
);

const EventPage = () => {
    const events = [
       
        
    {
        title: "Growing plants from seeds",
            date: "Sep 14, 2024 | 8:00 PM IST",
                description: "Learn the everything about growing plants from seeds.",
                    image: "https://i.ibb.co/PGz4wwt/Whats-App-Image-2024-09-06-at-12-58-30-PM.jpg"
    }


        
        // Add more events here
    ];

    return (
        <div className="h-screen">
            <header className="text-green-500 mt-7 px-4">
                <div className="container mx-auto">
                    <h1 className="text-5xl font-bold mb-1">Upcoming Events</h1>
                    <p className="text-2xl">Join us in our upcoming webinars, workshops, and online events.</p>
                </div>
            </header>

            <main className="container mx-auto py-8 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {events.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default EventPage;

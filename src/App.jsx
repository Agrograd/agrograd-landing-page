import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoogleDialog from "./GoogleDialog";
import BlogPost from "./components/BlogPost";
import BlogSection from "./components/BlogSection";
import EventPage from "./components/EventPage";

const ShimmerEffect = () => (
  <div className="animate-pulse bg-gray-500 h-full w-full rounded-xl"></div>
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

const App = () => {
  const [showDialog, setShowDialog] = useState(false);
  const handleClick = () => {
    setShowDialog(true);
  };

  return (
    <div className="">
      {showDialog && <GoogleDialog dialogState={setShowDialog} />}
      <div className="w-full h-full container mx-auto px-1">
        <header className="flex w-full justify-between items-center py-1 mb-2">
          <div className="flex items-center">
            <img
              src="https://i.ibb.co/nbqX10y/3.png"
              alt="AgroGrad"
              className="h-14"
            />
          </div>
          <button
            onClick={() => handleClick()}
            className="bg-yellow-300 hover:scale-105 text-xl text-black rounded-lg mx-2 py-1 px-2 font-semibold"
          >
            Join Us
          </button>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <main className="w-screen xl:w-full text-center xl:mx-auto pt-2 xl:py-2">
                <h1 className="text-4xl xl:text-6xl md:text-6xl font-bold text-green-500 mb-3 xl:mb-4">
                  Welcome to agrowgrad
                </h1>
                <p className="w-10/12 font-medium text-lg lg:text-2xl md:text-2xl xl:text-lg xl:mb-4 mb-2 mx-auto xl:w-7/12">
                  Get into the world of agriculture with agrowgrad! We offer free
                  Webinars and a supportive Community for everyone, whether you're
                  pursuing farming as a Hobby or a Career, we have something Special
                  for everyone. Join us Today to cultivate your Passion and
                  expand your Knowledge.
                </p>
                <button
                  onClick={() => handleClick()}
                  className="text-xl bg-green-500 hover:scale-105 text-white xl:text-xl xl:px-6 xl:py-3 md:text-2xl rounded-lg p-3 mb-3 lg:text-3xl font-semibold lg:my-0"
                >
                  Join Our WhatsApp Community
                </button>
                <div className="xl:flex lg:flex justify-center xl:space-x-2 mt-3 xl:mt-6">
                  <div className="text-center my-3 w-full">
                    <LazyLoadImage
                      src="https://i.ibb.co/HXqQCRc/Whats-App-Image-2024-06-24-at-15-43-30-293eb15c.jpg"
                      alt="Connect"
                      className="lg:w-8/12 mx-auto w-32 md:w-44 rounded-xl lg:rounded-full xl:w-44 xl:rounded-full xl:mb-4 xl:ml-30"
                    />
                    <h3 className="font-semibold md:text-2xl text-lg text-green-600 lg:text-2xl xl:text-xl">
                      Connect
                    </h3>
                    <p className="text-base md:text-xl xl:text-base font-medium">
                      Network with fellow farmers and experts.
                    </p>
                  </div>
                  <div className="text-center my-2 w-full">
                    <LazyLoadImage
                      src="https://i.ibb.co/yXy6V7N/Whats-App-Image-2024-06-24-at-15-36-59-10676b8a.jpg"
                      alt="Learn"
                      className="lg:rounded-full w-32 md:w-44 rounded-xl mx-auto lg:w-8/12 xl:w-44 xl:rounded-full xl:mb-4 xl:ml-30"
                    />
                    <h3 className="font-semibold md:text-2xl text-lg xl:text-xl lg:text-2xl text-green-600">
                      Learn
                    </h3>
                    <p className="text-base md:text-xl lg:text-base xl:text-base font-medium">
                      Gain helpful insights from industry experts and experienced
                      farmers.
                    </p>
                  </div>
                  <div className="text-center my-1 w-full">
                    <LazyLoadImage
                      src="https://i.ibb.co/Jv1PBLL/Whats-App-Image-2024-06-24-at-15-17-30-33b2a7f6.jpg"
                      alt="Grow"
                      className="lg:rounded-full w-32 mx-auto md:w-44 rounded-xl lg:w-8/12 xl:w-44 lg:h-30 lg:w-30 xl:rounded-full xl:mb-4 xl:ml-30"
                    />
                    <h3 className="font-semibold md:text-2xl text-lg text-green-600 lg:text-xl xl:text:xl">
                      Grow
                    </h3>
                    <p className="text-base md:text-xl lg:text-base xl:text-base font-medium">
                      Expand your agricultural knowledge.
                    </p>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-green-600 md:mt-4 mb-2 xl:mt-2">
                  Farming needs you my friend. Yes, you!
                </h2>
                <BlogSection />
                <EventPage joinButton={handleClick} />
              </main>
            }
          />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

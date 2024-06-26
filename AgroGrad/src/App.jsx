import React from 'react'

const App = () => {
  return (
    <div className='' >
      <div className=" w-full h-full container mx-auto px-1">
        <header className=" flex w-full justify-between items-center py-1">
          <div className="flex items-center">
            <img src="https://i.ibb.co/nbqX10y/3.png" alt="AgroGrad" className="h-14" />
          </div>
            <button className="bg-yellow-300 hover:scale-105 text-xl text-black rounded-lg mx-2 py-1 px-2 font-semibold">Join Us</button>
        </header> 

        <main className=" w-screen xl:w-full text-center xl:mx-auto pt-2 xl:py-12">
          <h1 className=" text-3xl xl:text-4xl font-bold text-green-500 mb-4">Welcome to AgrowGrad</h1>
          <p className=" w-7/12 font-normal text-sm md:text-lg lg:text-lg xl:text-lg xl:mb-8 mb-2 mx-auto ">Join our community and be a part of the agricultural revolution. Stay updated with the latest trends, connect with like-minded individuals, and grow your knowledge with AgrowGrad.</p>
          <button className="bg-green-500 hover:scale-105 text-white xl:text-xl xl:px-6 xl:py-3 rounded-lg   py-1 px-1" >Join Our WhatsApp Community</button>

          <div className="flex justify-center space-x-8 mt-3 xl:mt-16">
            <div className="text-center">
              <img src="https://i.ibb.co/HXqQCRc/Whats-App-Image-2024-06-24-at-15-43-30-293eb15c.jpg" alt="Connect" className="xl:w-36 xl:h-36 rounded-full mb-4 xl:ml-16" />
              <h3 className="font-semibold font text-green-600 xl:text-lg">Connect</h3>
              <p className='text-sm md:text-base lg:text-base xl:text-base '>Network with fellow farmers and experts.</p>
            </div>
            <div className="text-center">
              <img src="https://i.ibb.co/yXy6V7N/Whats-App-Image-2024-06-24-at-15-36-59-10676b8a.jpg" alt="Learn" className="xl:w-36 xl:h-36 rounded-full mb-4 xl:ml-12" />
              <h3 className="font-semibold xl:text-lg text-green-600">Learn</h3>
              <p className='text-sm md:text-base lg:text-base xl:text-base ' >Gain insights from industry leaders.</p>
            </div>
            <div className="text-center ">
              <img src="https://i.ibb.co/Jv1PBLL/Whats-App-Image-2024-06-24-at-15-17-30-33b2a7f6.jpg" alt="Grow" className=" inset-x-auto xl:w-36 xl:h-36 lg:h-30 lg:w-30 rounded-full mb-4 xl:ml-12" />
              <h3 className="font-semibold text-green-600 xl:text:lg">Grow</h3>
              <p className='text-sm md:text-base lg:text-base xl:text-base ' >Expand your agricultural knowledge.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-green-600 mt-16 mb-8">Join Our Community</h2>
          {/* Add community join section here */}
        </main>
      </div>
    </div>
  )
}

export default App
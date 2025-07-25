import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {

    return (

        <div
            className="flex flex-col md:flex-row items-center md:items-start justify-between 
             px-6 md:px-14 pt-12 pb-10 bg-gradient-to-r from-green-600 to-lime-400 
             max-w-6xl mx-4 md:mx-auto rounded-2xl overflow-hidden shadow-md"
        >

            {/* Left Content */}

            <div className="text-white max-w-xl">

                <h2 className="text-3xl md:text-4xl font-bold leading-snug">

                    Turn Your Idle Vehicle Into Daily Income.

                </h2>

                <p className="mt-3 text-white/90 text-sm md:text-base">

                    List your car or equipment on Rentzee in just a few clicks.
                    Reach renters near you and earn effortlessly.

                </p>

                <p className="mt-2 text-white/80 text-sm">

                    Hassle-free setup, instant visibility, and secure transactions await.
                    Start now and drive value from your assets.

                </p>

                <button

                    className="mt-5 px-6 py-2.5 bg-white hover:bg-green-50 text-green-800 
                 rounded-full text-sm font-medium transition-all shadow-sm"

                >

                    List Your Product

                </button>

            </div>

            {/* Right Image */}

            <img
                src={assets.banner_car_image}
                alt="Rent Car"
                className="mt-10 md:mt-0 max-h-48 object-contain"
            />

        </div>

    )

}

export default Banner
import React from 'react'

const NewsLetter = () => {

    return (

        <div className="flex flex-col items-center justify-center text-center space-y-4 max-md:px-4 my-20 mb-40">

            {/* Title with Gradient */}

            <h1
                className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r 
               from-pink-500 via-yellow-500 to-indigo-500 
               text-transparent bg-clip-text"
            >

                Never Miss a Deal!

            </h1>

            {/* Subtitle */}

            <p className="md:text-lg text-sm text-slate-600/80 pb-6 max-w-xl">

                Subscribe to get the latest offers, new arrivals, and exclusive discounts.

            </p>

            {/* Form */}

            <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12 
            shadow-md rounded-md overflow-hidden">

                <input
                    className="h-full w-full px-4 text-sm text-slate-600 border border-gray-300 border-r-0 
                                focus:outline-none focus:ring-2 focus:ring-green-500"
                    type="email"
                    placeholder="Enter your email address"
                    required
                />

                <button
                    type="submit"
                    className="h-full px-6 md:px-10 text-sm font-medium bg-green-600 text-white 
                     hover:bg-green-700 transition-all"
                >

                    Subscribe

                </button>

            </form>

        </div>

    )

}


export default NewsLetter
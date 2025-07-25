import React from 'react'

const Loader = () => {

    return (

        <div className="flex flex-col items-center justify-center h-[80vh] bg-white">

            <div className="relative w-16 h-16">

                {/* Spinning ring */}

                <div
                    className="absolute inset-0 rounded-full border-4 border-t-green-500 border-b-green-100
                     border-l-green-300 border-r-green-200 animate-spin shadow-lg"
                >

                </div>

                {/* Center "R" or logo */}

                <div className="absolute inset-0 flex items-center justify-center">

                    <span className="text-3xl font-extrabold 
                    bg-gradient-to-r from-pink-500 via-yellow-400 to-indigo-500 
                    text-transparent bg-clip-text">R</span>

                </div>

            </div>

            <p className="mt-4 text-sm text-slate-500 animate-pulse tracking-wide">

                Renting made smooth...

            </p>

        </div>

    );

};

export default Loader;

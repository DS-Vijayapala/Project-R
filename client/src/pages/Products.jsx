import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, dummyCarData } from '../assets/assets'
import ProductCard from '../components/ProductCard'


const Products = () => {

    const [input, setInput] = useState('')

    return (

        <div className='flex flex-col'>

            <div className="flex flex-col items-center py-20 bg-light max-md:px-4">

                {/* Title Section */}

                <Title title={"Available Products"} subtitle={"Find your next ride with ease!"} />

                {/* Search and Filter Bar */}

                <div className='flex items-center bg-white px-4 mt-6 max-w-140 w-full 
                h-12 rounded-full shadow-md'>

                    <img
                        src={assets.search_icon}
                        alt="search_icon"
                        className='w-5 h-5 mr-3 opacity-75' />

                    <input
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        type="text"
                        placeholder='Search for cars, motorcycles, and more...'
                        className='w-full h-full text-gray-700 placeholder-gray-400 
                        rounded-full  outline-none px-4' />

                    <img
                        src={assets.filter_icon}
                        alt="filter_icon"
                        className='w-5 h-5 ml-3 opacity-75 cursor-pointer' />

                </div>

            </div>

            {/* Product Listing Section */}

            <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10">

                <p className="text-gray-600 xl:px-20 max-w-7xl mx-auto mb-5 ">Showing {dummyCarData.length} Products</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 
                xl:px-20 max-w-7xl mx-auto">

                    {dummyCarData.map((product, index) => {


                        return (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-md 
                            hover:shadow-lg transition-shadow duration-300">

                                <ProductCard product={product} />

                            </div>

                        );

                    })}

                </div>

            </div>

        </div>

    )

}


export default Products
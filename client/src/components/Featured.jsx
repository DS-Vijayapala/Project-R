import React from 'react'
import Title from './Title'
import { assets, dummyCarData } from '../assets/assets'
import ProductCard from './ProductCard'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const Featured = () => {

    const navigate = useNavigate()

    const { products } = useAppContext()

    return (

        <div className="flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32">

            {/* Section Title */}

            <Title
                title="Featured Products"
                subtitle="Discover the top picks available for rent now"
                align="center"
            />

            {/* Product Grid */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full">

                {products.slice(0, 3).map((product) => (

                    <div
                        key={product._id}
                        className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                    >

                        <ProductCard product={product} />

                    </div>

                ))}

            </div>

            {/* CTA Button */}

            <button
                onClick={() => {

                    navigate('/products');
                    scrollTo(0, 0);
                }}

                className="mt-16 flex items-center justify-center gap-2 px-6 py-3
               bg-green-600 hover:bg-green-700 text-white font-medium
               rounded-full transition duration-200 shadow-sm cursor-pointer"
            >

                Explore All Products

                <img src={assets.arrow_icon} alt="arrow" className="w-4 h-4" />

            </button>

        </div>

    )

}


export default Featured
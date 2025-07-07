import React from 'react'
import { assets } from '../assets/assets'

const ProductCard = ({ product }) => {

    const currency = import.meta.env.VITE_CURRENCY || '$';

    return (

        <div
            className="group rounded-2xl overflow-hidden bg-white  hover:shadow-lg 
             hover:-translate-y-1 transition-all duration-500 cursor-pointer"
        >

            {/* Image with tag & price overlay */}

            <div className="relative h-52 overflow-hidden">

                <img
                    src={product.image}
                    alt="car"
                    className="w-full h-full object-cover 
                    transition-transform duration-500 group-hover:scale-105"
                />

                {product.isAvaliable && (

                    <p className="absolute top-3 left-3 bg-green-600 text-white 
                    text-xs px-3 py-1 rounded-full shadow">

                        Available Now

                    </p>

                )}

                <div className="absolute bottom-3 right-3 bg-green-700/90 
                text-white text-sm px-3 py-1.5 rounded-lg shadow">

                    <span className="font-semibold">

                        {currency}

                        {product.pricePerDay}

                    </span>

                    <span className="text-xs text-white/80 ml-1">/day</span>

                </div>

            </div>

            {/* Info */}

            <div className="p-4 sm:p-5">

                <div className="flex justify-between items-start mb-2">

                    <h3 className="text-lg font-semibold text-green-800">

                        {product.brand} {product.model}

                    </h3>

                    <p className="text-sm text-slate-500">

                        {product.category}, {product.year}

                    </p>

                </div>

                {/* Features */}

                <div className="mt-4 grid grid-cols-2 gap-y-3 text-sm text-slate-600">

                    <div className="flex items-center gap-2">

                        <img src={assets.users_icon} alt="capacity" className="h-4" />

                        <span>{product.capacity} Capacity</span>

                    </div>

                    <div className="flex items-center gap-2">

                        <img src={assets.fuel_icon} alt="fuel" className="h-4" />

                        <span>{product.fuel_type}</span>

                    </div>

                    <div className="flex items-center gap-2">

                        <img src={assets.car_icon} alt="transmission" className="h-4" />

                        <span>{product.transmission}</span>

                    </div>

                    <div className="flex items-center gap-2">

                        <img src={assets.location_icon} alt="location" className="h-4" />

                        <span>{product.location}</span>

                    </div>

                </div>

            </div>

        </div>

    )

}


export default ProductCard
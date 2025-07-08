import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyCarData } from '../assets/assets'
import Loader from '../components/Loader'

const ProductDetails = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const [Product, setProduct] = useState(null)

    const currency = import.meta.env.VITE_CURRENCY

    const handleSubmit = async (e) => {

        e.preventDefault();

    }

    useEffect(() => {

        setProduct(dummyCarData.find(Product => Product._id === id))

    }, [id])

    return Product ? (

        <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">

            {/* Back Button */}

            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 mb-6 text-green-700
                 hover:text-green-900 transition-all cursor-pointer"
            >

                <img
                    src={assets.arrow_icon}
                    alt="arrow_icon"
                    className="rotate-180 opacity-65 w-4 h-4" />

                Back to All Products

            </button>

            {/* Grid Layout */}

            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">

                {/* Left Column: Product Details */}

                <div className="lg:col-span-2">

                    <img
                        src={Product.image}
                        alt="image"
                        className="w-full h-auto md:max-h-100 object-cover rounded-2xl mb-6 shadow-md"
                    />

                    <div className="space-y-8">

                        {/* Title & Basic Info */}

                        <div>

                            <h1 className="text-4xl font-bold text-slate-800">

                                {Product.brand} {Product.model}

                            </h1>

                            <p className="text-green-600 text-lg mt-1">

                                {Product.category} • {Product.year}

                            </p>

                        </div>

                        <hr className="border border-gray-200" />

                        {/* Quick Stats */}

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

                            {[

                                { icon: assets.users_icon, text: `${Product.seating_capacity} Seats` },
                                { icon: assets.fuel_icon, text: Product.fuel_type },
                                { icon: assets.car_icon, text: Product.transmission },
                                { icon: assets.location_icon, text: Product.location },

                            ].map(({ icon, text }) => (

                                <div
                                    key={text}
                                    className="flex flex-col items-center 
                                bg-green-50 text-green-900 py-4 px-3 rounded-lg shadow-sm">

                                    <img src={icon} alt="icon" className="h-5 mb-1" />

                                    <span className="text-sm">{text}</span>

                                </div>

                            ))}

                        </div>

                        {/* Description */}

                        <div>

                            <h2 className="text-xl font-semibold text-slate-800 mb-2">Description</h2>

                            <p className="text-gray-600 leading-relaxed">{Product.description}</p>

                        </div>

                        {/* Features */}

                        <div>

                            <h2 className="text-xl font-semibold text-slate-800 mb-2">Features</h2>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">

                                {[
                                    "360 Camera", "Bluetooth", "GPS", "Heated Seats", "Rear View Mirror"
                                ].map((feature) => (

                                    <li key={feature} className="flex items-center">

                                        <img src={assets.check_icon} alt="check_icon" className="h-4 mr-2" />

                                        {feature}

                                    </li>

                                ))}

                            </ul>

                        </div>

                    </div>

                </div>

                {/* Right Column: Booking Form */}

                <form
                    onSubmit={handleSubmit}
                    className="shadow-lg h-max sticky top-20 rounded-2xl p-6 space-y-6
                     bg-white border border-green-100"
                >

                    <div className="flex justify-between items-end text-slate-800">

                        <p className="text-3xl font-bold">{currency}{Product.pricePerDay}</p>

                        <span className="text-sm text-green-800">per day</span>

                    </div>

                    <hr className="border-gray-200" />

                    <div className="flex flex-col gap-2">

                        <label htmlFor="pickup-date"
                            className="text-sm font-medium text-slate-700">Pickup Date</label>

                        <input
                            id="pickup-date"
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            className="border border-gray-300 px-3 py-2 rounded-md text-sm 
                            focus:outline-none focus:ring-1 focus:ring-green-400"
                            required
                        />

                    </div>

                    <div className="flex flex-col gap-2">

                        <label htmlFor="return-date"
                            className="text-sm font-medium text-slate-700">Return Date</label>

                        <input
                            id="return-date"
                            type="date"
                            className="border border-gray-300 px-3 py-2
                             rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-400"
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700
                         text-white text-sm font-medium py-3 rounded-lg transition-all cursor-pointer"
                    >

                        Book Now

                    </button>

                    <p className="text-center text-sm text-gray-500">No credit card required to reserve.</p>

                </form>

            </div>

        </div>

    ) : <Loader />
}

export default ProductDetails
import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'

const AddProduct = () => {

    const currency = import.meta.env.VITE_CURRENCY

    const [image, setImage] = useState(null)

    const [card, setCard] = useState({

        brand: '',
        model: '',
        year: 0,
        pricePerDay: 0,
        category: '',
        transmission: '',
        fuel_type: '',
        seating_capacity: 0,
        location: '',
        description: ''

    })

    const onSubmitHandler = async (e) => {

        e.preventDefault()


    }

    return (

        <div className='px-4 py-10 md:px-10 flex-1'>

            <Title
                title='Add New Product'
                subTitle='Provide accurate details to attract more renters'
                align='left' />

            <form
                onSubmit={onSubmitHandler}
                className='flex flex-col gap-5 text-slate-700 text-sm mt-6 max-w-3xl'>

                {/* Product Image */}

                <div className='flex flex-col gap-2'>

                    <label htmlFor='product-image'
                        className='font-medium text-green-800'>

                        Product Image

                    </label>

                    <div className='flex items-center gap-4'>

                        <label htmlFor='product-image'
                            className='cursor-pointer'>

                            <img
                                src={image ? URL.createObjectURL(image) : assets.upload_icon}
                                alt="Upload"
                                className='h-20  rounded-md object-cover border border-gray-300'
                            />

                        </label>

                        <input
                            onChange={(e) => setImage(e.target.files[0])}
                            type="file"
                            id="product-image"
                            accept="image/*"
                            hidden
                        />

                        <span className='text-gray-400'>Click to upload</span>

                    </div>

                </div>

                {/* Brand & Model */}

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                    <div className='flex flex-col'>

                        <label className='font-medium text-green-800'>Brand</label>

                        <input
                            type="text"
                            placeholder="e.g. Toyota"
                            value={card.brand}
                            onChange={(e) => setCard({ ...card, brand: e.target.value })}
                            className='border border-gray-300 rounded-md px-3 py-2 mt-1 
                            focus:outline-none focus:ring-2 focus:ring-green-400'
                            required
                        />

                    </div>

                    <div className='flex flex-col'>

                        <label className='font-medium text-green-800'>Model</label>

                        <input
                            type="text"
                            placeholder="e.g. Prius"
                            value={card.model}
                            onChange={(e) => setCard({ ...card, model: e.target.value })}
                            className='border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-400'
                            required
                        />

                    </div>

                </div>

                {/* Year, Price Per Day, Category */}

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

                    <div className='flex flex-col'>

                        <label className='font-medium text-green-800'>Year</label>

                        <input
                            type="number"
                            placeholder="e.g. 2023"
                            value={card.year}
                            onChange={(e) => setCard({ ...card, year: e.target.value })}
                            className='border border-gray-300 rounded-md px-3 py-2 mt-1 
                            focus:outline-none focus:ring-2 focus:ring-green-400'
                            required
                        />

                    </div>

                    <div className='flex flex-col'>

                        <label className='font-medium text-green-800'>Price Per Day ({currency})</label>

                        <input
                            type="number"
                            placeholder="e.g. 4500"
                            value={card.pricePerDay}
                            onChange={(e) => setCard({ ...card, pricePerDay: e.target.value })}
                            className='border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-400'
                            required
                        />

                    </div>

                    <div className='flex flex-col'>

                        <label className='font-medium text-green-800'>Category</label>

                        <select
                            value={card.category}
                            onChange={(e) => setCard({ ...card, category: e.target.value })}
                            className='border border-gray-300 rounded-md px-3 py-2 mt-1 
                            focus:outline-none focus:ring-2 focus:ring-green-400'
                            required
                        >

                            <option value="">Select category</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Van">Van</option>

                        </select>

                    </div>

                </div>

                {/* Transmission, Fuel Type, Seats */}

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

                    <div className='flex flex-col'>

                        <label className='font-medium text-green-800'>Transmission</label>

                        <select
                            value={card.transmission}
                            onChange={(e) => setCard({ ...card, transmission: e.target.value })}
                            className='border border-gray-300 rounded-md px-3 py-2 mt-1 
                            focus:outline-none focus:ring-2 focus:ring-green-400'
                            required
                        >

                            <option value="">Select transmission</option>
                            <option value="Automatic">Automatic</option>
                            <option value="Manual">Manual</option>
                            <option value="Semi-Automatic">Semi-Automatic</option>

                        </select>

                    </div>

                    <div className='flex flex-col'>

                        <label className='font-medium text-green-800'>Fuel Type</label>

                        <select
                            value={card.fuel_type}
                            onChange={(e) => setCard({ ...card, fuel_type: e.target.value })}
                            className='border border-gray-300 rounded-md px-3 py-2 mt-1
                             focus:outline-none focus:ring-2 focus:ring-green-400'
                            required
                        >

                            <option value="">Select fuel type</option>
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Electric">Electric</option>

                        </select>

                    </div>

                    <div className='flex flex-col'>

                        <label className='font-medium text-green-800'>Seating Capacity</label>

                        <input
                            type="number"
                            placeholder="e.g. 4"
                            value={card.seating_capacity}
                            onChange={(e) => setCard({ ...card, seating_capacity: e.target.value })}
                            className='border border-gray-300 rounded-md px-3 py-2 mt-1 
                            focus:outline-none focus:ring-2 focus:ring-green-400'
                            required
                        />

                    </div>

                </div>

                {/* Location */}

                <div className='flex flex-col'>

                    <label className='font-medium text-green-800'>Location</label>

                    <select
                        value={card.location}
                        onChange={(e) => setCard({ ...card, location: e.target.value })}
                        className='border border-gray-300 rounded-md px-3 py-2 mt-1 
                        focus:outline-none focus:ring-2 focus:ring-green-400'
                        required
                    >

                        <option value="">Select location</option>
                        <option value="Colombo">Colombo</option>
                        <option value="Kandy">Kandy</option>
                        <option value="Galle">Galle</option>
                        <option value="Jaffna">Jaffna</option>

                    </select>

                </div>

                {/* Description */}

                <div className='flex flex-col'>

                    <label className='font-medium text-green-800'>Description</label>

                    <textarea
                        rows={4}
                        placeholder='Describe features, mileage, rules, etc.'
                        value={card.description}
                        onChange={(e) => setCard({ ...card, description: e.target.value })}
                        className='border border-gray-300 rounded-md px-3 py-2 mt-1 
                        resize-none focus:outline-none focus:ring-2 focus:ring-green-400'
                        required
                    />

                </div>

                {/* Submit Button */}

                <button
                    type="submit"
                    className='flex items-center gap-2 px-6 py-3 mt-6 bg-green-600 
                    text-white font-medium rounded-lg hover:bg-green-700 transition-all w-fit'>

                    <img src={assets.tick_icon} alt="tick_icon" className='h-5' />

                    Add Product

                </button>

            </form>

        </div>

    )

}


export default AddProduct
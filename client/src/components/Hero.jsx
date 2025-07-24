import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Hero = () => {

    const [pickupLocation, setPickupLocation] = useState('')

    const { pickupDate, setPickupDate, returnDate, setreturnDate, navigate } = useAppContext()

    const handleSearch = async (e) => {

        e.preventDefault();

        navigate(
            '/products?pickupLocation=' +
            pickupLocation +
            '&pickupDate=' +
            pickupDate +
            '&returnDate=' +
            returnDate
        );



    }

    return (

        <div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>

            <h1
                className="text-4xl md:text-5xl font-bold leading-snug tracking-tight 
             bg-gradient-to-r from-pink-500 via-yellow-500 to-indigo-500 
             text-transparent bg-clip-text text-center"
            >
                Rent Anything. <br className="hidden md:block" />
                Anytime. Anywhere.
            </h1>

            <form onSubmit={handleSearch} className='flex flex-col md:flex-row items-start md:items-center justify-between
            p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-180 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.1)]'>

                <div className='flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8'>

                    <div className='flex flex-col items-start gap-2'>

                        <select value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} required>

                            <option value="" >Pickup Location</option>

                            {cityList.map((city) => (

                                <option key={city} value={city}>{city}</option>

                            ))}

                        </select>

                        <p className='px-1 text-sm text-gray-500'>{pickupLocation ? pickupLocation : 'Please Select Location'}</p>

                    </div>

                    <div className='flex flex-col items-start gap-2'>

                        <label htmlFor="pickup-date">Pick-up Date</label>

                        <input
                            value={pickupDate}
                            onChange={e => setPickupDate(e.target.value)}
                            type="date"
                            id="pickup-date"
                            min={new Date().toISOString().split('T')[0]}
                            className='text-sm text-gray-500'
                            required />


                    </div>

                    <div className='flex flex-col items-start gap-2'>

                        <label htmlFor="return-date">Return Date</label>

                        <input
                            value={returnDate}
                            onChange={e => setreturnDate(e.target.value)}
                            type="date"
                            id="pickup-date"
                            className='text-sm text-gray-500'
                            required />


                    </div>



                </div>

                <button
                    type="submit"
                    className="flex items-center justify-center gap-2 px-6 py-3 max-sm:mt-4
                                     bg-green-600 hover:bg-green-700 text-white font-medium 
                                        rounded-full shadow-md transition duration-200 focus:outline-none focus:ring-2
                                         focus:ring-green-400"
                >
                    <img
                        src={assets.search_icon}
                        alt="Search"
                        className="w-4 h-4 brightness-200"
                    />

                    Search

                </button>



            </form>

            <img src={assets.main_car} alt="car" className='max-h-74' />

        </div>

    )
}

export default Hero
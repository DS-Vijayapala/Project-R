import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import { useAppContext } from '../context/AppContext'

const MyBookings = () => {

    const { user, axios, currency } = useAppContext()

    const [Bookings, setBookings] = useState([])

    const fetchMyBookings = async () => {

        try {

            const { data } = await axios.get('/api/booking-data/list-user-bookings')

            if (data.success) {

                setBookings(data.bookings)

            } else {

                toast.error(data.message)

            }

        } catch (error) {

            toast.error(data.message)

        }

    }

    useEffect(() => {

        user && fetchMyBookings()

    }, [user])

    return (

        <div className='px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl'>

            <Title title="My Bookings" subtitle="Review your previous and upcoming reservations" align="left" />

            <div>

                {Bookings.map((booking, index) => (

                    <div
                        key={booking._id}
                        className='grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-xl shadow-md 
                         hover:shadow-xl transition-shadow duration-300 bg-white mt-5 first:mt-12'>

                        {/* Car Image and Info */}
                        <div className='md:col-span-1'>

                            <div className='rounded-md overflow-hidden mb-3'>

                                <img
                                    src={booking.product.image}
                                    alt="product"
                                    className='w-full h-auto aspect-video object-cover'

                                />

                            </div>

                            <p className='text-lg font-medium mt-2'>{booking.product.brand} {booking.product.model}</p>

                            <p className='text-gray-500'>{booking.product.year} {booking.product.category} - {booking.product.location}</p>

                        </div>

                        {/* Booking Info */}

                        <div className='md:col-span-2 space-y-3'>

                            <div className='flex items-center gap-2'>

                                <p className='px-3 py-1.5 bg-gray-100 text-sm rounded-md shadow-sm'>

                                    Booking #{index + 1}

                                </p>

                                <p className={`px-3 py-1 text-xs rounded-full font-medium
                                    ${booking.status === 'confirmed'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-600'}
                                    `}>

                                    {booking.status}

                                </p>

                            </div>

                            <div className='flex items-start gap-2'>

                                <img
                                    src={assets.calendar_icon_colored}
                                    alt="calendar"
                                    className='w-4 h-4 mt-1'
                                />

                                <div>

                                    <p className='text-gray-500 text-sm'>Rental Period</p>

                                    <p className='text-gray-700 font-medium'>

                                        {booking.pickupDate.split('T')[0]} <b >To</b> {booking.returnDate.split('T')[0]}

                                    </p>

                                </div>

                            </div>

                            <div className='flex items-start gap-2'>

                                <img
                                    src={assets.location_icon_colored}
                                    alt="location"
                                    className='w-4 h-4 mt-1'
                                />

                                <div>
                                    <p className='text-gray-500 text-sm'>Pick-Up Location</p>

                                    <p className='text-gray-700 font-medium'>{booking.product.location}</p>

                                </div>

                            </div>

                        </div>

                        {/* Price & Booking Info */}

                        <div className='md:col-span-1 flex flex-col justify-between gap-6 text-right'>

                            <div>
                                <p className='text-xl font-semibold text-green-700'>Total Price</p>

                                <h1 className='text-2xl font-bold text-blue-500'>
                                    {currency} {booking.price}
                                </h1>

                                <p className='text-sm text-gray-500 mt-2'>Booked on {booking.createdAt.split('T')[0]}</p>

                            </div>

                        </div>

                    </div>

                ))}


            </div>

        </div>

    )

}


export default MyBookings
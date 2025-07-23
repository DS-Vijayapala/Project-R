import React, { useEffect, useState } from 'react'
import Title from '../../components/owner/Title'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const ManageBookings = () => {

    const { axios, currency, isOwner } = useAppContext()

    const [Bookings, setBookings] = useState([])

    const fetchOwnerBookings = async () => {

        try {

            const { data } = await axios.get('/api/booking-data/list-owner-bookings')

            data.success ? setBookings(data.bookings) : toast.error(data.message)

        } catch (error) {

            toast.error(data.message)

        }

    }

    const changeBookingStatus = async (bookingId, status) => {

        try {

            const { data } = await axios.post('/api/booking-data/change-status', { bookingId, status })

            if (data.success) {

                toast.success(data.message)

                fetchOwnerBookings()

            } else {

                toast.error(data.message)

            }



        } catch (error) {

            toast.error(data.message)

        }

    }

    useEffect(() => {

        fetchOwnerBookings()

    }, [])

    return (

        <div className='px-4 pt-10 md:px-10 w-full'>

            <Title
                title="Manage Bookings"
                subTitle="Track, update, or remove your customer bookings from a single place."
                align="left"
            />

            <div className='max-w-5xl w-full mt-6 rounded-xl overflow-hidden border
             border-green-100 shadow-sm'>

                <table className='w-full text-left text-sm text-slate-700 border-collapse'>

                    {/* Table Header */}

                    <thead className='bg-lime-50 text-green-800'>

                        <tr>

                            <th className='p-4 font-semibold'>Product</th>
                            <th className='p-4 font-semibold max-md:hidden'>Date Range</th>
                            <th className='p-4 font-semibold'>Total</th>
                            <th className='p-4 font-semibold max-md:hidden'>Payment</th>
                            <th className='p-4 font-semibold'>Status</th>

                        </tr>

                    </thead>

                    {/* Table Body */}

                    <tbody className='bg-white divide-y divide-gray-200'>

                        {Bookings.map((bookings, index) => (

                            <tr key={index} className='hover:shadow-md transition-all duration-200'>

                                {/* Car Info */}

                                <td className='p-4 flex items-center gap-4'>

                                    <img
                                        src={bookings.car.image}
                                        alt="car"
                                        className='h-12 w-12 rounded-lg object-cover border border-gray-300'
                                    />

                                    <div>

                                        <p className='font-semibold text-slate-800'>

                                            {bookings.car.brand} {bookings.car.model}

                                        </p>

                                        {/* <p className='text-xs text-slate-500'>

                                            Booking #{bookings._id.slice(-4)}
                                            
                                        </p> */}

                                    </div>

                                </td>

                                {/* Date Range */}

                                <td className='p-4 max-md:hidden'>

                                    <span className='text-sm font-medium text-slate-600'>

                                        {bookings.pickupDate.split('T')[0]} to {bookings.returnDate.split('T')[0]}

                                    </span>

                                </td>

                                {/* Price */}

                                <td className='p-4'>

                                    <span className='text-green-700 font-medium'>

                                        {currency} {bookings.price}

                                    </span>

                                </td>

                                {/* Payment */}
                                <td className='p-4 max-md:hidden'>

                                    <span className='bg-green-50 text-green-700 px-3 py-1 
                                    rounded-full text-xs font-medium capitalize'>

                                        offline

                                    </span>

                                </td>

                                {/* Status */}

                                <td className='p-4'>

                                    {bookings.status === "pending" ? (

                                        <select
                                            onChange={e => changeBookingStatus(bookings._id, e.target.value)}
                                            value={bookings.status}
                                            className='px-3 py-2 rounded-md border border-green-300
                                             text-slate-700 text-xs bg-white shadow-sm 
                                             focus:outline-none focus:ring-1 focus:ring-green-400 transition'

                                        >
                                            <option value="pending">Pending</option>
                                            <option value="cancelled">Cancelled</option>
                                            <option value="confirmed">Confirmed</option>

                                        </select>

                                    ) : (

                                        <span className={`px-3 py-1 rounded-full text-xs 
                                            font-semibold capitalize
                                            ${bookings.status === 'confirmed'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-red-100 text-red-500'
                                            }`}>

                                            {bookings.status}

                                        </span>

                                    )}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    )

}


export default ManageBookings
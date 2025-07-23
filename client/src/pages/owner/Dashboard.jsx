import React, { useEffect, useState } from 'react'
import { assets, dummyDashboardData } from '../../assets/assets'
import Title from '../../components/owner/Title'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Dashboard = () => {


    const { axios, isOwner, currency } = useAppContext()

    const [data, setData] = useState({
        totalProducts: 0,
        totalBookings: 0,
        pendingBookings: 0,
        completedBookings: 0,
        recentBookings: [],
        monthlyRevenue: 0

    })

    const dashboardCards = [

        { title: "Total Products", value: data.totalProducts, icon: assets.calendar_icon_colored },
        { title: "Total Bookings", value: data.totalBookings, icon: assets.listIconColored },
        { title: "Pending", value: data.pendingBookings, icon: assets.cautionIconColored },
        { title: "Confirmed", value: data.completedBookings, icon: assets.listIconColored },

    ]

    const fetchDashboardData = async () => {

        try {

            const { data } = await axios.get('/api/owner/dashboard-data')

            if (data.success) {

                setData(data.dashBoardData)

            } else {

                toast.error(data.message)
            }

        } catch (error) {

            toast.error(data.message)

        }

    }

    useEffect(() => {

        if (isOwner) {

            fetchDashboardData()

        }

    }, [isOwner])

    return (

        <div className='px-4 pt-10 md:px-10 flex-1'>

            <Title title="Admin Dashboard" subTitle='Overview of platform performance and recent activity' align='left' />

            {/* Stat Cards */}

            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-5xl'>

                {dashboardCards.map((card, index) => (

                    <div
                        key={index}
                        className='flex items-center justify-between p-5 rounded-xl bg-white 
                        shadow-lg hover:shadow-xl transition-all duration-300'
                    >
                        <div>

                            <h1 className='text-sm text-gray-500'>{card.title}</h1>

                            <p className='text-2xl font-semibold text-gray-800 mt-1'>{card.value}</p>

                        </div>

                        <div className='flex items-center justify-center w-12 h-12 rounded-full bg-green-100'>

                            <img
                                src={card.icon}
                                alt="icon"
                                className='w-5 h-5'
                            />

                        </div>

                    </div>

                ))}

            </div>

            {/* Panels */}

            <div className='flex flex-wrap items-start gap-6 mb-12 w-full'>

                {/* Recent Bookings */}

                <div className='p-6 rounded-xl bg-white shadow-lg w-full max-w-xl'>

                    <h1 className='text-xl font-medium text-gray-800'>Recent Bookings</h1>

                    <p className='text-sm text-gray-500 mb-4'>Latest customer activities</p>

                    {data.recentBookings.map((booking, index) => (

                        <div key={index} className='mt-4 flex items-center justify-between'>

                            <div className='flex items-center gap-3'>

                                <div className='hidden md:flex items-center justify-center 
                                                w-12 h-12 rounded-full bg-green-100'>

                                    <img
                                        src={assets.listIconColored}
                                        alt="booking"
                                        className='w-5 h-5'
                                    />

                                </div>

                                <div>

                                    <p className='font-medium text-gray-700'>

                                        {booking.product.brand} {booking.product.model}

                                    </p>

                                    <p className='text-sm text-gray-500'>{booking.createdAt.split('T')[0]}</p>

                                </div>

                            </div>

                            <div className='flex items-center gap-3'>

                                <p className='text-sm text-gray-600'>{currency}{booking.price}</p>

                                <span className={`px-3 py-1 text-xs font-medium rounded-full 
                                    ${booking.status === 'confirmed'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-600'}`}>

                                    {booking.status}

                                </span>

                            </div>

                        </div>

                    ))}

                </div>

                {/* Monthly Revenue */}

                <div className='p-6 rounded-xl shadow-lg bg-white w-full md:max-w-sm'>

                    <h1 className='text-xl font-medium text-gray-800'>Monthly Revenue</h1>

                    <p className='text-sm text-gray-500'>Revenue this month</p>

                    <p className='text-4xl mt-6 font-bold text-green-600'>

                        {currency}{data.monthlyRevenue}

                    </p>

                </div>

            </div>

        </div>

    )

}


export default Dashboard
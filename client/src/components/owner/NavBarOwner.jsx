import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'

const NavBarOwner = () => {

    const { user } = useAppContext()

    return (

        <div className='flex items-center justify-between px-6 md:px-10 py-4 bg-white shadow-sm 
                 text-gray-800 border-b border-gray-200 relative transition-all'>

            {/* Logo */}

            <Link to="/" className="flex items-baseline space-x-1 group">

                <span className="text-xl font-bold 
                                bg-gradient-to-r from-pink-500 via-yellow-500 to-indigo-500 
                                text-transparent bg-clip-text group-hover:opacity-90 transition-opacity 
                                duration-200">

                    <b className="text-2xl font-extrabold">R</b>entzee

                </span>

            </Link>

            {/* Welcome Message */}

            <p className='text-sm md:text-base font-medium text-gray-600'>

                Welcome, <span className='text-gray-900'>{user?.name || "Owner"}</span>

            </p>

        </div>

    )

}

export default NavBarOwner
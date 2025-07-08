import React, { useState } from 'react'
import { assets, dummyUserData, ownerMenuLinks } from '../../assets/assets'
import { NavLink, useLocation } from 'react-router-dom'

const SideBar = () => {

    const user = dummyUserData

    const location = useLocation()

    const [Image, setImage] = useState('')

    const updateImage = async () => {

        user.image = URL.createObjectURL(Image)

        setImage('')

    }

    return (

        <div className='relative min-h-screen md:flex flex-col items-center pt-8 
                max-w-13 md:max-w-60 w-full border-r border-gray-200 text-sm shadow-md bg-white'>

            {/* Profile Image Upload */}

            <div className='group relative hidden md:block'>

                <label
                    htmlFor="image"
                    className='block w-24 h-24 rounded-full overflow-hidden cursor-pointer relative'>

                    <img
                        src={
                            Image
                                ? URL.createObjectURL(Image)
                                : user?.image ||
                                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop"
                        }
                        alt="Profile"
                        className='w-full h-full object-cove shadow-lg'
                    />

                    <input
                        onChange={(e) => setImage(e.target.files[0])}
                        type="file"
                        id="image"
                        accept="image/*"
                        hidden
                    />

                    <div className='absolute inset-0 bg-black/30 
                    hidden group-hover:flex items-center justify-center'>

                        <img src={assets.edit_icon} alt="Edit" className='w-5 h-5 opacity-80' />

                    </div>

                </label>

            </div>

            {/* Save Button */}

            {Image && (

                <button
                    onClick={updateImage}
                    className='absolute top-4 right-4 flex items-center gap-1 px-3 py-1
                     bg-green-600 text-white rounded-md text-xs hover:bg-green-700 
                     transition-all cursor-pointer shadow'
                >

                    Save

                    <img src={assets.check_icon} width={12} alt="check" />

                </button>

            )}

            {/* User Name */}

            <p className='mt-4 text-base font-medium text-gray-700 hidden md:block'>{user?.name}</p>

            {/* Sidebar Navigation */}

            <div className='w-full mt-8'>

                {ownerMenuLinks.map((link, index) => (

                    <NavLink
                        key={index}
                        to={link.path}
                        className={
                            `relative flex items-center gap-3 w-full py-3 px-5 transition-colors duration-200 
                            ${location.pathname === link.path
                                ? 'bg-gradient-to-r from-green-500 to-lime-400 text-white font-semibold shadow-sm'
                                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`
                        }

                    >

                        <img
                            src={location.pathname === link.path ? link.coloredIcon : link.icon}
                            alt={link.name}
                            className='w-5 h-5'
                        />

                        <span className='max-md:hidden'>{link.name}</span>

                    </NavLink>

                ))}

            </div>

        </div>

    )

}


export default SideBar
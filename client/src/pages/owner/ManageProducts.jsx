import React, { useEffect, useState } from 'react'
import { assets, dummyCarData } from '../../assets/assets'
import Title from '../../components/owner/Title'

const ManageProducts = () => {

    const currency = import.meta.env.VITE_CURRENCY

    const [Product, setProduct] = useState([])

    const fetchOwnerProducts = async () => {

        setProduct(dummyCarData)
    }

    useEffect(() => {

        fetchOwnerProducts()

    }, [])

    return (

        <div className='px-4 pt-10 md:px-10 w-full'>


            <Title
                title="Manage Products"
                subTitle="Easily view, update, or remove your listings"
                align="left" />

            <div className='max-w-5xl w-full rounded-xl overflow-hidden border
             border-green-100 shadow-sm mt-6'>

                <table className='w-full border-collapse text-left text-sm text-slate-700'>

                    <thead className='bg-lime-50 text-green-800'>

                        <tr>
                            <th className='p-4 font-semibold'>Product</th>
                            <th className='p-4 font-semibold max-md:hidden'>Category</th>
                            <th className='p-4 font-semibold'>Price</th>
                            <th className='p-4 font-semibold max-md:hidden'>Status</th>
                            <th className='p-4 font-semibold'>Actions</th>
                        </tr>

                    </thead>

                    <tbody className='bg-white divide-y divide-gray-200'>

                        {Product.map((product, index) => (

                            <tr key={index} className='hover:shadow-md transition'>

                                {/* Image, brand, model, details */}

                                <td className='p-4 flex items-center gap-4'>

                                    <img
                                        src={product.image}
                                        alt="product-image"
                                        className='h-12 w-12 rounded-lg object-cover border 
                                        border-gray-300'
                                    />

                                    <div className='max-md:hidden'>

                                        <p className='font-semibold text-slate-800'>

                                            {product.brand} {product.model}

                                        </p>

                                        <p className='text-xs text-slate-500'>

                                            {product.seating_capacity} seats • {product.transmission}

                                        </p>

                                    </div>

                                </td>

                                {/* Category */}

                                <td className='p-4 max-md:hidden'>
                                    <span className='bg-green-50 text-green-700 px-2 py-1 
                                    rounded text-xs font-medium'>

                                        {product.category}

                                    </span>

                                </td>

                                {/* Price */}

                                <td className='p-4'>

                                    <span className='text-green-700 font-medium'>

                                        {currency} {product.pricePerDay}

                                    </span>

                                    <span className='text-xs text-slate-500 ml-1'>/day</span>

                                </td>

                                {/* Status */}

                                <td className='p-4 max-md:hidden'>

                                    <span className={`px-3 py-1 rounded-full text-xs font-medium 
                                    tracking-wide
                                        ${product.isAvaliable
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-red-100 text-red-600'
                                        }`}>
                                        {product.isAvaliable ? 'Available' : 'Unavailable'}

                                    </span>

                                </td>

                                {/* Actions */}

                                <td className='p-4 flex gap-3 items-center'>

                                    <img
                                        src={product.isAvaliable ? assets.eye_close_icon : assets.eye_icon}
                                        alt="toggle-availability"
                                        className='cursor-pointer hover:scale-110 transition'
                                    />

                                    <img
                                        src={assets.delete_icon}
                                        alt="delete-product"
                                        className='cursor-pointer hover:scale-110 transition'
                                    />

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    )

}


export default ManageProducts
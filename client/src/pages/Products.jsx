import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Products = () => {

    // Getting Search Params From URL

    const [searchParams] = useSearchParams()

    const pickupLocation = searchParams.get('pickupLocation')

    const pickupDate = searchParams.get('pickupDate')

    const returnDate = searchParams.get('returnDate')

    const { products, axios } = useAppContext()

    const [input, setInput] = useState('')

    const [filteredProducts, setFilteredProducts] = useState([])

    const isSearchData = pickupLocation && pickupDate && returnDate

    // Apply filter based on input search text

    const applyFilter = () => {

        if (input === '') {

            setFilteredProducts(products)

        } else {

            const lowerInput = input.toLowerCase()

            const filtered = products.filter((p) =>

                p.brand.toLowerCase().includes(lowerInput) ||
                p.location.toLowerCase().includes(lowerInput)

            )

            setFilteredProducts(filtered)

        }

    }

    // Want to Fix Bug

    const searchProductAvailability = async () => {

        try {

            const { data } = await axios.post('/api/booking-data/check-availability', {
                location: pickupLocation,
                pickupDate,
                returnDate

            })

            if (data.success) {

                setFilteredProducts(data.availableProducts)

                console.log(data.availableProducts);


                if (data.availableProducts.length === 0) {

                    toast('No Product Available')

                }

            } else {

                toast.error('Failed to fetch availability')

            }

        } catch (error) {

            toast.error('Error checking availability')

        }

    }

    useEffect(() => {

        if (isSearchData) {

            searchProductAvailability()

        }

    }, [pickupLocation, pickupDate, returnDate])

    useEffect(() => {

        if (!isSearchData && products.length > 0) {

            applyFilter()

        }

    }, [input, products, isSearchData])


    return (

        <div className='flex flex-col'>

            <div className="flex flex-col items-center py-20 bg-light max-md:px-4">

                {/* Title Section */}

                <Title title={"Available Products"} subtitle={"Find your next ride with ease!"} />

                {/* Search and Filter Bar */}

                <div className='flex items-center bg-white px-4 mt-6 max-w-140 
                w-full h-12 rounded-full shadow-md'>

                    <img
                        src={assets.search_icon}
                        alt="search_icon"
                        className='w-5 h-5 mr-3 opacity-75'
                    />

                    <input
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        type="text"
                        placeholder="Search by Brand or Nearest Location..."
                        className='w-full h-full text-gray-700 placeholder-gray-400
                         rounded-full outline-none px-4'
                    />

                    <img
                        src={assets.filter_icon}
                        alt="filter_icon"
                        className='w-5 h-5 ml-3 opacity-75 cursor-pointer'
                    />

                </div>

            </div>

            {/* Product Listing Section */}

            <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10">

                <p className="text-gray-600 xl:px-20 max-w-7xl mx-auto mb-5">

                    Showing {filteredProducts.length} Products

                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                gap-8 mt-4 xl:px-20 max-w-7xl mx-auto">

                    {filteredProducts.map((product, index) => (

                        <div
                            key={index}
                            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg 
                            transition-shadow duration-300"
                        >

                            <ProductCard product={product} />

                        </div>

                    ))}

                </div>

            </div>

        </div>

    )

}


export default Products

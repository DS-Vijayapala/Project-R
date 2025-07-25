import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

const Testimonials = () => {

    const testimonials = [
        {
            name: "Naveen Perera",
            location: "Colombo, Sri Lanka",
            image: assets.testimonial_image_1,
            review:
                "Renting a car on Renzee was fast and stress-free. The platform is well-designed and I found exactly what I needed within minutes. Will definitely use it again!"
        },
        {
            name: "Sajani Fernando",
            location: "Galle, Sri Lanka",
            image: assets.testimonial_image_2,
            review:
                "As a vehicle owner, listing my van on Renzee was the best decision. It’s easy to manage bookings, and I’ve already made several successful rentals."
        },
        {
            name: "Tharindu Jayasuriya",
            location: "Kandy, Sri Lanka",
            image: assets.testimonial_image_1,
            review:
                "Smooth experience from start to finish. The pickup and return process was simple, and the customer support was fantastic. Highly recommend Renzee!"
        }
    ];


    return (

        <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">

            <Title
                title="What Our Customers Say"
                subtitle="Real stories from renters and owners who trust Renzee for safe, easy rentals."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

                {testimonials.map((testimonial, index) => (

                    <div
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg 
                   hover:-translate-y-1 transition-all duration-300"
                    >

                        {/* Header: Image + Info */}

                        <div className="flex items-center gap-4">

                            <img
                                className="w-14 h-14 rounded-full object-cover border border-green-300"

                                src={testimonial.image}

                                alt={testimonial.name}

                            />

                            <div>

                                <p className="text-lg font-semibold text-green-800">{testimonial.name}</p>

                                <p className="text-sm text-slate-500">{testimonial.address}</p>

                            </div>

                        </div>

                        {/* Stars */}

                        <div className="flex items-center gap-1 mt-3">

                            {Array(5)
                                .fill(0)
                                .map((_, index) => (
                                    <img key={index} src={assets.star_icon} alt="star" className="w-4 h-4" />
                                ))}

                        </div>

                        {/* Review Text */}

                        <p className="text-slate-600 text-sm mt-4 leading-relaxed">

                            “{testimonial.review}”

                        </p>

                    </div>

                ))}

            </div>

        </div>

    )

}


export default Testimonials
import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (

        <div className="bg-white px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-slate-600 
        border-t border-slate-200">

            {/* Top Section */}

            <div className="flex flex-wrap justify-between items-start gap-12 py-10 border-b border-slate-200">

                {/* Logo + About + Social */}

                <div className="max-w-sm">

                    <Link to="/" className="flex items-baseline space-x-1">

                        <span className="text-xl font-bold 
                        bg-gradient-to-r from-pink-500 via-yellow-500 to-indigo-500 
                        text-transparent bg-clip-text">

                            <b className="text-2xl font-extrabold">R</b>entzee

                        </span>

                    </Link>

                    <p className="mt-3 text-slate-600">

                        Rentzee is your trusted platform to rent and list
                        Products with ease, transparency, and confidence across Sri Lanka.

                    </p>

                    <div className="flex items-center gap-4 mt-5">

                        <a href="#">
                            <img src={assets.facebook_logo}
                                alt="Facebook"
                                className="w-5 h-5 hover:opacity-80" />
                        </a>

                        <a href="#">
                            <img
                                src={assets.instagram_logo}
                                alt="Instagram"
                                className="w-5 h-5 hover:opacity-80" /></a>

                        <a href="#">
                            <img src={assets.twitter_logo}
                                alt="Twitter"
                                className="w-5 h-5 hover:opacity-80" />
                        </a>

                        <a href="#">
                            <img
                                src={assets.gmail_logo}
                                alt="Gmail"
                                className="w-5 h-5 hover:opacity-80" />
                        </a>

                    </div>

                </div>

                {/* Footer Links */}

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-10">

                    <div>

                        <h2 className="text-base font-semibold text-slate-900 uppercase mb-3">Quick Links</h2>

                        <ul className="flex flex-col gap-2">

                            <li><a href="#" className="hover:text-green-600">Home</a></li>

                            <li><a href="#" className="hover:text-green-600">Browse Products</a></li>

                            <li><a href="#" className="hover:text-green-600">List Your Car</a></li>

                            <li><a href="#" className="hover:text-green-600">About Us</a></li>

                            <li><a href="#" className="hover:text-green-600">Contact Us</a></li>

                        </ul>

                    </div>

                    <div>
                        <h2 className="text-base font-semibold text-slate-900 uppercase mb-3">Resources</h2>

                        <ul className="flex flex-col gap-2">

                            <li><a href="#" className="hover:text-green-600">Blog</a></li>

                            <li><a href="#" className="hover:text-green-600">Help Center</a></li>

                            <li><a href="#" className="hover:text-green-600">Terms of Service</a></li>

                            <li><a href="#" className="hover:text-green-600">Privacy Policy</a></li>

                        </ul>

                    </div>

                    <div>

                        <h2 className="text-base font-semibold text-slate-900 uppercase mb-3">Contact</h2>

                        <ul className="flex flex-col gap-2">

                            <li>1234, Colombo, Sri Lanka</li>

                            <li>+94 77 123 4567</li>

                            <li>rentzee.contact@gmail.com</li>

                        </ul>

                    </div>

                </div>

            </div>

            {/* Bottom Section */}

            <div className="flex flex-col md:flex-row items-center justify-between py-6 text-xs
             text-slate-500 gap-3">

                <p>© {new Date().getFullYear()} Rentzee. All rights reserved.</p>

                <ul className="flex gap-4">

                    <li><a href="#" className="hover:text-green-600">Privacy</a></li>

                    <li><a href="#" className="hover:text-green-600">Terms</a></li>

                    <li><a href="#" className="hover:text-green-600">Cookies</a></li>

                </ul>

            </div>

        </div>

    )

}


export default Footer
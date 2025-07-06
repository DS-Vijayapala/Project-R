import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { assets, links } from '../assets/assets';

const NavBar = ({ setShowLogin }) => {

    const [mobileOpen, setMobileOpen] = useState(false);

    const location = useLocation();

    const active = location.pathname;

    return (

        <header className="sticky top-0 z-50 bg-white text-slate-800 shadow-sm border-b border-green-100">

            <nav
                className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 h-16"
                aria-label="Main navigation"
            >

                {/* Logo */}

                <div className="flex items-center flex-shrink-0">

                    <Link to="/" className="flex items-baseline space-x-1">

                        <span className="text-xl font-bold 
                        bg-gradient-to-r from-pink-500 via-yellow-500 to-indigo-500 
                        text-transparent bg-clip-text">

                            <b className="text-2xl font-extrabold">R</b>entzee

                        </span>

                    </Link>

                </div>

                {/* Search */}

                <div className="hidden md:flex flex-1 justify-center">

                    <div className="relative w-full max-w-md">

                        <input
                            type="text"
                            placeholder="Search items..."
                            className="w-full px-4 py-2 text-sm border border-green-200 rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                        />

                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">

                            <img src={assets.search_icon} alt="search" className="w-4 h-4" />

                        </div>

                    </div>

                </div>

                {/* Desktop Nav */}

                <div className="hidden md:flex items-center gap-6 flex-shrink-0">

                    {/* Links */}

                    <div className="flex gap-4">

                        {links.map((link) => (

                            <Link
                                key={link.path}
                                to={link.path}
                                className={clsx(
                                    'text-sm font-medium transition-colors duration-300',
                                    link.path === active
                                        ? 'text-green-700'
                                        : 'text-slate-700 hover:text-green-700'
                                )}
                                aria-current={link.path === active ? 'page' : undefined}
                            >

                                {link.name}

                            </Link>

                        ))}

                    </div>

                    {/* Dashboard */}

                    <Link

                        to="/owner"
                        className={clsx(
                            'text-sm font-medium transition-colors duration-300',
                            active === '/dashboard'
                                ? 'text-green-700'
                                : 'text-slate-700 hover:text-green-700'
                        )}

                    >
                        Dashboard

                    </Link>

                    {/* Auth Button */}

                    <button
                        onClick={() => setShowLogin(true)}
                        className="bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-full
                         hover:bg-green-700 transition-colors shadow-sm cursor-pointer"
                    >

                        Sign Up

                    </button>

                </div>

                {/* Mobile Toggle */}

                <button
                    className="md:hidden p-2 rounded text-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    aria-label="Toggle menu"
                    onClick={() => setMobileOpen((prev) => !prev)}
                >

                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}

                </button>

            </nav>

            {/* Mobile Menu */}

            <AnimatePresence>

                {mobileOpen && (

                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-green-50 px-4 pb-4"
                    >

                        <div className="flex flex-col space-y-3">

                            {links.map((link) => (

                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={clsx(
                                        'text-sm font-medium transition-colors duration-300',
                                        link.path === active
                                            ? 'text-green-700'
                                            : 'text-slate-700 hover:text-green-700'
                                    )}
                                    onClick={() => setMobileOpen(false)}
                                >

                                    {link.name}

                                </Link>

                            ))}

                            <hr className="border-green-100" />

                            <Link
                                to="/owner/dashboard"
                                className="text-sm font-medium text-slate-700 hover:text-green-700"
                                onClick={() => setMobileOpen(false)}
                            >

                                Dashboard

                            </Link>

                            <button

                                onClick={() => {

                                    setShowLogin(true);
                                    setMobileOpen(false);
                                }}
                                className="bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-full
                                 hover:bg-green-700 transition-colors shadow-sm"
                            >

                                Sign Up

                            </button>

                        </div>

                    </motion.div>

                )}

            </AnimatePresence>

        </header>

    );

};


export default NavBar;

/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { Dialog } from '@headlessui/react';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleBook = () => {
        navigate('./book');
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div className="fixed bg-bgColor w-full z-50 text-[#f0f8ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    
                    <div className="flex items-center justify-start">
                        <div className="flex-shrink-1">
                            <Link to="/">
                                <img className="h-12 w-12 object-cover" src="./public/enamel.png" alt="Enamel" />
                            </Link>
                        </div>
                        <div className="visible lg:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link to="/" className="text-[#f0f8ff] hover:bg-bgColor hover:text-[#f0f8ff] px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                                <Link to="/services" className="text-[#f0f8ff] hover:bg-bgColor hover:text-[#f0f8ff] px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                                <Link to="/about" className="text-[#f0f8ff] hover:bg-bgColor hover:text-[#f0f8ff] px-3 py-2 rounded-md text-sm font-medium">About</Link>
                                <Link to="/testimonials" className="text-[#f0f8ff] hover:bg-bgColor hover:text-[#f0f8ff] px-3 py-2 rounded-md text-sm font-medium">Patient Reviews</Link>
                                <Link to="/contacts" className="text-[#f0f8ff] hover:bg-bgColor hover:text-[#f0f8ff] px-3 py-2 rounded-md text-sm font-medium">Contacts</Link>
                                <button onClick={handleBook} className="text-[#f0f8ff] hover:bg-bgColor hover:text-[#f0f8ff] px-3 py-2 rounded-md text-sm font-medium">Appointments</button>
                                <button onClick={() => { handleLogin(); setMobileMenuOpen(false); }} className="text-[#f0f8ff] hover:bg-bgColor hover:text-[#f0f8ff] px-3 py-2 rounded-md text-sm font-medium" >Login</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center lg:hidden">
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={() => setMobileMenuOpen(true)}>
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    {/* <div className="hidden lg:flex lg:items-center lg:ml-6">
                        <button onClick={handleLogin} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</button>
                    </div> */}
                </div>
            </div>

            {/* Mobile Menu */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 bg-black bg-opacity-25" />
                <Dialog.Panel className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#f0f8ff] p-6">
                    <div className="flex items-center justify-between mb-6">
                        <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                            <img src="./public/enamel.png" alt="Enamel" className="h-12 w-12" />
                        </Link>
                        <button className="text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <nav className="space-y-4 bg-[#f0f8ff]">
                        <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-bgColor hover:bg-[#f0f8ff] p-2 rounded-lg">Home</Link>
                        <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-bgColor hover:bg-[#f0f8ff] p-2 rounded-lg">Services</Link>
                        <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-bgColor hover:bg-[#f0f8ff] p-2 rounded-lg">About</Link>
                        <Link to="/testimonials" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-bgColor hover:bg-[#f0f8ff] p-2 rounded-lg">Patient Reviews</Link>
                        <Link to="/contacts" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-medium text-bgColor hover:bg-[#f0f8ff] p-2 rounded-lg">Contacts</Link>
                        <button onClick={() => { handleBook(); setMobileMenuOpen(false); }} className="block w-full text-lg font-medium bg-bgColor text-[#f0f8ff] hover:bg-[f0f8ff] p-2 rounded-lg">Appointments</button>
                        <button className="w-full bg-bgColor text-[#f0f8ff] px-4 py-2 rounded-md" onClick={() => { handleLogin(); setMobileMenuOpen(false); }}>Login</button>
                    </nav>
                    <div className="mt-6">
                        
                    </div>
                </Dialog.Panel>
            </Dialog>
        </div>
    );
};

export default Navbar;

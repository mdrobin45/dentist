import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'
import logo from '../images/logo.png'
import { ImFacebook } from 'react-icons/im';
import { BsTwitter,BsInstagram,BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className=''>
            <section className='flex py-10 container justify-between'>
                <div>
                    <NavLink to='/home'><img src={logo} alt="Logo" /></NavLink>
                </div>
                <div>
                    <h3 className='font-bold text-2xl pb-3'>Call Us</h3>
                    <p className='text-lg text-gray-500'>+1800 456 789</p>
                    <p className='text-lg text-gray-500'>+1800 456 780</p>
                </div>
                <div>
                    <h3 className='font-bold text-2xl pb-3'>Reach Us</h3>
                    <p className='text-lg text-gray-500'>117 kaliakair street</p>
                    <p className='text-lg text-gray-500'>Gazipur, Dhaka, Bangladesh</p>
                </div>
                <div>
                    <h3 className='font-bold text-2xl pb-3'>Open Hours</h3>
                    <p className='text-lg text-gray-500'>Mon-Fri 09:00 – 19:00</p>
                    <p className='text-lg text-gray-500'>Sat-Sun 10:00 – 14:00</p>
                </div>
                <div>
                    <h3 className='font-bold text-2xl pb-3'>Follow Us</h3>
                    <div className='flex justify-between'>
                        <a href="/"><ImFacebook className='rounded icon-bg text-white mx-2 p-1 text-3xl' /></a>
                        <a href="/"><BsTwitter className='rounded icon-bg text-white mx-2 p-1 text-3xl' /></a>
                        <a href="/"><BsInstagram className='rounded icon-bg text-white mx-2 p-1 text-3xl' /></a>
                        <a href="/"><BsLinkedin className='rounded icon-bg text-white mx-2 p-1 text-3xl'/></a>
                    </div>
                </div>
            </section>
            <hr />
            <section className='flex container justify-between py-6'>
                <div><p className='text-lg text-gray-500'>Copyright © 2021 Dental Clinic</p></div>
                <div><p className='text-lg text-gray-500'>Powered by Robin Dental Clinic</p></div>
            </section>
        </div>
    );
};

export default Footer;
import React from 'react';
import './Header.css'
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () =>
{
    // Destructure firebase auth
    const { user,logOut } = useAuth();
    return (
        <div className='container items-center flex justify-between'>
            <div>
                <NavLink to='/home'><img src={logo} alt="Logo" /></NavLink>
            </div>

            <div className='flex items-center'>

                <NavLink activeClassName='activeLink' className='px-3 mx-3 text-lg' to='/home'>Home</NavLink>

                <NavLink activeClassName='activeLink' className='px-3 mx-3 text-lg' to='/about'>About</NavLink>

                <NavLink activeClassName='activeLink' className='px-3 mx-3 text-lg' to='/services'>Services</NavLink>

                <NavLink activeClassName='activeLink' className='px-3 mx-3 text-lg' to='/contact'>Contact</NavLink>

                {user.email ? <NavLink onClick={logOut} className='mx-3 primary-bg font-bold px-10 py-3 rounded-2xl text-lg' to='/login'>Log Out</NavLink> : <NavLink className='mx-3 primary-bg font-bold px-10 py-3 rounded-2xl text-lg' to='/login'>Login</NavLink>}
                
                {user.email && <h3 className='px-2'>{user.displayName}</h3>}
                {user.email && <img className='w-10 rounded-full' src={user.photoURL} alt="Profile"/>}
            </div>
        </div>
    );
};

export default Header;
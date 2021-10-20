import React,{Fragment } from 'react';
import { Disclosure, Menu, Transition} from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../images/header-logo.png'


const navigation = [
    { name: 'Home', to: '/home', current: true },
    { name: 'About', to: '/about', current: false },
    { name: 'Services', to: '/services', current: false },
    { name: 'Contact', to: '/contact', current: false },
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Navigation = () =>
{
    const { user,logOut } = useAuth();
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                        )}
                        </Disclosure.Button>
                    </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <NavLink className='w-1/2 md:w-auto' to='/'>
                                    <div className="flex-shrink-0 flex items-center">
                                        <img
                                            className="block lg:hidden h-8 w-auto"
                                                src={logo}
                                                alt='Logo'
                                        />
                                        <img
                                            className="hidden lg:block h-8 w-auto"
                                                src={logo}
                                                alt='Logo'
                                        />
                                    </div>
                                </NavLink>
                        
                        <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.to}
                                className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'px-3 py-2 rounded-md text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </NavLink>
                            ))}
                        </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {
                                    user?.email ? (<NavLink
                                        onClick={logOut}
                                        className='text-gray-300
                                        py-2 px-3
                                        bg-gray-600
                                        hover:text-white
                                        rounded'
                                        to='/login'>Log Out</NavLink>) : (
                                        <NavLink
                                            className='text-gray-300
                                            py-2 px-3
                                            bg-gray-600
                                            hover:text-white
                                            rounded'
                                            to='/login'>Login</NavLink>
                                    )
                        }       

                        {/* Profile dropdown */}
                        <Menu as="div" className="ml-3 relative">
                        <div>
                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            {
                              user?.email? (<img
                              className="h-8 w-8 rounded-full"
                              src={user?.photoURL}
                              alt="Profile Thumbnail"
                           />):null           
                            }
                            </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item className='border-b-2'>
                                    {({ active }) => (
                                    <div>
                                    <h2 className='px-4 py-2'>{user?.displayName}</h2>
                                    <h2 className='px-4 py-2'>{user?.email}</h2>
                                    </div>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                    <NavLink
                                        to='#'
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                        Your Profile
                                    </NavLink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                    <NavLink
                                        to='#'
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                        Settings
                                    </NavLink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                    <NavLink
                                        to='#'
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                        Sign out
                                    </NavLink>
                                    )}
                                </Menu.Item>
                                </Menu.Items>
                            </Transition>       
                        </Menu>
                    </div>
                    </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                        <NavLink
                        key={item.name}
                        to={item.to}
                        className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block px-3 py-2 rounded-md text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        >
                        {item.name}
                        </NavLink>
                    ))}
                    </div>
                </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navigation;
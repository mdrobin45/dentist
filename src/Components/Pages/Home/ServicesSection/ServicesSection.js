import React from 'react';
import { NavLink } from 'react-router-dom';
import useServices from '../../../../Hooks/useServices';
import SingleServiceCard from '../../../SingleServiceCard/SingleServiceCard';
import './ServicesSection'
import '../../../SingleServiceCard/SingleServiceCard.css'


const ServicesSection = () =>
{
    const [allService] = useServices([]);
    return (
        <>
           <div className='container gap-4 grid md:grid-cols-3 py-20'>
                {
                    allService?.slice(0,6).map(service => <SingleServiceCard key={service.id} service={service}/>)
                }
            </div>
            <div className='text-center mb-10'>
                <NavLink className='text-lg rounded detailButton text-white' to='/services'>View all services</NavLink>
            </div> 
        </>
        
    );
};

export default ServicesSection;
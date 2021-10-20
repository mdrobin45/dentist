import React from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useServices from '../../../Hooks/useServices'

const SingleServiceDetails = () =>
{
    const { idService } = useParams();
    const [allService] = useServices([]);
    
    const service = allService?.find(service => service?.id === idService);

    return (
        <div className='m-auto p-10 mt-16 shadow-2xl w-10/12'>
            <img className='m-auto rounded' src={service?.image} alt="Thumbnail" />
            <h2 className='text-3xl py-3 font -bold'>{service?.title}</h2>
            <p className='text-lg'>{service?.description}</p>
            <div className='text-center mt-10'>
                <NavLink style={{background:'#29D8DB'}} className='text-lg font-bold text-white m-auto py-3 px-6 rounded' to='/services'>Back To Service</NavLink>
            </div>
            
        </div>
    );
};

export default SingleServiceDetails;
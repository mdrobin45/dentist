import React from 'react';
import useServices from '../../../Hooks/useServices';
import './Services.css'
import SingleServiceCard from '../../SingleServiceCard/SingleServiceCard';

const Services = () =>
{
    const [services] = useServices();

    return (
        <div>
            <div className='m-auto md:w-2/4 pt-10 text-center'>
                <h2 className='text-5xl text-gray-600 font-bold text-center py-4'>Services</h2>
                <hr className='m-auto w-2/6' />
                <p className='text-lg py-3'>Our residents come from all parts of the world, bringing you a global expertise coupled with the cutting edge research and knowledge of the University of Rochester Medical Center.</p> 
            </div>
            
            <div  className='container gap-4 grid md:grid-cols-3 py-20'>
                {
                    services?.map(service => <SingleServiceCard key={service.id} service={service}/>)
                }
            </div>
        </div>
    );
};
export default Services;
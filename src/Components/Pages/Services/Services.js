import React from 'react';
import useServices from '../../../Hooks/useServices';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import './Services.css'
import { Link, NavLink } from 'react-router-dom';
import SingleService from '../SingleService/SingleService';

const Services = () =>
{
    const [services] = useServices();

    // Custom View all button
    const ViewAllService = styled(Button)({
        background: '#29D8DB',
        width: '20%',
        padding: '10px 0',
        margin: '0px auto 5rem auto',
        display:'block',
        fontSize: '17px',
        borderRadius: '50px',
        '&:hover': {
            background: 'black'
        }
    });
    return (
        <div>
            <div className='m-auto md:w-2/4 pt-10 text-center'>
                <h2 className='text-5xl text-gray-600 font-bold text-center py-4'>Services</h2>
                <hr className='m-auto w-2/6' />
                <p className='text-lg py-3'>Our residents come from all parts of the world, bringing you a global expertise coupled with the cutting edge research and knowledge of the University of Rochester Medical Center.</p> 
            </div>
            
            <div  className='container gap-4 grid md:grid-cols-3 py-20'>
                {
                    services.slice(0,9).map(service=><ServicesCard key={service.id} service={service}/>)
                }
            </div>
            <div>
                <Link to='/services'><ViewAllService variant="contained">View all services</ViewAllService></Link>
            </div>
        </div>
    );
};



// Services card
const ServicesCard = (props) =>
{
    const { title, image, description,id } = props.service;
    const shortDescription = description.split(" ");
    <SingleService services='kaj ore na'></SingleService>


    return (
        <div className='p-6 rounded shadow-2xl'>
            <img className='rounded-2xl' src={image} alt="Service Thumbnail" />
            <h3 className='font-bold py-3 text-2xl'>{title}</h3>
            <p className='text-lg'>{shortDescription.slice(0, 30).join(' ')}</p>
            <div className='text-center mt-6'>
                <NavLink className='detailButton text-white font-bold text-lg' to={`services/${id}`}>Details</NavLink>
            </div>
        </div>
    )
}
export default Services;
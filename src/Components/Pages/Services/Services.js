import React from 'react';
import useServices from '../../../Hooks/useServices';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import './Services.css'

const Services = () =>
{
    const [services] = useServices();
    return (
        <div className='grid gap-4 grid-cols-3 container py-20'>
            {
                services.slice(0,9).map(service=><ServicesCard service={service}/>)
            }
        </div>
    );
};



// Services card
const ServicesCard = (props) =>
{
    const { title, image, description } = props.service;
    const shortDescription = description.split(" ");

    // Custom card details button
    const SignInButton = styled(Button)({
        background: '#29D8DB',
        width: '50%',
        padding: '10px 0',
        margin: '20px auto 0 auto',
        display:'block',
        fontSize: '17px',
        borderRadius: '50px',
        '&:hover': {
          background: 'black'
        }
      });

    
    return (
        <div className='p-6 rounded shadow-2xl'>
            <img className='rounded-2xl' src={image} alt="Service Thumbnail" />
            <h3 className='font-bold py-3 text-2xl'>{title}</h3>
            <p className='text-lg'>{shortDescription.slice(0, 30).join(' ')}</p>
            <div>
                <SignInButton variant="contained">Details</SignInButton>
            </div>
        </div>
    )
}
export default Services;
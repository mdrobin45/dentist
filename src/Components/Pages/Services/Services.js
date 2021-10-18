import React from 'react';
import useServices from '../../../Hooks/useServices';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import './Services.css'
import { useHistory } from 'react-router';

const Services = () =>
{
    const [services] = useServices();
    return (
        <div>
            <div className='m-auto pt-10 text-center w-2/4'>
                <h2 className='text-5xl text-gray-600 font-bold text-center py-4'>Services</h2>
                <hr className='m-auto w-2/6' />
                <p className='text-lg py-3'>Our residents come from all parts of the world, bringing you a global expertise coupled with the cutting edge research and knowledge of the University of Rochester Medical Center.</p> 
            </div>
            
            <div  className='grid gap-4 grid-cols-3 container py-20'>
                {
                    services.slice(0,9).map(service=><ServicesCard key={service.id} service={service}/>)
                }
            </div>
        </div>
    );
};



// Services card
const ServicesCard = (props) =>
{
    const { title, image, description,id } = props.service;
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


    // Single service link setup
    const history = useHistory();
    const getCardId = (id) =>
    {
        history.push(`service/${id}`)
    }
    
    return (
        <div className='p-6 rounded shadow-2xl'>
            <img className='rounded-2xl' src={image} alt="Service Thumbnail" />
            <h3 className='font-bold py-3 text-2xl'>{title}</h3>
            <p className='text-lg'>{shortDescription.slice(0, 30).join(' ')}</p>
            <div>
                <SignInButton onClick={()=>{getCardId(props.service.id)}} variant="contained">Details</SignInButton>
            </div>
        </div>
    )
}
export default Services;
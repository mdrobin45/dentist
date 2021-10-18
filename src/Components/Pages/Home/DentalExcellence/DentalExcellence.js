import React from 'react';
import HomeDentist from '../../../images/home-dentist-img-02.jpg'
import './DentalExcellence.css'
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const DentalExcellence = () =>
{
    // Custom card details button
    const SignInButton = styled(Button)({
        background: '#29D8DB',
        width: '30%',
        padding: '10px 0',
        marginTop: '20px',
        fontSize: '17px',
        '&:hover': {
          background: 'black'
        }
      });

    
    return (
        <div className='flex container items-center py-20 items-start justify-between'>
            <section className='w-2/4'>
                <img className='rounded-3xl' src={HomeDentist} alt="Home Dentist" />
            </section>
            <section className='w-2/4'>
                <h2 className='font-bold py-6 text-4xl text-gray-700'>Committed To Dental Excellence</h2>
                <hr />
                <p className='text-lg py-3'>We are committed to adopting state-of-the-art technology and for our team to remain one step ahead. At Dental Excellence UK, we live and breathe digital dentistry. It's this rich experience that makes our clinic so unique. We're raising standards every day.</p>

                <p className='text-lg py-3'>At Dental Excellence, we understand most people don't look forward to dental visits. However, we are determined to change that! Dental Excellence was founded on my determination to create such a comfortable, friendly, and convenient dental experience, it completely changes the way you think about dentistry. </p>
                <div>
                    <SignInButton variant="contained">Read More</SignInButton>
                </div>
            </section>
        </div>
    );
};

export default DentalExcellence;
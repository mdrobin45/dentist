import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const CallToAction = () =>
{
    // Custom card details button
    const SignInButton = styled(Button)({
        background: '#29D8DB',
        width: '50%',
        padding: '10px 0',
        display:'block',
        margin: 'auto',
        fontSize: '17px',
        '&:hover': {
          background: 'black'
        }
      });
    return (
        <div className='bg- container md:flex md:items-center md:justify-between p-6 rounded-3xl secondary-bg'>
            <div className='md:w-3/5 w-full'>
                <h2 className='text-3xl py-6 font-bold text-white'>Call Us Today for FREE Consultations</h2>
                <p className='text-lg text-white'>Whether you're looking for a family dentist, a caring provider to ease your anxiety, or an expert in cosmetic.</p>
            </div>
            <div className='md:mt-0 md:w-2/5 mt-10 w-full'>
                <SignInButton variant="contained">Call +1800 456 789</SignInButton>
            </div>
        </div>
    );
};

export default CallToAction;
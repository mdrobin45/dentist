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
        <div className='flex p-6 secondary-bg container rounded-3xl justify-between items-center bg-'>
            <div className='w-3/5'>
                <h2 className='text-3xl py-6 font-bold text-white'>Call Us Today for FREE Consultations</h2>
                <p className='text-lg text-white'>Whether you're looking for a family dentist, a caring provider to ease your anxiety, or an expert in cosmetic.</p>
            </div>
            <div className='w-2/5'>
                <SignInButton variant="contained">Call +1800 456 789</SignInButton>
            </div>
        </div>
    );
};

export default CallToAction;
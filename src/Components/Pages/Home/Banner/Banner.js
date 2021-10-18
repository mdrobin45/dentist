import { TextareaAutosize, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import './Banner.css'

const Banner = () =>
{
    const SignInButton = styled(Button)({
        background: '#29D8DB',
        width: '100%',
        padding: '15px 0',
        fontSize: '17px',
        '&:hover': {
          background: 'black'
        }
      });
    return (
        <div className='banner-main'>
            <section className='flex justify-between items-center container'>
                <section className='w-2/4'>
                    <h3 className='text-2xl text-white py-4'>Your Oral Health Matters to Us</h3>
                    <hr className='w-1/4'/>
                    <h1 className='font-bold py-4 text-5xl text-white'>Get Brighter Smile from London's Best Dentists</h1>
                </section>
                <section>
                    <form className='bg-white px-6 pb-20 rounded-lg'>
                        <h2 className='text-gray-700 py-10 text-2xl font-bold text-center'>Book a Free Consultation</h2>
                        <div className='flex my-2 justify-between'>
                            <TextField style={{width:'48%'}} className='bg-gray-100' type='text' label="First Name" id="fullWidth" />
                            <TextField style={{width:'48%'}} className='bg-gray-100' type='text' label="Last Name" id="fullWidth" />
                        </div>
                        <div className='my-2'>
                            <TextField className='bg-gray-100' fullWidth type='number' label="Phone" id="fullWidth" />
                        </div>
                        <div className='my-2'>
                            <TextField className='bg-gray-100' fullWidth type='email' label="Email" id="fullWidth" />
                        </div>
                        <TextareaAutosize
                            className='my-2 border-gray-400 rounded bg-gray-100 border p-3'
                            aria-label="minimum height"
                            minRows={3}
                            placeholder="Message"
                            style={{ width: '100%' }}
                        />
                        <div>
                            <SignInButton size="large" variant="contained">Book Now</SignInButton>
                        </div>
                    </form>
                </section>
            </section>
            
        </div>
    );
};

export default Banner;
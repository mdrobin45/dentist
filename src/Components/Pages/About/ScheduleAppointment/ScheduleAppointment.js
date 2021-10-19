import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import './Schedule.css'

const ScheduleAppointment = () =>
{
    // Custom card details button
    const ScheduleButton = styled(Button)({
        background: '#29D8DB',
        display:'block',
        '&:hover': {
            background: 'black'
        }
    });
    return (
        <div className='bg-blue-600 py-10 mt-6'>
            <div className='md:flex container justify-between items-center'>
                <div className='flex items-center justify-between md:py-0 px-3 py-6'>
                    <FiPhoneCall className='text-2xl text-white' />
                    <h2 className='text-2xl px-2 text-white'>Call Today +123 456 7890</h2>
                </div>
                <div className='flex items-center justify-between md:py-0 px-3 py-6'>
                    <MdLocationOn className='text-3xl text-white' />
                    <h2 className='text-2xl px-2 text-white'>123 Fifth Ave, New York, NY 12004, USA.</h2>
                </div>
                <div>
                    <h2 className='text-2xl text-white'>Schedule a Virtual Appointment</h2>
                </div>
                <div className='mt-10 md:mt-0'>
                    <ScheduleButton variant="contained">Book Appointment</ScheduleButton>
                </div>
            </div>
        </div>
        
    );
};

export default ScheduleAppointment;
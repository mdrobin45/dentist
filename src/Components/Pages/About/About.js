import React from 'react';
import DentalExcellence from '../Home/DentalExcellence/DentalExcellence';
import OurValues from './OurValues/OurValues';
import ScheduleAppointment from './ScheduleAppointment/ScheduleAppointment';

const About = () => {
    return (
        <div>
            <div className='m-auto pt-10 text-center w-2/4'>
                <h2 className='text-5xl text-gray-600 font-bold text-center py-4'>About Us</h2>
                <hr className='m-auto w-2/6' />
                <p className='text-lg py-3'>Our residents come from all parts of the world, bringing you a global expertise coupled with the cutting edge research and knowledge of the University of Rochester Medical Center.</p> 
            </div>
            <DentalExcellence />
            <OurValues />
            <ScheduleAppointment/>
        </div>
    );
};

export default About;
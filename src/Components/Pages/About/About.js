import React from 'react';
import DentalExcellence from '../Home/DentalExcellence/DentalExcellence';
import OurValues from './OurValues/OurValues';
import ScheduleAppointment from './ScheduleAppointment/ScheduleAppointment';

const About = () => {
    return (
        <div>
            <div className='m-auto md:w-2/4 pt-10 text-center'>
                <h2 className='font-bold md:text-left py-6 text-4xl text-center text-gray-700'>About Us</h2>
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
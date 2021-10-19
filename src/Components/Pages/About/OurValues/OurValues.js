import React from 'react';
import './OurValues.css'
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const OurValues = () =>
{
    // Custom card details button
    const AppointmentButton = styled(Button)({
        background: '#29D8DB',
        width: '20%',
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
        <div>
            <div className='m-auto pt-10 text-center w-2/4'>
                <h2 className='text-5xl text-gray-600 font-bold text-center py-4'>Our Values</h2>
                <hr className='m-auto w-2/6' />
                <p className='text-lg py-3'>Our residents come from all parts of the world, bringing you a global expertise coupled with the cutting edge research and knowledge of the University of Rochester Medical Center.</p> 
            </div>

            <div className='grid py-16 container gap-4 grid-cols-2'>
                <ValuesCard
                    number='01'
                    title='Compassion'
                    description='We aim at understanding and caring for patients and colleague’s needs and wants, by attentive listening and putting ourselves in people’s shoes.'
                />
                <ValuesCard
                    number='02'
                    title='Progression'
                    description='We want to keep adapting to different situations, with a desire to learn and striving to be better. Learning new trends and technologies in the industry.'
                />
                <ValuesCard
                    number='03'
                    title='Respect'
                    description='Respect everyone we meet and treat them like we want to be treated. Whether it is a colleague or a patient, understanding and respect matter.'
                />
                <ValuesCard
                    number='04'
                    title='Courage'
                    description='We are the experts in our field. Therefore, it is important to have the courage to do what is right knowing that it is for the better good of the person ahead.'
                />
            </div>
            <div>
                <AppointmentButton variant="contained">Book Appointment</AppointmentButton>
            </div>
        </div>
    );
};


// Our Values card
const ValuesCard = (props) =>
{
    return (
        <div className='border-2 p-8 shadow-lg rounded-2xl'>
            <h3 className='text-lg font-bold'>{props.number}.</h3>
            <h2 className='text-3xl py-3.5 text-gray-700'>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default OurValues;
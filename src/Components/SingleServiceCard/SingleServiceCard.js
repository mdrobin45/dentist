import React from 'react';
import { NavLink } from 'react-router-dom';
import './SingleServiceCard.css'

const SingleServiceCard = (props) =>
{
    const { title, image, description,id } = props.service;
    const shortDescription = description.split(" ");

    return (
        <div className='p-6 rounded shadow-2xl'>
            <img className='rounded-2xl' src={image} alt="Service Thumbnail" />
            <h3 className='font-bold py-3 text-2xl'>{title}</h3>
            <p className='text-lg'>{shortDescription.slice(0, 30).join(' ')}</p>
            <div className='text-center mt-6'>
                <NavLink className='detailButton rounded text-white font-bold text-lg' to={`services/${id}`}>Details</NavLink>
            </div>
        </div>
    );
};

export default SingleServiceCard;
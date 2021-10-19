import React from 'react';
import notFoundIcon from '../../images/notFonnd.png'

const NotFound = () => {
    return (
        <div className='text-center py-44'>
            <img className='m-auto' src={notFoundIcon} alt="Page not found" />
            <h2 className='text-3xl'>Page not found (404 error)</h2>
            <p className='text-lg'>
            If you think what you're looking for should be here, please contact the site owner.
            </p>
        </div>
    );
};

export default NotFound;
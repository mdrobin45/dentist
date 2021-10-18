import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Service = () =>
{
    const [services, setServices] = useState([]);
    const { idService } = useParams();
    console.log(idService);

    // Fetch service
    useEffect(() =>
    {
        fetch('./Services.JSON')
            .then(res => res.json())
            .then(data => console.log(data));
    }, []);
    console.log(services);

    return (
        <div>
            <h2>Service</h2>
        </div>
    )
};

export default Service;
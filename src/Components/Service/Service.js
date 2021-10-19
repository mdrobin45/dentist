import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../Hooks/useServices';

const Service = () =>
{
    const [services] = useServices();
    const { idService } = useParams();

    console.log(idService);

    const service = services?.find(item => item.id === idService);

    console.log(services);

    return (
        <div>
            <h2>{service?.title}</h2>
        </div>
    );
};

export default Service;
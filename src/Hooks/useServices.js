import { useEffect, useState } from "react";

const useServices = () =>
{
    const [services, setServices] = useState([]);
    const [allService, setAllService] = useState([]);
    useEffect(() =>
    {
        fetch('/Services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    useEffect(() =>
    {
        if (services.length) {
           setAllService(services); 
        }
    },[services])

    return [services,allService]
};

export default useServices;
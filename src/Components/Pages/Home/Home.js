import React from 'react';
import Banner from './Banner/Banner';
import CallToAction from './CallToAction/CallToAction';
import DentalExcellence from './DentalExcellence/DentalExcellence';
import GoogleMap from './GoogleMap/GoogleMap';
import ServicesSection from './ServicesSection/ServicesSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <DentalExcellence />
            <CallToAction />
            <ServicesSection/>
            <GoogleMap/>
        </div>
    );
};

export default Home;
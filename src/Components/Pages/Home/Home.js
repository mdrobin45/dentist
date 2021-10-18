import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import CallToAction from './CallToAction/CallToAction';
import DentalExcellence from './DentalExcellence/DentalExcellence';
import GoogleMap from './GoogleMap/GoogleMap';

const Home = () => {
    return (
        <div>
            <Banner />
            <DentalExcellence />
            <CallToAction/>
            <Services />
            <GoogleMap/>
        </div>
    );
};

export default Home;
import React from 'react';
import BusinessSummary from '../../BusinessSummary/BusinessSummary';
import MiddleSection from '../../MiddleSection/MiddleSection';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Parts from '../../Shared/Parts/Parts';
import Testimonials from '../../Shared/Testimonials/Testimonials';

const Home = () => {
      return (
            <div className='bg-purple-100'>
                  <Banner></Banner>
                  <Parts></Parts>

                  <MiddleSection></MiddleSection>
                  <BusinessSummary></BusinessSummary>
                  <Testimonials></Testimonials>

                  <Footer></Footer>
            </div>
      );
};

export default Home;
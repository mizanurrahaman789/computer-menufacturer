import React from 'react';
import BusinessSummary from '../../BusinessSummary/BusinessSummary';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Parts from '../../Shared/Parts/Parts';
import Testimonials from '../../Shared/Testimonials/Testimonials';

const Home = () => {
      return (
            <div className='bg-purple-50'>
                  <Banner></Banner>
                  <Parts></Parts>
                  <BusinessSummary></BusinessSummary>
                  <Testimonials></Testimonials>
                  <Footer></Footer>
            </div>
      );
};

export default Home;
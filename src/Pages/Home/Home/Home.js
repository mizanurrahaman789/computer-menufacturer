import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Parts from '../../Shared/Parts/Parts';
import Testimonials from '../../Shared/Testimonials/Testimonials';

const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <Parts></Parts>
                  <Testimonials></Testimonials>
                  <Footer></Footer>
            </div>
      );
};

export default Home;
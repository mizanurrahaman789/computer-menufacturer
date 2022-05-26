import React from 'react';
import people1 from '../../../image/review/people-1.jpg'
import people2 from '../../../image/review/people-2.jpg'
import people3 from '../../../image/review/people-3.jpg'
import Review from '../Review/Review';

const Testimonials = () => {
      const reviews = [
            {
                  id: 1,
                  name: 'shakilahmed',
                  review: 'fdfdff',
                  location: 'romania',
                  img: people1
            },
            {
                  id: 2,
                  name: 'kolimollah',
                  review: 'sdfdsfds',
                  location: 'aljeria',
                  img: people2
            },
            {
                  id: 3,
                  name: 'hasemmia',
                  review: 'hjkdghsds',
                  location: 'malta',
                  img: people3
            },
      ];
      console.log(reviews)
      return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10'>
                  {
                        reviews.map(review => <Review
                              key={review.id}
                              reviw={review}
                        ></Review>)
                  }
            </div>
      );
};

export default Testimonials;
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
                  review: 'computer keyboard is a peripheral input device modeled after the typewriter',
                  location: 'Romania',
                  img: people1
            },
            {
                  id: 2,
                  name: 'Jhoh Walter',
                  review: 'A monitor usually comprises a visual display',
                  location: 'America',
                  img: people2
            },
            {
                  id: 3,
                  name: 'hasemmia',
                  review: 'hard disk, also called hard disk drive or hard drive, magnetic storage medium for a computer',
                  location: 'Canada',
                  img: people3
            },
      ];
      console.log(reviews)
      return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10'>
                  {
                        reviews.map(reviewsed => <Review
                              key={reviewsed.id}
                              reviewsed={reviewsed}
                        ></Review>)
                  }
            </div>
      );
};

export default Testimonials;
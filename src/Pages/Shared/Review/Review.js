import React from 'react';

const Review = ({ reviewsed }) => {
      const { name, review, img, location } = reviewsed;
      return (

            <div class="card lg:max-w-lg bg-blue-300 shadow-xl">
                  <div class="card-body">
                        <h2 class="card-title text-center">Review</h2>
                        <p>{reviewsed.review}</p>
                        <div class="flex justify-center items-center gap-10  items-center">
                              <div class="avatar w-50">
                                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                          <img src={reviewsed.img} />
                                    </div>
                              </div>
                              <div className='w-50'>
                                    <h5 className='text-xl'>Name: {reviewsed.name}</h5>
                                    <h5>Location: {reviewsed.location}</h5>
                              </div>

                        </div>
                  </div>
            </div>
      );
};

export default Review;
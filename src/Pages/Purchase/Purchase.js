import React from 'react';
import PartsDetails from '../Shared/PartsDetails/PartsDetails';

const Purchase = () => {
      return (
            <div className=''>
                  <PartsDetails></PartsDetails>
                  <div className='text-center mt-10'>
                        <input type="number" placeholder="quantity" class="input input-bordered w-1/5" />
                        <br />
                        <button className="btn btn-active btn-primary w-1/5">Button</button>
                  </div>


            </div>
      );
};

export default Purchase;
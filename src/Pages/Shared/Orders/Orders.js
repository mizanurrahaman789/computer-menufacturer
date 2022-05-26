import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Orders = () => {
      const [user, loading, error] = useAuthState(auth);
      const handleorder = event => {
            event.preventDefault();
            const quintity = event.target.quintity.value;

            console.log(quintity)
      }
      return (
            <div class=" bg-base-200 w-5/5">
                  <div class="hero-content flex-col lg:flex-row-reverse">

                        <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                              <div class="card-body ">

                                    <form onSubmit={handleorder} className='grid grid-cols-1 gap-3 justify-items-center '>
                                          <h1 className='text-bold text-center'>Order Now</h1>
                                          <div class="form-control">

                                                <input type="number" name="quintity" placeholder="your quintity" class="input input-bordered" />
                                          </div>

                                          <div class="form-control">

                                                <input type="text" name="name" disabled value={user?.displayName} class="input input-bordered" />
                                          </div>
                                          <div class="form-control">

                                                <input type="text" name="email" disabled value={user?.email} class="input input-bordered" />
                                          </div>
                                          <div class="form-control">

                                                <input type="number" name="phone" placeholder="your phnoe" class="input input-bordered" />
                                          </div>
                                          <div class="form-control">

                                                <input type="text" placeholder="your adders" class="input input-bordered" />
                                          </div>
                                          <div class="form-control">

                                                <input type="submit" value="submit" class=" btn btn-primary     input input-bordered" />
                                          </div>



                                    </form>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Orders;
import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import useToken from '../../hooks/useToken';

const SignUp = () => {
      const [signInWithGoogle, gUser, gloading, gError] = useSignInWithGoogle(auth);
      const { register, formState: { errors }, handleSubmit } = useForm();

      const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      // const [token] = useToken(user || gUser);

      const navigate = useNavigate();

      let signInError;

      if (loading || gloading || updating) {
            return <Loading></Loading>
      }
      if (error || gError || updateError) {
            signInError = <p className='text-red-500'>{error?.message || gError?.message || updateError?.message}</p>
      }

      if (user || gUser) {
            console.log(user || gUser)
      }

      const onSubmit = async data => {
            console.log(data)
            await createUserWithEmailAndPassword(data.email, data.Password);
            await updateProfile({ displayName: data.name });
            console.log('update done')
            navigate('/dashboard')
      }
      return (
            <div className='flex h-screen justify-center items-center'>
                  <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                              <h2 class="text-center text-2xl font-bold">SignUp</h2>
                              <form onSubmit={handleSubmit(onSubmit)}>

                                    <div class="form-control w-full max-w-xs">
                                          <label class="label">
                                                <span class="label-text">Name</span>
                                          </label>
                                          <input
                                                type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs"
                                                {...register("name", {
                                                      required: {
                                                            value: true,
                                                            message: 'name is require'
                                                      },

                                                })}
                                          />
                                          <label className="label">
                                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-400">{errors.name.message}</span>}


                                          </label>
                                    </div>
                                    <div class="form-control w-full max-w-xs">
                                          <label class="label">
                                                <span class="label-text">Email</span>
                                          </label>
                                          <input
                                                type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs"
                                                {...register("email", {
                                                      required: {
                                                            value: true,
                                                            message: 'email is require'
                                                      },
                                                      pattern: {
                                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                            message: 'provid is valid email'
                                                      }
                                                })}
                                          />
                                          <label className="label">
                                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-400">{errors.email.message}</span>}
                                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-400">{errors.email.message}</span>}

                                          </label>
                                    </div>
                                    <div class="form-control w-full max-w-xs">
                                          <label class="label">
                                                <span class="label-text">Password</span>
                                          </label>
                                          <input
                                                type="password" placeholder="Your Password" class="input input-bordered w-full max-w-xs"
                                                {...register("password", {
                                                      required: {
                                                            value: true,
                                                            message: 'password is require'
                                                      },
                                                      minLength: {
                                                            value: 6,
                                                            message: 'Must be 6 charecters or longar'
                                                      }
                                                })}
                                          />
                                          <label class="label">
                                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                                          </label>
                                    </div>
                                    {signInError}
                                    <input className='btn w-full max-w-xs text-white' type="submit" value="SignUp" />
                              </form>
                              <small className='text-center'>
                                    <p>Already have an account? <Link className='text-primary' to="/login"> Please login</Link></p>
                              </small>
                              <div class="divider">OR</div>
                              <button
                                    onClick={() => signInWithGoogle()}
                                    class="btn btn-outline">Continue with Google</button>
                        </div>
                  </div>
            </div>
      );
};

export default SignUp;
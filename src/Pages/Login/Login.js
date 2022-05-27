import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Login = () => {
      const [signInWithGoogle, gUser, gloading, gError] = useSignInWithGoogle(auth);
      const { register, formState: { errors }, handleSubmit } = useForm();

      const [
            signInWithEmailAndPassword,
            user,
            loading,
            error,
      ] = useSignInWithEmailAndPassword(auth);


      const [token] = useToken(user || gUser);

      let signInError;
      const navigate = useNavigate();
      const location = useLocation();
      let from = location.state?.from?.pathname || "/";

      if (loading || gloading) {
            return <Loading></Loading>
      }
      if (error || gError) {
            signInError = <p className='text-red-500'>{error?.message || gError?.message}</p>
      }

      if (token) {
            navigate(from, { replace: true });
      }

      const onSubmit = (data) => {
            console.log(data);
            signInWithEmailAndPassword(data.email, data.password);
      }
      return (
            <div className='flex h-screen justify-center items-center'>
                  <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                              <h2 class="text-center text-2xl font-bold">Login</h2>
                              <form onSubmit={handleSubmit(onSubmit)}>

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
                                    <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                              </form>
                              <small className='text-center'>
                                    <p>New to computer parts? <Link className='text-primary' to="/signUp"> Create New Account</Link></p>
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

export default Login;
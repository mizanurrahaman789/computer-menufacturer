import React from 'react';

const BusinessSummary = () => {
      return (
            <div className="hero-content flex justify-center items-center text-center gap-2 stats shadow  my-10 mx-10 text-white font-bold ">

                  <div className="stat bg-info ">
                        <div className="stat-figure text-primary">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">we served</div>
                        <div className="stat-value text-primary">100K +</div>
                        <div className="stat-desc">customers</div>
                  </div>

                  <div className="stat bg-info ">
                        <div className="stat-figure text-secondary">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Annual Revenue</div>
                        <div className="stat-value text-secondary">120M+ </div>
                        <div className="stat-desc">company’s annual revenue.</div>
                  </div>

                  <div className="stat bg-info">
                        <div className="stat-figure text-secondary">
                              <div className="avatar online">
                                    <div className="w-16 rounded-full">
                                          <img src="https://api.lorem.space/image/face?w=128&h=128" alt='' />
                                    </div>
                              </div>
                        </div>
                        <div className="stat-title">Reviews</div>
                        <div className="stat-value">685K+</div>
                        <div className="stat-desc text-secondary">Reviews show up</div>
                  </div>

            </div>
      );
};

export default BusinessSummary;
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
      return (
            <div className=''>
                  <footer className="footer p-10 bg-neutral text-neutral-content">
                        <div>
                              <span className="footer-title">Services</span>
                              <Link className="link link-hover" to="#">Branding</Link>
                              <Link className="link link-hover" to="#">Design</Link>
                              <Link className="link link-hover" to="#">Marketing</Link>
                              <Link className="link link-hover" to="#">Advertisement</Link>
                        </div>
                        <div>
                              <span className="footer-title">Company</span>
                              <Link className="link link-hover" to="#">About us</Link>
                              <Link className="link link-hover" to="#">Contact</Link>
                              <Link className="link link-hover" to="#">Jobs</Link>
                              <Link className="link link-hover" to="#">Press kit</Link>
                        </div>
                        <div>
                              <span className="footer-title">Legal</span>
                              <Link className="link link-hover" to="#">Terms of use</Link>
                              <Link className="link link-hover" to="#">Privacy policy</Link>
                              <Link className="link link-hover" to="#">Cookie policy</Link>
                        </div>
                  </footer>
            </div>

      );
};

export default Footer;
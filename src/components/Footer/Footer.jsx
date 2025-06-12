import React from 'react';

const Footer = () => {
    return (
        <div>
            <div>
                <div className='text-center space-y-4 mt-16 text-black'>
                    <h2 className='text-4xl font-bold'>Gadget Heaven</h2>
                    <p className=''>Leading the way in cutting-edge technology and innovation.</p>
                </div>
                
                <footer className="footer text-black grid-cols-3 p-10">
                    <nav className='mx-auto'>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className='mx-auto'>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className='mx-auto'>
                        <h6 className="footer-title">Social</h6>
                        <a className="link link-hover">Twitter</a>
                        <a className="link link-hover">Instagram</a>
                        <a className="link link-hover">Facebook</a>
                        <a className="link link-hover">GitHub</a>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
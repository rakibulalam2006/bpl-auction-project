import React from 'react';
import footerImg from '../../assets/bg-shadow.png'
import btn from '../../assets/Frame 11.png'


const Footer = () => {
    return (
        <div className='relative'>
            <div className='w-[820px] h-[240px] mx-auto bg-[#FFFFFF15] p-2 mt-5 border border-[#fb2c36] rounded-lg absolute -top-30 left-1/2 transform -translate-x-1/2  md:w-3/4 shadow-lg '>
                <div className="w-[800px] h-[220px] border rounded-xl mx-auto  bg-white text-center my-auto" style={{ backgroundImage: `url(${footerImg})` }}>
                    <div className='p-10'>
                        <h1 className='text-3xl font-bold mt-3'>Subscribe to our Newsletter</h1>
                        <p className='text-[16px] text-[#13131370] mt-3'>Get the latest updates and news right in your inbox!</p>
                        <div className='flex items-center justify-center mt-3'>
                            <input className='border border-[#99a1af] rounded-lg w-[220px] h-[40px]' type="text" placeholder='enter your email' />
                            <button><img className='w-[120px] h-[40px] ml-3' src={btn} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[600px] bg-[#06091A]  '>
                <div className='text-white '>
                    <div className='container mx-auto px-6 mt-28 grid md:grid-cols-3 gap-10'>
                        <h3>About Us</h3>
                        <p>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-3">Subscribe</h3>
                        <p className="text-gray-400 mb-3">
                            Subscribe to our newsletter for the latest updates.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-3 py-2 rounded-lg border w-full text-gray-800 focus:outline-none"
                            />
                            <button className="px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-pink-400 to-yellow-300 text-black hover:opacity-90">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
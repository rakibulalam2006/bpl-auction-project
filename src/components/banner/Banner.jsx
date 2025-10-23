import React from 'react';
import bannerImg from "../../assets/banner-main.png"
import bannerBg from "../../assets/bg-shadow.png"

const Banner = () => {
    return (
        <div className="w-[1050px] h-[420px] border rounded-xl mx-auto flex items-center justify-center bg-black" style={{backgroundImage:`url(${bannerBg})`}}>
            <div className='mx-auto'>
                <img className='mx-auto mt-3' src={bannerImg} alt="" />
                <div className='text-center'>
                    <h2 className='text-3xl text-white font-bold mt-3'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                    <span className='font-semibold text-[#f3f4f6] mt-3'>Beyond Boundaries Beyond Limits</span>
                </div>
                <div className='border border-[#E7FE29] p-2 w-[163px] h-14 rounded-lg mx-auto mt-3'>
                    <button className='bg-[#E7FE29] p-2 font-bold rounded-lg grid place-items-center'>Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
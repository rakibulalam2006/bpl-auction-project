import React from 'react';
import navImg from '../assets/logo-footer.png'
import dolarImg from "../assets/coin..jpg"

const Navbar = ({ availableBalance }) => {
    return (
        <div>
            <div className="navbar flex max-w-[1050px] mx-auto mt-5">
                <div className="flex-1">
                    <a className="text-xl">
                        <img className='w-[60px] h-[60px]' src={navImg} alt="" />
                    </a>
                </div>
                <div className="flex items-center">
                    <div className='text-[#99a1af]'>
                        <a className='mr-3' href="">Home</a>
                        <a className='mr-3' href="">Fixture</a>
                        <a className='mr-3' href="">Teams</a>
                        <a className='mr-3' href="">Schedules</a>
                    </div>
                    <span className='mr-1'>{availableBalance}</span>
                    <span className='mr-1'>Coin</span>
                    <img className='w-8 h-8' src={dolarImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
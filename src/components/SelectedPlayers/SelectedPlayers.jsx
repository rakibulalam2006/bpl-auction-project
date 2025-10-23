import React from 'react';
import SelectedCard from './SelectedCard';

const SelectedPlayers = ({ purchasedPlayers, removePlayer,handleClick }) => {
    // console.log(purchasedPlayers)
    
    return (
        <div className='max-w-[1050px] mx-auto mt-5'>
            {
                purchasedPlayers.map(player => <SelectedCard player={player} removePlayer={removePlayer}></SelectedCard>)
            }

            <div>
                <button onClick={handleClick} className='border-1 border-[#99a1af] mt-4 px-6 py-3 rounded-lg text-xl font-bold hover:bg-[#E7FE29] '>Add more</button>
            </div>
        </div>
    );
};



export default SelectedPlayers;
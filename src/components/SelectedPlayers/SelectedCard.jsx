import React from 'react';

const SelectedCard = ({player,removePlayer}) => {
    // console.log(player)

    const handleRemove = () =>{
        removePlayer(player)
    }

  
    return (
        <div className='border-2 border-[#d1d5dc] p-3 flex justify-between items-center rounded-lg mt-4'>
            <div className='flex'>
                <img className='w-12 h-12 rounded-lg' src={player.player_img}alt="" />
                <div className='ml-2'>
                    <h2 className='font-bold'>{player.player_name}</h2>
                    <p className='text-xs text-[#13131360] font-semibold'>{player.playing_role}</p>
                </div>
            </div>
            <div onClick={handleRemove}>
                <img className='w-[40px] h-[40px]' src="https://i.ibb.co/bRzVCbZt/13386493.png" alt="" />
            </div>
        </div>
    );
};

export default SelectedCard;
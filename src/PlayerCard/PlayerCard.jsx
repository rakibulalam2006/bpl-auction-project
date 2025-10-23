import React, { useState } from 'react';
import userImg from "../assets/user-1.png";
import flagImg from "../assets/report-1.png";
import { toast } from 'react-toastify';

const PlayerCard = ({player,setAvailableBalance,availableBalance,purchasedPlayers,setPurchasePlayer}) => {
    const [isSelected,setIsSelected] = useState(false);

    const handleSelected = (playerData) =>{
        const playerPrice = parseInt(playerData.price)
        if(availableBalance<playerPrice){
            toast("You have not enough coins!!")
            return
        }
        if(purchasedPlayers.length===6){
            toast("6 player already selected!")
            return
        }
        setIsSelected(true)
        setAvailableBalance(availableBalance-playerPrice);
        setPurchasePlayer([...purchasedPlayers,playerData])
        toast("Player purchased!")
    }
    return (
        <div className=" card rounded-xl bg-base-100 w-80 h-auto shadow-sm p-4">
            <figure className='w-full h-[300px]'>
                <img className='rounded-lg'
                    src={player.player_img}
                    alt="Shoes" />
            </figure>
            <div className="card-body mt-2">
                <div className='flex items-center'>
                    <img className='w-6 h-6' src={userImg} alt="" /> <h2 className="text-xl font-semibold ml-2">{player.player_name}</h2>
                </div>
                <div className='flex justify-between mt-4 border-b-1 border-[#e5e7eb] pb-2'>
                    <div className='flex items-center'>
                        <img className='w-5 h-5' src={flagImg} alt="" />
                        <span className='ml-2'>{player.player_country}</span>
                    </div>
                    <button className="border-1 border-[#d2d7df] p-2 rounded-lg">{player.playing_role}</button>
                </div>
                <div className='flex justify-between font-bold'>
                    <span>Rating</span>
                    <span>{player.rating}</span>
                </div>
                <div className='flex justify-between mt-4'>
                    <span className='font-bold'>{player.batting_style}</span>
                    <span className='text-[#747171]'>{player.bowling_style}</span>
                </div>
                <div className="flex card-actions justify-between items-center mt-4">
                    <p>Price:${player.price}</p>
                    <button disabled={isSelected} onClick={()=>{handleSelected(player)}} className="btn p-2 rounded-[6px] border-1 border-[#d2d7df]">{isSelected===true?"Selected":"Choose player"}</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
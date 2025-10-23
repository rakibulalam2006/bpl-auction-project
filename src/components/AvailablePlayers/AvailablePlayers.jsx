import React, { use } from 'react';

import PlayerCard from "../../PlayerCard/PlayerCard";


const AvailablePlayers = ({ playersPromise,setAvailableBalance,availableBalance,purchasedPlayers,setPurchasePlayer}) => {
    const playerData = use(playersPromise)
    // console.log(playerData)
    return (
        <div className='max-w-[1050px] mx-auto grid grid-cols-3 gap-y-6 mt-5 mb-48'>
            {
                playerData.map(player =><PlayerCard key={player.player_id} purchasedPlayers={purchasedPlayers} setPurchasePlayer={setPurchasePlayer} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>
                )
            }
        </div>

    );
};

export default AvailablePlayers;
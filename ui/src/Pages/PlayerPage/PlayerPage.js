import React from 'react'
import { useParams } from 'react-router-dom';
import PlayerInformationBanner from './components/PlayerInformationBanner/PlayerInformationBanner';

function PlayerPage() {

  let { playerName } = useParams();


  // I want all my api's to run here

  return (
    <div>
        <PlayerInformationBanner playerName={playerName}/>
    </div>


    //top playerInfo Component
    //chart 
    //right side stats 
    //right side buy stock

  )
}

export default PlayerPage
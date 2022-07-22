import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import PlayerInformationBanner from './components/PlayerInformationBanner/PlayerInformationBanner';
import styled from 'styled-components';
import PlayerStats from './components/PlayerStatsContainer/PlayerStats';
import PlayerChart from './components/PlayerChart/PlayerChart';
import BuyStock from './components/BuyStock/BuyStock';

const PlayerPageContainer = styled.div`
  /* width: 100%;
  height: 100%; */
  display: flex;
  padding: 5%;
  flex-direction: column;
`;

const PlayerPageChartStatRow = styled.div`
  /* width: 100%;
  height: 100%; */
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const RightPlayerStatColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`

function PlayerPage() {
  let { playerName } = useParams();
  let {playerId} = useParams();

  // I want all my api's to run here

  return (
    <PlayerPageContainer>
      <PlayerInformationBanner playerName={playerName} playerId={playerId} />
      <PlayerPageChartStatRow>
        <PlayerChart />
        <RightPlayerStatColumn>
          <PlayerStats playerName={playerName} playerId={playerId}/>
          <BuyStock />
        </RightPlayerStatColumn>
      </PlayerPageChartStatRow>
    </PlayerPageContainer>

    //top playerInfo Component
    //chart
    //right side stats
    //right side buy stock
  );
}

export default PlayerPage;

import React from 'react';
import { useParams } from 'react-router-dom';
import PlayerInformationBanner from './components/PlayerInformationBanner/PlayerInformationBanner';
import styled from 'styled-components';
import PlayerStats from './components/PlayerStatsContainer/PlayerStats';
import PlayerChart from './components/PlayerChart/PlayerChart';

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

function PlayerPage() {
  let { playerName } = useParams();

  // I want all my api's to run here

  return (
    <PlayerPageContainer>
      <PlayerInformationBanner playerName={playerName} />
      <PlayerPageChartStatRow>
        <PlayerChart />
        <PlayerStats />
      </PlayerPageChartStatRow>
    </PlayerPageContainer>

    //top playerInfo Component
    //chart
    //right side stats
    //right side buy stock
  );
}

export default PlayerPage;

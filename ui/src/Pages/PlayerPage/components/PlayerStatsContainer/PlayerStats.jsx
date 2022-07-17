import React from 'react';
import styled from 'styled-components';


const PlayerStatsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: left;
  background-color: #0B0E16;
  color: white;
  display: flex;
  padding: 3%;
  border-radius: 16px;
  opacity: 95%;
`;

const PlayerStatRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 7px;
`

const PlayerStatName = styled.div`
    margin-right: 10px;
`

const PlayerStatButton = styled.button`
    width: 100%;
    background-color: white;
    color: black;
    height: 40px;
    margin-top: 10px;
    border-radius: 10px;
    font-size: 15px;
`




const PlayerStatContainer = ({statName, statValue}) => {
    return (
        <PlayerStatRow>
            <PlayerStatName>{statName}</PlayerStatName>
            <div>{statValue}</div>
        </PlayerStatRow>
    )
}

function PlayerStats() {
  return (
    <PlayerStatsContainer>
      <div>Player Stats</div>
      {/* divider?? */}
      <PlayerStatContainer statName={"Batting Average: "} statValue={.304}/>
      <PlayerStatContainer statName={"Home Runs: "} statValue={10}/>
      <PlayerStatContainer statName={"RBI: "} statValue={55}/>
      <PlayerStatContainer statName={"OBP: "} statValue={.400}/>
      <PlayerStatContainer statName={"SLG: "} statValue={.454}/>
      <PlayerStatContainer statName={"OPS: "} statValue={.854}/>
      <PlayerStatContainer statName={"Games Played: "} statValue={78}/>
      <PlayerStatContainer statName={"At Bats: "} statValue={276}/>
      
      <PlayerStatButton type='button'>
        More Stats
      </PlayerStatButton>
      

    </PlayerStatsContainer>
  );
}

export default PlayerStats;

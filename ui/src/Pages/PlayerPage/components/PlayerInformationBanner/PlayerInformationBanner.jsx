import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const PlayerInformationBannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  background-color: #0B0E16;
  color: white;
  display: flex;
  padding: 1% 3%;
  border-radius: 16px;
  opacity: 95%;
`;

// const LeftPlayerBannerContainer = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

const PlayerImage = styled.img`
  border-radius: 10000px;
  border: white 1px solid;
  width: 100px;
  height: auto;
`;

const PlayerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 20%;
`;

const PlayerName = styled.p`
  color: white;
`;

const PlayerTeam = styled.p`
  color: white;
`;

const PlayerDivider = styled.p`
  margin: 0px 10px;
`

const PlayerPosition = styled.p`
  color: white;
`;

const RightPlayerBannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1%;
  width: 100%;
`;

const PlayerStockStatsContianer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const PlayerStockStatContianer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const PlayerStockStatText = styled.p`
  color: white;
`;

const PlayerTeamPositionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PlayerStockStat = ({ title, subtitle }) => {
  return (
    <PlayerStockStatContianer>
      <PlayerStockStatText> {title}</PlayerStockStatText>
      <PlayerStockStatText> {subtitle}</PlayerStockStatText>
    </PlayerStockStatContianer>
  );
};

export default function PlayerInformationBanner(props) {
  const playerName  = props.playerName;
  const [playerInformationObj, setPlayerInformationObj] = useState({});

  useEffect(() => {
    getPlayerInformation(playerName);
  }, [])
  

  const getPlayerInformation = (playerName) => {
    const requestOptions = {
      method: 'GET',
    };
    fetch(`http://localhost:8080/get-player-information/${playerName}`, requestOptions)
      .then(async (response) => {
        let dataPromise = response.json();
        let data = await dataPromise;
        setPlayerInformationObj(data);
      })
      .catch((error) => {
        console.log('There was an error!', error);
      });
  };

  return (
    //flex direction row
    <PlayerInformationBannerContainer>
      <PlayerImage
        src={`https://img.mlbstatic.com/mlb-photos/image/upload/w_180,q_100/v1/people/${playerInformationObj.id}/headshot/silo/current`}
        alt="new"
      />
      <RightPlayerBannerContainer>
        <PlayerInfoContainer>
          <PlayerName>{playerName}</PlayerName>
          <PlayerTeamPositionContainer>
            <PlayerTeam>{playerInformationObj.currentTeam}</PlayerTeam>
            <PlayerDivider>|</PlayerDivider>
            <PlayerPosition>{playerInformationObj.primaryPosition}</PlayerPosition>
          </PlayerTeamPositionContainer>
        </PlayerInfoContainer>
        <PlayerStockStatsContianer>
          <PlayerStockStat title={"Age"} subtitle={playerInformationObj.currentAge} />
          <PlayerStockStat title={'Height'} subtitle={playerInformationObj.height} />
          <PlayerStockStat title={'Weight'} subtitle={playerInformationObj.weight} />
          <PlayerStockStat title={'Birth Country'} subtitle={playerInformationObj.birthCountry} />
          <PlayerStockStat title={'Bat Side'} subtitle={playerInformationObj.batSide} />
          <PlayerStockStat title={'Pitch Hand'} subtitle={playerInformationObj.pitchHand} />
        </PlayerStockStatsContianer>
      </RightPlayerBannerContainer>
    </PlayerInformationBannerContainer>
  );
}

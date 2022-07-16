import React from 'react';
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
  margin-right: 30px;
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
  let { playerName } = props;

  return (
    //flex direction row
    <PlayerInformationBannerContainer>
      <PlayerImage
        src={`https://img.mlbstatic.com/mlb-photos/image/upload/w_180,q_100/v1/people/664034/headshot/silo/current`}
        alt="new"
      />
      <RightPlayerBannerContainer>
        <PlayerInfoContainer>
          <PlayerName>{playerName}</PlayerName>
          <PlayerTeamPositionContainer>
            <PlayerTeam>Seattle Mariners</PlayerTeam>
            <PlayerDivider>|</PlayerDivider>
            <PlayerPosition>1B</PlayerPosition>
          </PlayerTeamPositionContainer>
        </PlayerInfoContainer>
        <PlayerStockStatsContianer>
          <PlayerStockStat title={'Age'} subtitle={28} />
          <PlayerStockStat title={'Height'} subtitle={"6'4"} />
          <PlayerStockStat title={'Weight'} subtitle={198} />
          <PlayerStockStat title={'Birth Country'} subtitle={'Seattle'} />
          <PlayerStockStat title={'Bat Side'} subtitle={'Left'} />
          <PlayerStockStat title={'Pitch Hand'} subtitle={'Left'} />
        </PlayerStockStatsContianer>
      </RightPlayerBannerContainer>
    </PlayerInformationBannerContainer>
  );
}

import React from 'react';
import styled from 'styled-components';

const PlayerInformationBannerContainer = styled.div`
  background-color: black;
  color: white;
  display: flex;
  margin: 5%;
  border-radius: 16px;
`;

export default function PlayerInformationBanner(props) {
  let { playerName } = props;

  return (
    //flex direction row
    <PlayerInformationBannerContainer>
      <img
        src={`https://img.mlbstatic.com/mlb-photos/image/upload/w_180,q_100/v1/people/664034/headshot/silo/current`}
        alt="new"
      />
      <div>
        {playerName}
        Seattle Mariners
        1B
      </div>
      <div>
        Age
        Height
        Weight
        Birth Country 
        Bat Side 
        Pitch Hand 
      </div>
    </PlayerInformationBannerContainer>
  );
}

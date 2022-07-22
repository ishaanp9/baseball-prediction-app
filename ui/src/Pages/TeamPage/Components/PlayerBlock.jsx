import React from 'react';
import styled from 'styled-components';

const PlayerImage = styled.img`
  border-radius: 10000px;
  border: white 1px solid;
  width: 100px;
  height: auto;
`;

const PlayerBlockContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0B0E16;
    color: white;
    padding: 3%;
    width: 20%;
    border-radius: 10px;
`

const PlayerName = styled.p`
    margin-top: 7px;
    font-size: 20px;
`

const PlayerPosition = styled.p`
    margin-top: 5px;
`

function PlayerBlock(props) {
  console.log(props);

  return ( 
    <PlayerBlockContainer>
      <PlayerImage
        src={`https://img.mlbstatic.com/mlb-photos/image/upload/w_180,q_100/v1/people/${props.id}/headshot/silo/current`}
        alt="new"
      />
      <PlayerName>{props.name}</PlayerName>
      <PlayerPosition>{props.position}</PlayerPosition>
    </PlayerBlockContainer>
  );
}

export default PlayerBlock;

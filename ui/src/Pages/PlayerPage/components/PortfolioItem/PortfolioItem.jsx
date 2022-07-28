import React from 'react';
import styled from 'styled-components';

const PortfolioItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;

const PortfolioItemItem = styled.p`
    margin-right: 20px;
`

function PortfolioItem(props) {
  const {
    playerId,
    playerName,
    valueBoughtAt,
    numShares,
    totalValue,
    timeBought,
  } = props;

  return (
    <PortfolioItemContainer>
      <PortfolioItemItem>{playerName}</PortfolioItemItem>
      <PortfolioItemItem>{valueBoughtAt}</PortfolioItemItem>
      <PortfolioItemItem>{numShares}</PortfolioItemItem>
      <PortfolioItemItem>{totalValue}</PortfolioItemItem>
      <PortfolioItemItem>
        {timeBought.substring(0, timeBought.lastIndexOf('/'))}
      </PortfolioItemItem>
    </PortfolioItemContainer>
  );
}

export default PortfolioItem;

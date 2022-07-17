import React from 'react';
import styled from 'styled-components';

const BuyStockContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: left;
  background-color: #0b0e16;
  color: white;
  display: flex;
  padding: 3%;
  border-radius: 16px;
  opacity: 95%;
`;

const BuyStockTitleText = styled.p`
  margin-bottom: 7px;
`;

const BuyStockDivider = styled.hr`
  margin-bottom: 10px;
`;

const BuyStockButton = styled.button`
  width: 100%;
  background-color: white;
  color: black;
  height: 40px;
  margin-top: 10px;
  border-radius: 10px;
  font-size: 15px;
`;

function BuyStock() {
  return (
    <BuyStockContainer>
      <BuyStockTitleText>Invest in Ty France</BuyStockTitleText>
      <BuyStockDivider />
      <BuyStockTitleText>Order Type:</BuyStockTitleText>
      <BuyStockTitleText>Invest In:</BuyStockTitleText>
      <BuyStockTitleText>Amount:</BuyStockTitleText>
      <BuyStockDivider />
      <BuyStockTitleText>Est Quantity:</BuyStockTitleText>
      <BuyStockButton type="button">Sign up to Buy</BuyStockButton>
    </BuyStockContainer>
  );
}

export default BuyStock;

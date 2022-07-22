import React, {useState} from 'react';
import styled from 'styled-components';
import ConfirmDialog from '../../../../components/Modals/Modals';

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
  cursor: pointer;
`;

function BuyStock(props) {

  const playerName = props.playerName;
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);

  return (
    <BuyStockContainer>
      <BuyStockTitleText>Invest in {playerName}</BuyStockTitleText>
      <BuyStockDivider />
      <BuyStockTitleText>Order Type:  {'      '} Market Order</BuyStockTitleText>
      {/* Shares or pure cash */}
      <BuyStockTitleText>Invest In:</BuyStockTitleText>
      <BuyStockTitleText>Amount:</BuyStockTitleText>
      <BuyStockDivider />
      {/* Shares : 10 ($80) */}
      <BuyStockTitleText>Est Quantity:</BuyStockTitleText>
      {/* <BuyStockButton type="button">Sign up to Buy</BuyStockButton> */}
      <BuyStockButton type="button" onClick={() => setShowModal(true)}>Buy</BuyStockButton>
      {showModal ? <ConfirmDialog open={(isOpen) => setShowModal(isOpen)} state={showModal} estQuantity={"Shares: 10 ($80)"} playerName={playerName}/> : null}
      {/* should make a confirm model */}
    </BuyStockContainer>
  );
}

export default BuyStock;

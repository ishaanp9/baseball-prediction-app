import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PortfolioItem from '../PlayerPage/components/PortfolioItem/PortfolioItem';

function PortfolioPage() {
  // get from database

  const [portfolioObject, setPortfolioObject] = useState([]);

  useEffect(() => {
    getAllBoughtStocks(1234567);
  }, []);

  const getAllBoughtStocks = (uid) => {
    const requestOptions = {
      method: 'GET',
    };
    fetch(`http://localhost:8080/get-bought-stocks/${uid}`, requestOptions)
      .then(async (response) => {
        let dataPromise = response.json();
        let data = await dataPromise;
        setPortfolioObject(data);
      })
      .catch((error) => {
        console.log('There was an error!', error);
      });
  };

  return (
    <div>
      <div>
        {portfolioObject.map(
          ({
            playerId,
            playerName,
            valueBoughtAt,
            numShares,
            totalValue,
            timeBought,
          }) => (
            <ul>
              <li key={playerId} style={{listStyle: 'none'}}>
                <PortfolioItem
                  playerId={playerId}
                  playerName={playerName}
                  valueBoughtAt={valueBoughtAt}
                  numShares={numShares}
                  totalValue={totalValue}
                  timeBought={timeBought}
                />
              </li>
            </ul>
          )
        )}
      </div>
    </div>
  );
}

export default PortfolioPage;

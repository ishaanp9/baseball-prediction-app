import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PortfolioPage() {
  // get from database

  useEffect(() => {
    getAllBoughtStocks(1234567);
  }, [])
  

  const getAllBoughtStocks = (uid) => {
    const requestOptions = {
      method: 'GET',
    };
    fetch(`http://localhost:8080/get-bought-stocks/${uid}`, requestOptions)
      .then(async (response) => {
        let dataPromise = response.json();
        let data = await dataPromise;
        console.log(data);
      })
      .catch((error) => {
        console.log('There was an error!', error);
      });
  };

  return <div>Hello</div>;
}

export default PortfolioPage;

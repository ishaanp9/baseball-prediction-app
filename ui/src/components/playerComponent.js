import React, { useEffect, useState } from 'react';

function PlayerComponent(props) {
  const [id, setId] = useState();
  const [primaryNumber, setPrimaryNumber] = useState('');
  const [primaryPosition, setPrimaryPosition] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [currentAge, setCurrentAge] = useState();
  const [birthCountry, setBirthCountry] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState();
  const [currentTeam, setCurrentTeam] = useState('');
  const [batSide, setBatSide] = useState('');
  const [pitchHand, setPitchHand] = useState('');

  useEffect(() => {
    fetchPlayerInformation();
  });

  const fetchPlayerInformation = () => {
    const requestOptions = {
      method: 'GET',
    };
    fetch(
      `http://localhost:8080/get-player-information/${props.playerName}`,
      requestOptions
    )
      .then(async (response) => {
        const data = await response.json();
        setId(data['id']);
        setPrimaryNumber(data['primaryNumber']);
        setPrimaryPosition(data['primaryPosition']['abbreviation']);
        setBirthDate(data['birthDate']);
        setCurrentAge(data['currentAge']);
        setBirthCountry(data['birthCountry']);
        setHeight(data['height']);
        setWeight(data['weight']);
        setCurrentTeam(data['currentTeam']['name']);
        setBatSide(data['batSide']['description']);
        setPitchHand(data['pitchHand']['description']);
        // temp until bug is fixed regarding duplicate entries in mongo
      })
      .catch((error) => {
        console.log('There was an error!', error);
      });
  };

  return (
    <div>
      <div>{props.playerName}</div>
      <img
        src={`https://img.mlbstatic.com/mlb-photos/image/upload/w_180,q_100/v1/people/${id}/headshot/silo/current`}
        alt="new"
      />
      <div>{primaryNumber}</div>
      <div>{primaryPosition}</div>
      <div>{birthCountry}</div>
      <div>{birthDate}</div>
      <div>{height}</div>
      <div>{weight}</div>
      <div>{currentTeam}</div>
      <div>{batSide}</div>
      <div>{pitchHand}</div>
      <div>{currentAge}</div>
    </div>
  );
}

export default PlayerComponent;

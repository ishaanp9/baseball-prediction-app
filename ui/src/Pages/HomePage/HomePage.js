import React, { useState, useEffect } from 'react';
import { HomePageContainer } from './HomePage.jsx';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { createFilterOptions } from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import Profile from '../../profile.js';

function HomePage() {
  const navigate = useNavigate();

  //currently an array because autocomplete takes array not obj (may need to change later)
  const [playerInformationObj, setPlayerInformationObj] = useState([]);

  useEffect(() => {
    getAllPLayers();
  }, []);

  //limit to autocomplete
  const filterOptions = createFilterOptions({
    limit: 10,
  });

  const getAllPLayers = () => {
    const requestOptions = {
      method: 'GET',
    };
    fetch(`http://localhost:8080/get-all-players`, requestOptions)
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
    //search bar
    // risers
    //fallers
    //etc
    <HomePageContainer>
      HomePage
      <Autocomplete
        id="player-select"
        freeSolo
        filterOptions={filterOptions}
        sx={{ width: 800 }}
        options={playerInformationObj}
        autoHighlight
        loading='true'
        getOptionLabel={(option) => option.fullName}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
            {...props}
            key={option.id}
          >
            <img
              loading="lazy"
              width="50"
              src={`https://img.mlbstatic.com/mlb-photos/image/upload/w_180,q_100/v1/people/${option.id}/headshot/silo/current`}
              srcSet={`https://img.mlbstatic.com/mlb-photos/image/upload/w_180,q_100/v1/people/${option.id}/headshot/silo/current`}
              alt=""
            />
            {option.fullName}
          </Box>
        )}
        onChange={(e) => {
          const element = e.target;
          const value = element.innerHTML;
          let splitValues = value.split('/');
          let pId = splitValues[9];
          navigate(
            `./player/${pId}/${value.substring(value.lastIndexOf('>') + 1)}`
          );
        }}
        noOptionsText={<p>No MLB Player</p>}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Pick a Player"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'off', // disable autocomplete and autofill
            }}
          />
        )}
      />
      <Profile/>
    </HomePageContainer>
  );
}

export default HomePage;

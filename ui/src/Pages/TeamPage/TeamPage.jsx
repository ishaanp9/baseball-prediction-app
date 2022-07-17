import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import PlayerBlock from './Components/PlayerBlock';

function TeamPage() {
  let { teamName } = useParams();
  const [teamInformationObj, setTeamInformationObj] = useState({});

  useEffect(() => {
    getAllPLayersFromTeam(teamName);
  }, []);

  const getAllPLayersFromTeam = (teamName) => {
    const requestOptions = {
      method: 'GET',
    };
    fetch(
      `http://localhost:8080//get-players-on-team/${teamName}`,
      requestOptions
    )
      .then(async (response) => {
        let dataPromise = response.json();
        let data = await dataPromise;
        await setTeamInformationObj(data);
      })
      .catch((error) => {
        console.log('There was an error!', error);
      });
  };

  return (
    <div>
      {teamName}
      <div>
        <PlayerBlock
          id={608385}
          name={"Jesse Winker"}
          position={"LF"}
        />
      </div>
    </div>
  );
}

export default TeamPage;

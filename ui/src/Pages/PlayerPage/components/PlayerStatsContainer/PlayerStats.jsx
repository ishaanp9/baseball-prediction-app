import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PlayerStatsContainer = styled.div`
  margin-top: 20px;
  width: 25%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: left;
  background-color: #0b0e16;
  color: white;
  display: flex;
  padding: 1% 3%;
  border-radius: 16px;
  opacity: 95%;
`;

const PlayerStatRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 7px;
`;

const PlayerStatName = styled.div`
  margin-right: 10px;
`;

const PlayerStatButton = styled.button`
  width: 100%;
  background-color: white;
  color: black;
  height: 40px;
  margin-top: 10px;
  border-radius: 10px;
  font-size: 15px;
`;

const PlayerStatContainer = ({ statName, statValue }) => {
  return (
    <PlayerStatRow>
      <PlayerStatName>{statName}</PlayerStatName>
      <div>{statValue}</div>
    </PlayerStatRow>
  );
};

function PlayerStats(props) {
  const playerName = props.playerName;

  const [playerStateObj, setPlayerStatObj] = useState({});

  useEffect(() => {
    getPlayerStats(playerName);
  }, []);

  const getPlayerStats = (playerName) => {
    const requestOptions = {
      method: 'GET',
    };
    fetch(
      `http://localhost:8080/get-player-stats/${playerName}`,
      requestOptions
    )
      .then(async (response) => {
        let dataPromise = response.json();
        let data = await dataPromise;
        setPlayerStatObj(data);
      })
      .catch((error) => {
        console.log('There was an error!', error);
      });
  };

  return (
    <PlayerStatsContainer>
      <div>Player Stats</div>
      {/* divider?? */}
      {playerStateObj.hasOwnProperty('era') ? (
        <div>
          <PlayerStatContainer
            statName={'Wins: '}
            statValue={playerStateObj.wins}
          />
          <PlayerStatContainer
            statName={'Losses: '}
            statValue={playerStateObj.losses}
          />
          <PlayerStatContainer
            statName={'ERA: '}
            statValue={playerStateObj.era}
          />
          <PlayerStatContainer
            statName={'Games: '}
            statValue={playerStateObj.gamesPlayed}
          />
          <PlayerStatContainer
            statName={'Games Started: '}
            statValue={playerStateObj.gamesStarted}
          />
          <PlayerStatContainer
            statName={'Saves: '}
            statValue={playerStateObj.saves}
          />
          <PlayerStatContainer
            statName={'Innings Picthes: '}
            statValue={playerStateObj.inningsPicthed}
          />
          <PlayerStatContainer
            statName={'Strikeouts: '}
            statValue={playerStateObj.strikeOuts}
          />
          <PlayerStatContainer
            statName={'Whip: '}
            statValue={playerStateObj.whip}
          />
        </div>
      ) : (
        <div>
          <PlayerStatContainer
            statName={'Batting Average: '}
            statValue={playerStateObj.avg}
          />
          <PlayerStatContainer
            statName={'Home Runs: '}
            statValue={playerStateObj.homeRuns}
          />
          <PlayerStatContainer
            statName={'RBI: '}
            statValue={playerStateObj.rbi}
          />
          <PlayerStatContainer
            statName={'OBP: '}
            statValue={playerStateObj.obp}
          />
          <PlayerStatContainer
            statName={'SLG: '}
            statValue={playerStateObj.slg}
          />
          <PlayerStatContainer
            statName={'OPS: '}
            statValue={playerStateObj.ops}
          />
          <PlayerStatContainer
            statName={'Games Played: '}
            statValue={playerStateObj.gamesPlayed}
          />
          <PlayerStatContainer
            statName={'At Bats: '}
            statValue={playerStateObj.atBats}
          />
        </div>
      )}

      <PlayerStatButton type="button">More Stats</PlayerStatButton>
    </PlayerStatsContainer>
  );
}

export default PlayerStats;

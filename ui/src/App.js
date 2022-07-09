import './App.css';
import PlayerComponent from './components/playerComponent';

function App() {

  //API request for team, then return an array of all players then map that array to the playerComponent


  // const [teamPlayersName, setTeamPlayersName] = useState([]);

  return (
    <div className="App">
      {/* {playerInfo.length > 0
        ? teamPlayers.map(
            ({
              name,
              //teamPlayersName need a name
            }) => (
              <ul>
                <li key={name.toLowerCase()}>
                  <PlayerComponent
                    name={name}
                  />
                </li>
              </ul>
            )
          )
        : null} */}
      <PlayerComponent playerName={'Corey Seager'}/>
    </div>
  );
}

export default App;

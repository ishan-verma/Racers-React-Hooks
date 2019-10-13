import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import AllRacers from "./components/AllRacers";

import "./styles.css";

function App() {
  // React Hooks is being used here to set the state
  // Set the list of races to an empty array
  let [races, setRaces] = useState([]);
  // Set the winner for a particular year
  let [winner, setWinner] = useState("");

  // On initial render of component, fetch data from API.
  useEffect(() => {
    fetch(`https://ergast.com/api/f1/2018/results/1.json`)
      .then(response => response.json())
      .then(data => {
        setRaces(data.MRData.RaceTable.Races);
      });

    fetch(`https://ergast.com/api/f1/2018/driverStandings.json`)
      .then(response => response.json())
      .then(data => {
        let raceWinner =
          data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver
            .familyName +
          " " +
          data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver
            .givenName;
        setWinner(raceWinner);
      });
  }, []);

  return (
    <div className="App">
      <h1>F1 Races for 2018!</h1>
      <AllRacers races={races} winner={winner} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

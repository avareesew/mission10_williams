import React from 'react';
import './App.css';
import bowlerData from './BowlerData.json';

const BowlerDataSample = bowlerData.bowlerDataBlah;

function BowlerList() {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {BowlerDataSample.map((m) => (
            <tr>
              <td>{m.bowlername}</td>
              <td>{m.teamname}</td>
              <td>{m.address}</td>
              <td>{m.city}</td>
              <td>{m.state}</td>
              <td>{m.zip}</td>
              <td>{m.phonenumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
function Welcome() {
  return <h1>Welcome to the Bowling League Page</h1>;
}
function App() {
  return (
    <div className="App">
      <Welcome />
      <BowlerList />
    </div>
  );
}

export default App;

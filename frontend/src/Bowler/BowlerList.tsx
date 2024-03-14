//import statements so I can use the items in the curly braces
import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';

function BowlerList() {
  //Set up for getting the Bowler Data from the API
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);
  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch('http://localhost:5028/Bowler');
      const f = await rsp.json();
      setBowlerData(f);
    };
    fetchBowlerData();
  }, []);

  //this is the actual html that will display with this component
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Bowler Team Name</th>
            <th>Bowler Address</th>
            <th>Bowler City</th>
            <th>Bowler State</th>
            <th>Bowler Zip</th>
            <th>Bowler Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlerData.map((b) => (
            <tr key={b.bowlerID}>
              <td>
                {b.bowlerFirstName}
                {b.bowlerMiddleInit && `, ${b.bowlerMiddleInit}`}
                {b.bowlerLastName && `, ${b.bowlerLastName}`}
              </td>

              <td>{b.team.teamName}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;

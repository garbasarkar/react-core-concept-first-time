import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);
  const HeandAdd = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };
  const HeandRemove = () => {
    setTeam(team - 1);
  };

  const colors = {
    padding: "15px",
    margin: "15px",
    border: "2px solid blue",
    borderRadius: "7px",
  };
  return (
    <div style={colors}>
      <h3>Players: {team} </h3>
      <button onClick={HeandAdd}>Add</button>
      <button onClick={HeandRemove}>Remove</button>
    </div>
  );
}

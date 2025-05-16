import React, { useContext } from "react";
import UserContext from "./UserContext";


function UserProfile() {
  const user = useContext(UserContext);
  return <h2>Welcome, {user}!</h2>;
}


function Demo() {
  const username = "Nitin Tambe";

  return (
    <UserContext.Provider value={username}>
      <div>
        <h1>useContext Example</h1>
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
}

export default Demo;

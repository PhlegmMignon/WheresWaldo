import React, { useState } from "react";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id="homeContainer">
      <h3 id="homeTitle">Home</h3>
      <button id="signIn">Sign in</button>
      <div className="login">
        <input
          id="emailInput"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="passwordInput"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Home;

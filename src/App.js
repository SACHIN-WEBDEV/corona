import React from "react";

import "./App.css";
import Single from "./components/Single";
import All from "./components/all/All";
import Main from "./components/main/Main";
import corona from "./corona.png";
function App() {
  return (
    <div
      className="App container-fluid"
      // style={{ backgroundImage: `url(${corona})` }}
    >
      <Main />
      <Single />
      <All />
      Source:-{" "}
      <small>
        <a href="https://www.worldometers.info/coronavirus/">worldometer</a>
      </small>
    </div>
  );
}

export default App;

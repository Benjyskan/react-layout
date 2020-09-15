import React from "react";
import "./App.css";
import Penzo from "./Penzo";

function App() {
  const myMsg = "22222222";

  return (
    <div className="App">
      <Penzo msg={myMsg} />
    </div>
  );
}

export default App;

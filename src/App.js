import React, { useState, useEffect } from "react";
import "./App.css";
import fetchDadJoke from "./api/fetchDadJoke";

function App() {
  const [dadJoke, setDadJoke] = useState("");

  const updateDadJoke = () => {
    fetchDadJoke().then((result) => {
      setDadJoke(result);
    });
  };

  useEffect(() => {
    updateDadJoke();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        {dadJoke}
        <button class="App-button" onClick={updateDadJoke}>
          Give Me a New Joke!
        </button>
      </div>
    </div>
  );
}

export default App;

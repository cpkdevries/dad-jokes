import React, { useState, useEffect } from "react";
import "./App.css";
import fetchDadJoke from "./api/fetchDadJoke";

function App() {
  const [dadJoke, setDadJoke] = useState("");
  const [existingJokeIds, setExistingJokeIds] = useState([]);

  const updateDadJoke = async () => {
    await fetchDadJoke(existingJokeIds).then((result) => {
      setDadJoke(result.joke);
      setExistingJokeIds([...existingJokeIds, result.id]);
    });
  };

  useEffect(() => {
    updateDadJoke();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        {dadJoke}
        <button className="App-button" onClick={updateDadJoke}>
          Give Me a New Joke!
        </button>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import fetchDadJoke from "./api/fetchDadJoke";

function App() {
  const [dadJoke, setDadJoke] = useState("");
  const [viewedJokes, setViewedJokes] = useState([]);
  console.log(viewedJokes);

  const updateDadJoke = async () => {
    await fetchDadJoke(viewedJokes).then((result) => {
      setDadJoke(result.joke);
      const newJoke = {
        id: result.id,
        joke: result.joke,
      };

      setViewedJokes([...viewedJokes, newJoke]);
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
        {viewedJokes.length > 1 && (
          <div class="last-viewed">
            <span>Last viewed jokes...</span>
            <ul>
              {viewedJokes
                .slice(0)
                .reverse()
                .map((joke, index) => {
                  if (index === 0 || index > 5) {
                    return "";
                  }

                  return <li key={joke.id}>{joke.joke}</li>;
                })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

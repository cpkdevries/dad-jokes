import axios from "axios";

export default async function fetchDadJoke(existingJokeIds) {
  return await axios
    .get("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    })
    .then((response) => {
      if (existingJokeIds.includes(response.data.id)) {
        fetchDadJoke(existingJokeIds);
      }

      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

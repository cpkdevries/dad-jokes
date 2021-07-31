import axios from 'axios';

export default async function fetchDadJoke() {
  return await axios.get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}})
                          .then(response => {
                            return response.data.joke;
                          })
                          .catch(error => {
                            console.error(error);
                          });
}
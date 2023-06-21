import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    const joke = response.data;

    res.status(200).json(joke);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch Chuck Norris Joke' });
  }
}
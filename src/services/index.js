import axios from 'axios';

export const getRandomInfo = async() => {
  const res = await axios.get('https://uselessfacts.jsph.pl/random.json?language=en');
  return res.data;
}
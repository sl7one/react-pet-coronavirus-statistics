import axios from 'axios';
import { nanoid } from 'nanoid';
import { getDate } from 'utils/getDate';

const apiKey = 'J8rew+nFh9vTMI7i2kp9xQ==bWa1SHQsAzyvtoDG';

const corona = axios.create({
   baseURL: 'https://api.api-ninjas.com/v1/covid19',
   headers: { 'X-Api-Key': apiKey },
   params: {
      date: getDate({ year: 2022, indexMonth: 0, day: 1 }),
   },
});

export async function getAll() {
   corona.defaults.params = {
      date: getDate({ year: 2022, indexMonth: 0, day: 1 }),
   };
   const { data } = await corona.get();
   return data.map((el) => ({ ...el, id: nanoid() }));
}

export async function getCountryStats(country) {
   corona.defaults.params = { country };
   const { data } = await corona.get();
   return data.map((el) => ({ ...el, id: nanoid() }));
}

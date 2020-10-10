import Axios from 'axios';
import { RandomJokeResponce } from '../models/joke';
const API = process.env.API;

class Jokes {
  constructor() {}

  async getJoke(): Promise<RandomJokeResponce> {
    return await Axios(`${API}/random/joke`).then((res) => res.data);
  }

  async searchJoke(term: string): Promise<RandomJokeResponce> {
    return await Axios(`${API}/joke/search?term=${term}`).then((res) => res.data);
  }
}

export { Jokes };

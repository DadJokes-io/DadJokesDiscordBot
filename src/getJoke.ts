import { Jokes } from './api/FetchAPI';
import getRandomInt from './util/randomNumber';
const jokes = new Jokes();

export const randomJoke = async (): Promise<string> => {
  const joke = await jokes.getJoke().then((item) => item);

  if (!joke.body.length) return 'http://gph.is/2EwPFVI';

  return `${joke.body[0].setup} \n ... \n ${joke.body[0].punchline}`;
};

export const searchJoke = async (term: string): Promise<string> => {
  const joke = await jokes.searchJoke(term).then((item) => item);

  if (!joke.body.length) return 'http://gph.is/2EwPFVI';

  const randomIndex = getRandomInt(joke.body.length);

  return `${joke.body[randomIndex].setup} \n ... \n ${joke.body[randomIndex].punchline}`;
};

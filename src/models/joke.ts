export type RandomJokeResponce = {
  success: boolean;
  body: Joke[] | [];
};

type Joke = {
  _id: string;
  type: string;
  setup: string;
  punchline: string;
};

import isPrime from '../libs/is-prime.js';
import roundsOneNumQuestion from '../libs/rounds-one-num-question.js';
import { askQuestion, knowledgeUser } from '../index.js';
import { GAME_PRIME } from '../consts.js';

const runGamePrime = () => {
  const username = knowledgeUser();

  askQuestion(GAME_PRIME);

  roundsOneNumQuestion(username, isPrime);
};

export default runGamePrime;

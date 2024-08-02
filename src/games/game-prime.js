import isPrime from '../libs/is-prime.js';
import roundsOneNumQuestion from '../libs/rounds-one-num-question.js';

const gamePrime = (username) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  roundsOneNumQuestion(username, isPrime);
};

export default gamePrime;

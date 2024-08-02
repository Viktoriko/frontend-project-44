import { MAX_ROUNDS } from '../consts.js';
import { getAnswer, isCorrectAnswer, checkingAnswer } from '../index.js';
import isPrime from '../libs/is-prime.js';

const gamePrime = (username) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let i = 0;

  while (i < MAX_ROUNDS) {
    const randomNumber = Math.floor(Math.random() * 50);
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    const answer = getAnswer(randomNumber);
    const isCorrect = isCorrectAnswer(answer, correctAnswer);

    i = checkingAnswer(i, isCorrect, answer, correctAnswer, username);

    if (i === -1) {
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};

export default gamePrime;

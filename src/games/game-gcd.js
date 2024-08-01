import { MAX_ROUNDS } from '../consts.js';
import { checkingAnswer, getAnswer, isCorrectAnswer } from '../index.js';
import getGsd from '../libs/get-gsd.js';

const gameGcd = (username) => {
  console.log('Find the greatest common divisor of given numbers.');

  let i = 0;

  while (i < MAX_ROUNDS) {
    const randomNumberOne = Math.floor(Math.random() * 50);
    const randomNumberTwo = Math.floor(Math.random() * 50);

    const correctAnswer = getGsd(randomNumberOne, randomNumberTwo);

    const answer = getAnswer(`${randomNumberOne} ${randomNumberTwo}`);
    const isCorrect = isCorrectAnswer(Number(answer), correctAnswer);

    i = checkingAnswer(i, isCorrect, answer, correctAnswer, username);

    if (i === -1) {
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};

export default gameGcd;

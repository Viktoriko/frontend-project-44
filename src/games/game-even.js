import { MAX_ROUNDS } from '../consts.js';
import { getAnswer, isCorrectAnswer, checkingAnswer } from '../index.js';

const gameEven = (username) => {
  const isEven = (number) => number % 2 === 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;

  while (i < MAX_ROUNDS) {
    const randomNumber = Math.floor(Math.random() * 50);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    const answer = getAnswer(randomNumber);
    const isCorrect = isCorrectAnswer(answer, correctAnswer);

    i = checkingAnswer(i, isCorrect, answer, correctAnswer, username);

    if (i === -1) {
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};

export default gameEven;

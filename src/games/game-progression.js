import { MAX_ROUNDS } from '../consts.js';
import { checkingAnswer, getAnswer, isCorrectAnswer } from '../index.js';

const gameProgression = (username) => {
  console.log('Find the greatest common divisor of given numbers.');

  let i = 0;

  while (i < MAX_ROUNDS) {
    const lengthProgression = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    const stepProgression = Math.floor(Math.random() * 50) + 1;
    const space = Math.floor(Math.random() * lengthProgression) + 1;
    let currentNum = Math.floor(Math.random() * 50);
    let correctAnswer = 0;
    const questionArr = [];

    for (let j = 1; j <= lengthProgression; j += 1) {
      if (space === j) {
        questionArr.push('..');
        correctAnswer = currentNum;
      } else {
        questionArr.push(currentNum);
      }
      currentNum += stepProgression;
    }

    const question = questionArr.join(' ');

    const answer = getAnswer(question);
    const isCorrect = isCorrectAnswer(Number(answer), correctAnswer);

    i = checkingAnswer(i, isCorrect, answer, correctAnswer, username);

    if (i === -1) {
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};

export default gameProgression;

import { MAX_ROUNDS } from '../consts.js';
import { checkingAnswer, getAnswer, isCorrectAnswer } from '../index.js';
import buildProgressionArr from '../libs/build-progression-arr.js';

const gameProgression = (username) => {
  console.log('What number is missing in the progression?');

  let i = 0;

  while (i < MAX_ROUNDS) {
    const lengthProgression = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    const stepProgression = Math.floor(Math.random() * 50) + 1;
    const space = Math.floor(Math.random() * lengthProgression);
    const questionArr = buildProgressionArr(lengthProgression, stepProgression);
    const correctAnswer = questionArr[space];

    questionArr.splice(space, 1, '..');

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

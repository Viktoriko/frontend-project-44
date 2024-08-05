import {
  checkingAnswer, getAnswer, isCorrectAnswer, runWinMessage,
} from '../index.js';
import { MAX_ROUNDS } from '../consts.js';

const roundsOneNumQuestion = (username, funcGetCorrectAnswer) => {
  let i = 0;

  while (i < MAX_ROUNDS) {
    const randomNumber = Math.floor(Math.random() * 50);
    const correctAnswer = funcGetCorrectAnswer(randomNumber) ? 'yes' : 'no';
    const answer = getAnswer(randomNumber);
    const isCorrect = isCorrectAnswer(answer, correctAnswer);

    i = checkingAnswer(i, isCorrect, answer, correctAnswer, username);

    if (i === -1) {
      return;
    }
  }

  runWinMessage(username);
};

export default roundsOneNumQuestion;

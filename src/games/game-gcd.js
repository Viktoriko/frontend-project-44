import { GAME_GCD, MAX_ROUNDS } from '../consts.js';
import {
  askQuestion,
  checkingAnswer,
  getAnswer,
  isCorrectAnswer,
  knowledgeUser,
  runWinMessage,
} from '../index.js';
import getGsd from '../libs/get-gsd.js';

const runGameGcd = () => {
  const username = knowledgeUser();

  askQuestion(GAME_GCD);

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

  runWinMessage(username);
};

export default runGameGcd;

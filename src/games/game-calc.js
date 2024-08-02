import { MAX_ROUNDS } from '../consts.js';
import { checkingAnswer, getAnswer, isCorrectAnswer } from '../index.js';
import getCalcAnswer from '../libs/get-calc-answer.js';
import getOperator from '../libs/get-operator.js';

const gameCalc = (username) => {
  console.log('What is the result of the expression?');

  let i = 0;

  while (i < MAX_ROUNDS) {
    const randomNumberOne = Math.floor(Math.random() * 50);
    const randomNumberTwo = Math.floor(Math.random() * 50);
    const randomOperator = Math.floor(Math.random() * 3);

    const operator = getOperator(randomOperator);
    const correctAnswer = getCalcAnswer(operator, randomNumberOne, randomNumberTwo);

    const answer = getAnswer(`${randomNumberOne} ${operator} ${randomNumberTwo}`);
    const isCorrect = isCorrectAnswer(Number(answer), correctAnswer);

    i = checkingAnswer(i, isCorrect, answer, correctAnswer, username);

    if (i === -1) {
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};

export default gameCalc;

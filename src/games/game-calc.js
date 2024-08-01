import { MAX_ROUNDS } from '../consts.js';
import { checkingAnswer, getAnswer, isCorrectAnswer } from '../index.js';

const gameCalc = (username) => {
  console.log('What is the result of the expression?');

  let i = 0;

  while (i < MAX_ROUNDS) {
    const randomNumberOne = Math.floor(Math.random() * 50);
    const randomNumberTwo = Math.floor(Math.random() * 50);
    const randomOperator = Math.floor(Math.random() * 3);

    let operator; let
      correctAnswer;

    switch (randomOperator) {
      case 0:
        operator = '+';
        correctAnswer = randomNumberOne + randomNumberTwo;
        break;
      case 1:
        operator = '-';
        correctAnswer = randomNumberOne - randomNumberTwo;
        break;
      case 2:
        operator = '*';
        correctAnswer = randomNumberOne * randomNumberTwo;
        break;
      default:
        operator = '+';
        correctAnswer = randomNumberOne + randomNumberTwo;
    }

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

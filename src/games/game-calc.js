import runGamePlay from '../index.js';

const getCalcAnswer = (operator, numOne, numTwo) => {
  switch (operator) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    case '*':
      return numOne * numTwo;
    default:
      return numOne + numTwo;
  }
};

const getOperator = (operator) => {
  switch (operator) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      return '+';
  }
};

const getGameOptions = () => {
  const randomNumberOne = Math.floor(Math.random() * 50);
  const randomNumberTwo = Math.floor(Math.random() * 50);
  const randomOperator = Math.floor(Math.random() * 3);

  const operator = getOperator(randomOperator);
  const correctAnswer = getCalcAnswer(operator, randomNumberOne, randomNumberTwo);

  const questionExp = `${randomNumberOne} ${operator} ${randomNumberTwo}`;

  return [questionExp, correctAnswer];
};

const runGameCalc = () => {
  runGamePlay('What is the result of the expression?', getGameOptions);
};

export default runGameCalc;

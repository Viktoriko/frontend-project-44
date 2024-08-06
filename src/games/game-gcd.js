import runGamePlay from '../index.js';

const getGsd = (a, b) => {
  let numOne = a;
  let numTwo = b;

  while (numOne !== numTwo) {
    if (numOne > numTwo) {
      numOne -= numTwo;
    } else {
      numTwo -= numOne;
    }
  }
  return numOne;
};

const getGameOptions = () => {
  const randomNumberOne = Math.floor(Math.random() * 50);
  const randomNumberTwo = Math.floor(Math.random() * 50);

  const correctAnswer = getGsd(randomNumberOne, randomNumberTwo);

  const questionExp = `${randomNumberOne} ${randomNumberTwo}`;

  return [questionExp, correctAnswer];
};

const runGameGcd = () => {
  runGamePlay('Find the greatest common divisor of given numbers.', getGameOptions);
};

export default runGameGcd;

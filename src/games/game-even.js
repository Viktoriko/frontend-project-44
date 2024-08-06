import runGamePlay from '../index.js';

const getGameOptions = () => {
  const randomNumber = Math.floor(Math.random() * 50);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  return [randomNumber, correctAnswer];
};

const runGameEven = () => {
  runGamePlay('Answer "yes" if the number is even, otherwise answer "no".', getGameOptions);
};

export default runGameEven;

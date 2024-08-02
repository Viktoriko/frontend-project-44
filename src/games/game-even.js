import roundsOneNumQuestion from '../libs/rounds-one-num-question.js';

const gameEven = (username) => {
  const isEven = (number) => number % 2 === 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  roundsOneNumQuestion(username, isEven);
};

export default gameEven;

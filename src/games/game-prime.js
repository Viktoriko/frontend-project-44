import runGamePlay from '../index.js';

const isPrime = (number) => {
  if ([0, 1].includes(number)) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number !== 1;
};

const getGameOptions = () => {
  const randomNumber = Math.floor(Math.random() * 50);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return [randomNumber, correctAnswer];
};

const runGamePrime = () => {
  runGamePlay('Answer "yes" if given number is prime. Otherwise answer "no".', getGameOptions);
};

export default runGamePrime;

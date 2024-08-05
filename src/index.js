import readlineSync from 'readline-sync';
import {
  GAME_CALC, GAME_EVEN, GAME_GCD, GAME_PRIME, GAME_PROGRESSION, GREETING,
} from './consts.js';
import getName from './cli.js';

const greetUser = () => {
  console.log(GREETING);
};

const knowledgeUser = () => {
  greetUser();
  return getName();
};

const askQuestion = (game) => {
  switch (game) {
    case GAME_CALC:
      console.log('What is the result of the expression?');
      break;
    case GAME_EVEN:
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case GAME_GCD:
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case GAME_PRIME:
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    case GAME_PROGRESSION:
      console.log('What number is missing in the progression?');
      break;
    default:
      console.log('I do not know such a game');
  }
};

const runWinMessage = (username) => {
  console.log(`Congratulations, ${username}!`);
};

const getAnswer = (question) => {
  console.log(`Question: ${question}`);

  return readlineSync.question('Your answer: ').trim().toLowerCase();
};

const isCorrectAnswer = (answer, correctAnswer) => answer === correctAnswer;

const checkingAnswer = (i, isCorrect, answer, correctAnswer, username) => {
  if (isCorrect) {
    console.log('Correct!');
    return i + 1;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
  return -1;
};

export {
  getAnswer, isCorrectAnswer, checkingAnswer, knowledgeUser, askQuestion, runWinMessage,
};

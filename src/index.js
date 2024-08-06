import readlineSync from 'readline-sync';
import {
  GREETING, MAX_ROUNDS,
} from './consts.js';
import getName from './cli.js';

const greetUser = () => {
  console.log(GREETING);
};

const knowledgeUser = () => {
  greetUser();
  return getName();
};

const askQuestion = (question) => {
  console.log(question);
};

const runWinMessage = (username) => {
  console.log(`Congratulations, ${username}!`);
};

const getAnswer = (question) => {
  console.log(`Question: ${question}`);

  return readlineSync.question('Your answer: ').trim().toLowerCase();
};

const checkingAnswer = (i, isCorrect, answer, correctAnswer, username) => {
  if (isCorrect) {
    console.log('Correct!');
    return i + 1;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${username}!`);
  return -1;
};

const runGamePlay = (answer, getGameOptions) => {
  const username = knowledgeUser();

  askQuestion(answer);

  let i = 0;

  while (i < MAX_ROUNDS) {
    const [questionExp, correctAnswer] = getGameOptions();

    const userAnswer = getAnswer(questionExp);
    const isCorrect = userAnswer === String(correctAnswer);

    i = checkingAnswer(i, isCorrect, userAnswer, correctAnswer, username);

    if (i === -1) {
      return;
    }
  }

  runWinMessage(username);
};

export default runGamePlay;

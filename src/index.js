import readlineSync from 'readline-sync';

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

export { getAnswer, isCorrectAnswer, checkingAnswer };

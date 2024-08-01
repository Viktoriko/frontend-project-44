import readlineSync from 'readline-sync';

const gameEven = (username) => {
  let i = 0;
  const MAX_ROUNDS = 3;

  const isEven = (number) => number % 2 === 0;

  const isSuccessEven = (answer, number) => answer === 'yes' && isEven(number);
  const isSuccessOdd = (answer, number) => answer === 'no' && !isEven(number);

  const correctAnswer = (number) => (isEven(number) ? 'yes' : 'no');

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (i < MAX_ROUNDS) {
    const randomNumber = Math.floor(Math.random() * 50);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ').trim().toLowerCase();

    if (isSuccessEven(answer, randomNumber) || isSuccessOdd(answer, randomNumber)) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(randomNumber)}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};

export default gameEven;

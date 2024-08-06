import runGamePlay from '../index.js';

const buildProgressionArr = (lengthProgression, stepProgression) => {
  let currentNum = Math.floor(Math.random() * 50);
  const questionArr = [];

  for (let j = 1; j <= lengthProgression; j += 1) {
    questionArr.push(currentNum);
    currentNum += stepProgression;
  }

  return questionArr;
};

const getGameOptions = () => {
  const lengthProgression = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  const stepProgression = Math.floor(Math.random() * 50) + 1;
  const space = Math.floor(Math.random() * lengthProgression);
  const questionArr = buildProgressionArr(lengthProgression, stepProgression);
  const correctAnswer = questionArr[space];

  questionArr.splice(space, 1, '..');

  const questionExp = questionArr.join(' ');

  return [questionExp, correctAnswer];
};

const runGameProgression = () => {
  runGamePlay('What number is missing in the progression?', getGameOptions);
};

export default runGameProgression;

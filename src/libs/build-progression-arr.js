const buildProgressionArr = (lengthProgression, stepProgression) => {
  let currentNum = Math.floor(Math.random() * 50);
  const questionArr = [];

  for (let j = 1; j <= lengthProgression; j += 1) {
    questionArr.push(currentNum);
    currentNum += stepProgression;
  }

  return questionArr;
};

export default buildProgressionArr;

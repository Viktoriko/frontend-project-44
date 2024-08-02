const getCalcAnswer = (operator, numOne, numTwo) => {
  switch (operator) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    case '*':
      return numOne * numTwo;
    default:
      return numOne + numTwo;
  }
};

export default getCalcAnswer;

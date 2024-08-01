const getGsd = (a, b) => {
  let numOne = a;
  let numTwo = b;

  while (numOne !== numTwo) {
    if (numOne > numTwo) {
      numOne -= numTwo;
    } else {
      numTwo -= numOne;
    }
  }
  return numOne;
};

export default getGsd;

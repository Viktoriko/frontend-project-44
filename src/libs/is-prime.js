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

export default isPrime;

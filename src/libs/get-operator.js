const getOperator = (operator) => {
  switch (operator) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      return '+';
  }
};

export default getOperator;

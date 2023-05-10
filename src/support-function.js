const getRandomNumber = (start, end) => Math.floor(Math.random() * (end - start + 1)) + start;

export const getRandomOperation = () => {
  const sum = '+';
  const sub = '-';
  const multiplication = '*';
  const operation = getRandomNumber(1, 3);
  let result = '';

  if (operation === 1) {
    result = sum;
  } else if (operation === 2) {
    result = sub;
  } else {
    result = multiplication;
  }
  return result;
};

export default getRandomNumber;

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

export const getProgression = () => {
  let randomNumber = getRandomNumber(3, 18);
  const randomProgression = getRandomNumber(5, 24);
  const array = [];
  for (let i = 0; i < 10; i += 1) {
    array.push(randomNumber + randomProgression);
    randomNumber += randomProgression;
  }
  return array;
};

export const getOmissionInProgression = () => {
  const progression = getProgression();
  const randomElement = getRandomNumber(0, 9);
  progression[randomElement] = '...';
  return progression;
};
export default getRandomNumber;

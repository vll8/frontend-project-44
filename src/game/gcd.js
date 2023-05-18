import getRandomNumber from '../support-function.js';

const rulesGameGcd = 'Find the greatest common divisor of given numbers.';

const findGcd = (n, m) => {
  if (m !== 0) {
    const k = n % m;
    return findGcd(m, k);
  }
  return n;
};

export const getQuestionGcd = () => {
  const array = [];
  const randomNumber1 = getRandomNumber(1, 50);
  const randomNumber2 = getRandomNumber(1, 50);
  array.push([randomNumber1, randomNumber2]);
  array.push([findGcd(randomNumber1, randomNumber2)]);
  return array;
};

export default rulesGameGcd;

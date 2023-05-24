import getRandomNumber from '../support-function.js';
import getGameLogic from '../index.js';

const rulesGameGcd = 'Find the greatest common divisor of given numbers.';

const findGcd = (n, m) => {
  if (m !== 0) {
    const k = n % m;
    return findGcd(m, k);
  }
  return `${n}`;
};

const getQuestionGcd = () => {
  const array = [];
  const start = 1;
  const end = 50;
  const randomNumber1 = getRandomNumber(start, end);
  const randomNumber2 = getRandomNumber(start, end);
  array.push([randomNumber1, randomNumber2].join(' '));
  array.push(findGcd(randomNumber1, randomNumber2));
  return array;
};

const gameGcd = () => {
  const logicGameGcd = getGameLogic(getQuestionGcd, rulesGameGcd);
  return logicGameGcd;
};

export default gameGcd;

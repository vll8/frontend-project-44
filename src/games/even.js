import getRandomNumber from '../support-function.js';
import getGameLogic from '../index.js';

const rulesGameEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const getQuestionEven = () => {
  const array = [];
  const start = 1;
  const end = 1000;
  const randomNumber = getRandomNumber(start, end);
  array.push([randomNumber].join(' '));
  array.push([isEven(randomNumber)].join(' '));
  return array;
};

const gameEven = () => {
  const logicGameEven = getGameLogic(getQuestionEven, rulesGameEven);
  return logicGameEven;
};

export default gameEven;

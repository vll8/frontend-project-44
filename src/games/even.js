import getRandomNumber from '../support-function.js';
import getGameLogic from '../index.js';

const rulesGameEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const startRangeEven = 1;
const endRangeEven = 1000;

const getQuestionEven = () => {
  const array = [];
  const randomNumber = getRandomNumber(startRangeEven, endRangeEven);
  const correctAnswerEven = isEven(randomNumber) ? 'yes' : 'no';
  array.push(randomNumber);
  array.push(correctAnswerEven);
  return array;
};

const gameEven = () => {
  const logicGameEven = getGameLogic(getQuestionEven, rulesGameEven);
  return logicGameEven;
};

export default gameEven;

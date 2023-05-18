import getRandomNumber from '../support-function.js';

const rulesGameEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export const getQuestionEven = () => {
  const array = [];
  const randomNumber = getRandomNumber(1, 1000);
  array.push([randomNumber]);
  array.push([isEven(randomNumber)]);
  return array;
};

export default rulesGameEven;

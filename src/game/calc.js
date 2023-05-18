import getRandomNumber, { getRandomOperation } from '../support-function.js';

const gameRulesCalc = 'What is the result of the expression?';

const calculateResultOperation = (a, operation, b) => {
  let result = 0;
  if (operation === '+') {
    result = a + b;
  } else if (operation === '-') {
    result = a - b;
  } else {
    result = a * b;
  }
  return result;
};

export const getQuestionCalc = () => {
  const array = [];
  const randomOperation = getRandomOperation();
  const randomNumber1 = getRandomNumber(1, 30);
  const randomNumber2 = getRandomNumber(1, 30);
  array.push([randomNumber1, randomOperation, randomNumber2]);
  array.push([calculateResultOperation(randomNumber1, randomOperation, randomNumber2)]);
  return array;
};

export default gameRulesCalc;
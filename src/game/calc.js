import getRandomNumber from '../support-function.js';
import getGameLogic from '../index.js';

const gameRulesCalc = 'What is the result of the expression?';

const getRandomOperation = () => {
  const startRangeOperation = 0;
  const endRangeOperation = 2;
  const array = ['+', '-', '*'];
  const operation = getRandomNumber(startRangeOperation, endRangeOperation);
  return array[operation];
};

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

const getQuestionCalc = () => {
  const array = [];
  const start = 1;
  const end = 30;
  const randomOperation = getRandomOperation();
  const randomNumber1 = getRandomNumber(start, end);
  const randomNumber2 = getRandomNumber(start, end);
  array.push([randomNumber1, randomOperation, randomNumber2]);
  array.push([calculateResultOperation(randomNumber1, randomOperation, randomNumber2)]);
  return array;
};

const gameCalc = () => {
  const logicGameCalc = getGameLogic(getQuestionCalc, gameRulesCalc);
  return logicGameCalc;
};

export default gameCalc;

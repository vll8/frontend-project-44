import getRandomNumber from '../support-function.js';
import getGameLogic from '../index.js';

const gameRulesCalc = 'What is the result of the expression?';

const getRandomOperation = () => {
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
  const randomOperation = getRandomOperation();
  const randomNumber1 = getRandomNumber(1, 30);
  const randomNumber2 = getRandomNumber(1, 30);
  array.push([randomNumber1, randomOperation, randomNumber2]);
  array.push([calculateResultOperation(randomNumber1, randomOperation, randomNumber2)]);
  return array;
};

const gameCalc = () => {
  const logicGameCalc = getGameLogic(getQuestionCalc, gameRulesCalc);
  return logicGameCalc;
};

export default gameCalc;

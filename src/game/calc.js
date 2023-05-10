import readlineSync from 'readline-sync';
import helloUserName from '../index.js';
import getRandomNumber, { getRandomOperation } from '../support-function.js';

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

const playCalc = () => {
  const raund = 3;
  const userName = helloUserName();

  console.log(`Hello, ${userName}!\nWhat is the result of the expression?`);

  for (let i = 0; i < raund; i += 1) {
    const randomOperation = getRandomOperation();
    const randomNumber1 = getRandomNumber(1, 20);
    const randomNumber2 = getRandomNumber(1, 20);
    console.log(`Question: ${randomNumber1} ${randomOperation} ${randomNumber2}`);

    const correctAnswer = calculateResultOperation(randomNumber1, randomOperation, randomNumber2);

    const userAnswer = Number(readlineSync.question('Your answer: '));
    const correct = 'Correct!';
    const gameOver = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
    if (userAnswer !== correctAnswer) {
      console.log(gameOver);
      break;
    } else {
      console.log(correct);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playCalc;

import readlineSync from 'readline-sync';
import helloUserName from '../index.js';
import getRandomNumber from '../support-function.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const playAnEvenOdd = () => {
  const raund = 3;
  const userName = helloUserName();

  console.log(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

  for (let i = 0; i < raund; i += 1) {
    const randomNumber = getRandomNumber(1, 100);
    console.log(`Question: ${randomNumber}`);
    const correctAnswer = isEven(randomNumber);
    const userAnswer = readlineSync.question('Your answer: ');

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

export default playAnEvenOdd;

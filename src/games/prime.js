import getRandomNumber from '../support-function.js';
import getGameLogic from '../index.js';

const gameRulesPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionPrime = () => {
  const array = [];
  const start = 283;
  const end = 489;
  const randomNumber = getRandomNumber(start, end);
  const correctAnswerPrime = isPrime(randomNumber) ? 'yes' : 'no';
  array.push(randomNumber);
  array.push(correctAnswerPrime);
  return array;
};

const gamePrime = () => {
  const logicGamePrime = getGameLogic(getQuestionPrime, gameRulesPrime);
  return logicGamePrime;
};

export default gamePrime;

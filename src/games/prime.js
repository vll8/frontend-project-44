import getRandomNumber from '../support-function.js';
import getGameLogic from '../index.js';

const gameRulesPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let result = '';
  if (num === 2) {
    result = 'yes';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
    if (num !== 1) {
      result = 'yes';
    }
  }
  return result;
};

const getQuestionPrime = () => {
  const array = [];
  const start = 283;
  const end = 489;
  const randomNumber = getRandomNumber(start, end);
  array.push(randomNumber);
  array.push(isPrime(randomNumber));
  return array;
};

const gamePrime = () => {
  const logicGamePrime = getGameLogic(getQuestionPrime, gameRulesPrime);
  return logicGamePrime;
};

export default gamePrime;

import getRandomNumber from '../support-function.js';

const gameRulesPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let result = '';
  const yes = 'yes';
  const no = 'no';
  if (num === 2) {
    result = yes;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return no;
    }
    if (num !== 1) {
      result = yes;
    }
  }
  return result;
};

export const getQuestionPrime = () => {
  const array = [];
  const randomNumber = getRandomNumber(283, 499);
  array.push([randomNumber]);
  array.push([isPrime(randomNumber)]);
  return array;
};

export default gameRulesPrime;

import getRandomNumber from '../support-function.js';

const gameRulesProgression = 'What number is missing in the progression?';

const getProgression = () => {
  let randomNumber = getRandomNumber(3, 18);
  const randomProgression = getRandomNumber(5, 24);
  const array = [];
  for (let i = 0; i < 10; i += 1) {
    array.push(randomNumber + randomProgression);
    randomNumber += randomProgression;
  }
  return array;
};

const getOmissionInProgression = () => {
  const progression = getProgression();
  const randomElement = getRandomNumber(0, 9);
  progression[randomElement] = '...';
  return progression;
};

const isProgression = (progression) => {
  const array = [];
  array.push(...progression);
  const start = 0;
  const end = array.length - 1;
  let result = 0;
  for (let i = start; i < array.length; i += 1) {
    if (array[i] === '...') {
      if (array[i] === array[end]) {
        result = array[i - 1] + (array[i - 1] - array[i - 2]);
      }
      if (array[i] === array[start]) {
        result = array[i + 1] - (array[i + 2] - array[i + 1]);
      }
      if ((array[i] !== array[start]) && (array[i] !== array[end])) {
        result = array[i - 1] + ((array[i + 1] - array[i - 1]) / 2);
      }
    }
  }
  return result;
};

export const getQuestionProgression = () => {
  const array = [];
  const randomProgression = getOmissionInProgression();
  array.push(...[randomProgression]);
  array.push([isProgression(randomProgression)]);
  return array;
};

export default gameRulesProgression;

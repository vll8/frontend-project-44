import { getOmissionInProgression } from '../support-function.js';
import getGameLogic from '../index.js';

const gameRulesProgression = 'What number is missing in the progression?';

const isProgression = (progression) => {
  const array = [...progression];
  const start = 0;
  const end = array.length - 1;
  let result = 0;
  for (let i = start; i < array.length; i += 1) {
    if (array[i] === '..') {
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

const getQuestionProgression = () => {
  const array = [];
  const randomProgression = getOmissionInProgression();
  array.push(...[randomProgression]);
  array.push([isProgression(randomProgression)]);
  return array;
};

const gameProgression = () => {
  const logicGameProgression = getGameLogic(getQuestionProgression, gameRulesProgression);
  return logicGameProgression;
};

export default gameProgression;

import getRandomNumber from '../support-function.js';
import getGameLogic from '../index.js';

const gameRulesProgression = 'What number is missing in the progression?';

const getStartProgression = () => {
  const startRangeNumber = 3;
  const endRangeNumber = 18;
  const startProgression = getRandomNumber(startRangeNumber, endRangeNumber);
  return startProgression;
};

const getRandomStepProgression = () => {
  const startRangeProgression = 5;
  const endRangeProgression = 24;
  const randomStepProgression = getRandomNumber(startRangeProgression, endRangeProgression);
  return randomStepProgression;
};

const getProgression = (startNumberProgression, stepNumberProgression) => {
  const array = [];
  let startProgression = startNumberProgression();
  const stepProgression = stepNumberProgression();
  for (let i = 0; i < 10; i += 1) {
    array.push(startProgression + stepProgression);
    startProgression += stepProgression;
  }
  return array;
};

const getOmissionInProgression = () => {
  const progression = getProgression(getStartProgression, getRandomStepProgression);
  const startRangeElement = 0;
  const endRangeElement = 9;
  const randomElement = getRandomNumber(startRangeElement, endRangeElement);
  progression[randomElement] = '..';
  return progression;
};

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

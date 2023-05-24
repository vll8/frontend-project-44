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

const getProgression = (start, step) => {
  const progression = [];
  let startProgression = start();
  const stepProgression = step();
  const randomElement = getRandomNumber(0, 9);
  for (let i = 0; i < 10; i += 1) {
    progression.push(startProgression + stepProgression);
    startProgression += stepProgression;
  }
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
  return `${result}`;
};

const getQuestionProgression = () => {
  const array = [];
  const randomProgression = getProgression(getStartProgression, getRandomStepProgression);
  array.push(randomProgression.join(' '));
  array.push(isProgression(randomProgression));
  return array;
};

const gameProgression = () => {
  const logicGameProgression = getGameLogic(getQuestionProgression, gameRulesProgression);
  return logicGameProgression;
};

export default gameProgression;

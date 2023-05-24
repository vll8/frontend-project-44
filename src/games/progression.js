import getRandomNumber from '../support-function.js';
import getGameLogic from '../index.js';

const gameRulesProgression = 'What number is missing in the progression?';

const getStartProgression = () => {
  const startRangeNumber = 3;
  const endRangeNumber = 18;
  const randomStartProgression = getRandomNumber(startRangeNumber, endRangeNumber);
  return randomStartProgression;
};

const getRandomStepProgression = () => {
  const startRangeProgression = 5;
  const endRangeProgression = 24;
  const randomStepProgression = getRandomNumber(startRangeProgression, endRangeProgression);
  return randomStepProgression;
};

const getProgression = () => {
  const progression = [];
  let startProgression = getStartProgression();
  const stepProgression = getRandomStepProgression();
  const randomElement = getRandomNumber(0, 9);
  for (let i = 0; i < 10; i += 1) {
    progression.push(startProgression + stepProgression);
    startProgression += stepProgression;
  }
  const hiddenElement = `${progression[randomElement]}`;
  progression[randomElement] = '..';
  return [progression.join(' '), hiddenElement];
};

const gameProgression = () => {
  const logicGameProgression = getGameLogic(getProgression, gameRulesProgression);
  return logicGameProgression;
};

export default gameProgression;

#!/usr/bin/env node
import getGameLogic from '../src/index.js';
import gameRulesCalc, { getQuestionCalc } from '../src/game/calc.js';

getGameLogic(getQuestionCalc, gameRulesCalc);

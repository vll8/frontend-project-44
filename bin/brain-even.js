#!/usr/bin/env node
import getGameLogic from '../src/index.js';
import gameRulesEven, { getQuestionEven } from '../src/game/even.js';

getGameLogic(getQuestionEven, gameRulesEven);

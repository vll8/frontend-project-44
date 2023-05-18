#!/usr/bin/env node
import getGameLogic from '../src/index.js';
import gameRulesGcd, { getQuestionGcd } from '../src/game/gcd.js';

getGameLogic(getQuestionGcd, gameRulesGcd);

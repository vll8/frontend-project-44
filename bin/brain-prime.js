#!/usr/bin/env node
import getGameLogic from '../src/index.js';
import gameRulesPrime, { getQuestionPrime } from '../src/game/prime.js';

getGameLogic(getQuestionPrime, gameRulesPrime);

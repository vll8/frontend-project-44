#!/usr/bin/env node
import getGameLogic from '../src/index.js';
import gameRulesProgression, { getQuestionProgression } from '../src/game/progression.js';

getGameLogic(getQuestionProgression, gameRulesProgression);

#!/usr/bin/env node
import getName from '../src/cli.js';
import gameCalc from '../src/games/game-calc.js';
import { GREETING } from '../src/consts.js';

console.log(GREETING);
const name = getName();
gameCalc(name);

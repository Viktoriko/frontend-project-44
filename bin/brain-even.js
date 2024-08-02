#!/usr/bin/env node
import getName from '../src/cli.js';
import gameEven from '../src/games/game-even.js';
import { GREETING } from '../src/consts.js';

console.log(GREETING);
const name = getName();
gameEven(name);

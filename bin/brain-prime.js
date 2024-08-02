#!/usr/bin/env node
import getName from '../src/cli.js';
import gamePrime from '../src/games/game-prime.js';
import { GREETING } from '../src/consts.js';

console.log(GREETING);
const name = getName();
gamePrime(name);

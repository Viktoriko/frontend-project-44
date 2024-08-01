#!/usr/bin/env node
import getName from '../src/cli.js';
import { GREETING } from '../src/consts.js';
import gameGcd from '../src/games/game-gcd.js';

console.log(GREETING);
const name = getName();
gameGcd(name);

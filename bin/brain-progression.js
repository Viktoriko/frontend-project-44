#!/usr/bin/env node
import getName from '../src/cli.js';
import { GREETING } from '../src/consts.js';
import gameProgression from '../src/games/game-progression.js';

console.log(GREETING);
const name = getName();
gameProgression(name);

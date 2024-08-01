#!/usr/bin/env node
import getName from '../src/cli.js';
import gameEven from '../src/game-even.js';

console.log('Welcome to the Brain Games!');
const name = getName();
gameEven(name);

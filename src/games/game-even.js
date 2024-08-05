import roundsOneNumQuestion from '../libs/rounds-one-num-question.js';
import { askQuestion, knowledgeUser } from '../index.js';
import { GAME_EVEN } from '../consts.js';
import isEven from '../libs/is-even.js';

const runGameEven = () => {
  const username = knowledgeUser();

  askQuestion(GAME_EVEN);

  roundsOneNumQuestion(username, isEven);
};

export default runGameEven;

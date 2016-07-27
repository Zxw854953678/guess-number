'use strict';

const AnswerGenerator = require('./answer-generator');
const CompareNumber = require('./CompareNumber');

class Guess{
  static guess(input){
    const answer = AnswerGenerator.generate();
    const result = CompareNumber.compare(input,answer);

    return result;
  }
}

module.exports = Guess;
'use strict';

const Guess = require('../src/modules/guess');
const AnswerGenerator = require('../src/modules/answer-generator');

describe('guess',()=>{
  it('should play the game',()=>{
    spyOn(AnswerGenerator,'generate').and.returnValue('1234');
    const result = Guess.guess('1234');
    expect(result).toEqual('4A0B');
  })
});
'use strict';
const AnswerGenerator = require('../src/modules/answer-generator');
describe('Answer Generator',()=>{
  it('should generator',()=>{
    const isUnique = (digit,index,array)=>{
      return array.lastIndexOf(digit) === index;
    };

    const answer = AnswerGenerator.generate();
    expect(answer.length).toEqual(4);
    expect(answer.split('').every(isUnique)).toBeTruthy();
    expect(AnswerGenerator.generate()).not.toEqual(AnswerGenerator.generate());
  })
});
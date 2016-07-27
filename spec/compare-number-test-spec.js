'use strict';
const CompareNumber = require('../src/modules/CompareNumber');

describe('compare number',()=>{
  it('return XAXB',()=>{
    [
      {
        input:'1234',
        answer:'1234',
        result:'4A0B'
      },
      {
        input:'6789',
        answer:'1234',
        result:'0A0B'
      },
      {
        input:'4321',
        answer:'1234',
        result:'0A4B'
      },
      {
        input:'1437',
        answer:'1234',
        result:'2A1B'
      }
    ].forEach((example)=>{
      const result = CompareNumber.compare(example.input,example.answer);
      expect(result).toEqual(example.result);
    })
  });
});

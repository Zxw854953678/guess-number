'use strict';

class CompareNumber {
  static compare(input, answer) {
    let result = {A: 0, B: 0};
    const inputArray = input.split('');
    const answerArray = answer.split('');

    inputArray.find((inputNum, index)=> {
      if (answerArray.some(answerNum=>answerNum === inputNum)) {
        answerArray.indexOf(inputNum) === index ? result.A++ : result.B++;
      }
    });


    return `${result.A}A${result.B}B`;
  }
}

module.exports = CompareNumber;

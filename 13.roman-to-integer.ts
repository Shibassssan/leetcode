/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */
// @lc code=start

const drawTwoFromAnswer = (
  strings: string[],
  index: number,
  answer: number
) => {
  if (strings[index - 1] === 'I') {
    answer = answer - 2;
  }
  return answer;
};

const drawTwentyFromAnswer = (
  strings: string[],
  index: number,
  answer: number
) => {
  if (strings[index - 1] === 'X') {
    answer = answer - 20;
  }
  return answer;
};

const drawTwoHundredHandFromAnswer = (
  strings: string[],
  index: number,
  answer: number
) => {
  if (strings[index - 1] === 'C') {
    answer = answer - 200;
  }
  return answer;
};

const intToNumber = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = (s: string): number => {

  if (s === '') return 0;

  const strings = s.split('');

  let answer = 0;

  strings.map((string, index) => {
    if (string === 'I') {
      answer += intToNumber.I;
      return;
    };

    if (string === 'V') {
      answer += intToNumber.V;
      answer = drawTwoFromAnswer(strings, index, answer);
      return;
    }
    if (string === 'X') {
      answer += intToNumber.X
      answer = drawTwoFromAnswer(strings, index, answer);
      return;
    };

    if (string === 'L') {
      answer += intToNumber.L;
      answer = drawTwentyFromAnswer(strings, index, answer);
      return;
    }

    if (string === 'C') {
      answer += intToNumber.C;
      answer = drawTwentyFromAnswer(strings, index, answer);
      return;
    }

    if (string === 'D') {
      answer += intToNumber.D;
      answer = drawTwoHundredHandFromAnswer(strings, index, answer);
      return;
    };

    if (string === 'M') {
      answer += intToNumber.M;
      answer = drawTwoHundredHandFromAnswer(strings, index, answer);
      return;
    };
  });

  return answer;
};
// @lc code=end


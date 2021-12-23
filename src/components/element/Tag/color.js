const Red = ['INTJ', 'INTP', 'ENTP', 'ENTJ'];
const Green = ['INFJ', 'INFP', 'ENFP', 'ENFJ'];
const Blue = ['ISFJ', 'ISFP', 'ESFP', 'ESFJ'];
const Yellow = ['ISTJ', 'ISTP', 'ESTP', 'ESTJ'];

export const WhatMyColor = mbti => {
  if (Red.indexOf(mbti) > -1) {
    console.log(Red.indexOf(mbti));
    return 'red';
  }
  if (Green.indexOf(mbti) > -1) {
    return 'green';
  }
  if (Blue.indexOf(mbti) > -1) {
    return '#1b00ff';
  }
  if (Yellow.indexOf(mbti) > -1) {
    return 'yellow';
  }
  return '#000';
};

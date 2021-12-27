import React from 'react';
import Bit from '../modules/Bit';
import Tag from '../element/Tag';
const Choice = () => {
  return (
    <div>
      <Tag mbti="ENTJ">ENTJ</Tag>
      <Tag mbti="ENTJ" icon>
        ENTJ
      </Tag>
      <Tag mbti="ENTJ" _type="black">
        ENTJ
      </Tag>
      <Tag mbti="ENTJ" _type="black" icon>
        ENTJ
      </Tag>
    </div>
  );
};

export default Choice;

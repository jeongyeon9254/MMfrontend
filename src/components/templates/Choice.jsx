import React from 'react';
import Selects from '../modules/addInfo/LoSelct';
import { Input } from '../element';
import Select from '../modules/addInfo/LoSelct';
const Choice = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Input />
      <Input _type="date" />
      <Input _type="textarea" />
      <Input _type="password" />
      <Input _type="number" />
      <Input _type="posting" />
      <Input _type="chat" />
      <Input _type="comment" />
    </div>
  );
};

export default Choice;

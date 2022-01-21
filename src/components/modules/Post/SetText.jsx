import React from 'react';
import styled from 'styled-components';

// component
import { Input, Grid } from '../../element/index';

const SetText = props => {
  // props관리
  const { text, changeText, editText } = props;

  return (
    <Grid>
      <Title>내용 작성하기</Title>
      <Input
        _onChange={changeText}
        _defaultValue={editText ? editText : null}
        _type="posting"
      ></Input>
      <Limit>
        <span className="recent">{text.length} </span>
        <span>/ 100</span>
      </Limit>
    </Grid>
  );
};

const Title = styled.h3`
  font-weight: 700;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.gray_2};
`;

const Limit = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: ${props => props.theme.fontSizes.small};
  .recent {
    color: #aaa;
  }
`;

export default SetText;

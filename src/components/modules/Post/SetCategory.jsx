import React from 'react';
import styled from 'styled-components';

// component
import { Button, Grid } from '../../element/index';

const SetCategory = props => {
  // props관리
  const { tag, changeTag } = props;

  // 버튼
  const InterestList = ['운동', '공부', '대화', '게임', '재테크', '기타'];

  return (
    <Grid>
      <Title>카테고리 선택하기</Title>
      <Grid row gap="8px">
        {InterestList.map((interest, idx) => {
          return (
            <Button
              key={idx}
              size="12px"
              name={interest}
              BtnTag
              _onClick={changeTag}
              state={interest === tag ? 'active' : null}
            >
              {interest}
            </Button>
          );
        })}
      </Grid>
    </Grid>
  );
};

const Title = styled.h3`
  font-weight: 700;
  margin-bottom: 15px;
`;

export default SetCategory;

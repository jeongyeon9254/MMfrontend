import React from 'react';
import styled from 'styled-components';
import { Grid } from '../../element';

function MymbtiTxt(props) {
  const { mbti } = props;

  return (
    <Scroll>
      <Grid gap="35px">
        <Grid gap="11px">
          <ContentsTi>‘성취’를 통해 느끼는 행복</ContentsTi>
          <ContentTxt>
            통솔자형 사람은 크든 작든 성취 가능한 도전에 매력을 느낍니다. 이들은 충분한 시간과
            자원만 있으면 그 어떤 것도 실현 가능하다고 믿습니다. 이것이 통솔자형 사람을 뛰어난
            사업가로 만드는 이들만의 성격적 자질로, 전략적인 사고와 장기적인 안목과 더불어 빠른
            판단력과 정확성으로 계획을 단계별로 실행해 나감으로써 진정한 리더의 역할을 합니다.
            보통의 사람이라면 포기하고 말 일들도 대단한 의지력으로 꾸준히 밀어붙이는데, 이는
            이들에게 있어 자아실현을 위한 자기 암시이기도 합니다. 뛰어난 사회성을 발휘하여 다른
            동료들을 채찍질함으로써 함께 더 큰 성공과 성취를 이루고자 합니다.
          </ContentTxt>
        </Grid>
        <Grid gap="11px">
          <ContentsTi>‘성취’를 통해 느끼는 행복</ContentsTi>
          <ContentTxt>
            통솔자형 사람은 크든 작든 성취 가능한 도전에 매력을 느낍니다. 이들은 충분한 시간과
            자원만 있으면 그 어떤 것도 실현 가능하다고 믿습니다. 이것이 통솔자형 사람을 뛰어난
            사업가로 만드는 이들만의 성격적 자질로, 전략적인 사고와 장기적인 안목과 더불어 빠른
            판단력과 정확성으로 계획을 단계별로 실행해 나감으로써 진정한 리더의 역할을 합니다.
            보통의 사람이라면 포기하고 말 일들도 대단한 의지력으로 꾸준히 밀어붙이는데, 이는
            이들에게 있어 자아실현을 위한 자기 암시이기도 합니다. 뛰어난 사회성을 발휘하여 다른
            동료들을 채찍질함으로써 함께 더 큰 성공과 성취를 이루고자 합니다.
          </ContentTxt>
        </Grid>
      </Grid>
    </Scroll>
  );
}
const ContentsTi = styled.h4`
  font-size: ${x => x.theme.fontSizes.small};
  word-break: break-all;
`;
const ContentTxt = styled.p`
  line-height: 1.4;
  font-size: ${x => x.theme.fontSizes.maxSmall};
  word-break: break-all;
`;

const Scroll = styled.div`
  height: 312px;
  width: 100%;
  overflow-y: scroll;
`;
export default MymbtiTxt;

import React from 'react';
import Button from '../element/Button';
import Grid from '../element/Grid';
import Pen from '../../img/Icon/icon_pen.svg';
import ENFJ from '../../img/MBTI/ENFJ.svg';

const AddMyinfo = props => {
  return (
    <Grid gap="30px">
      <Button BtnBottom>다음으로</Button>
      <Button BtnBottom>매칭신청</Button>
      <Button BtnBottom>내 정보 수정하기</Button>
      <Button BtnBottom>게시글 올리기</Button>
      <Button BtnBottom color="#A7A7A7">
        다음으로
      </Button>
      <Button BtnBottom color="#EC6464">
        매칭 친구 끊기
      </Button>
      <Button width="81px" BtnTag fontcolor="black" color="#F9F9F9">
        운동
      </Button>
      <Button BtnTag width="81px">
        운동
      </Button>
      <Button BtnTag width="81px">
        재테크
      </Button>
      <Button BtnRound width="87px">
        자동 매칭
      </Button>
      <Button BtnRound width="68px">
        <img src={Pen} alt="" />
      </Button>
      <Button BtnIcon width="56px" color="#313131" fontcolor="#316811">
        <img src={ENFJ} alt="" />
        ENTJ
      </Button>
      <Button BtnIcon width="102px" color="#313131" fontcolor="#316811">
        <img style={{ width: '25px' }} src={ENFJ} alt="" />
        <p>전체보기</p>
      </Button>
      <Button BtnAdd fontcolor="black" width="149px">
        남성
      </Button>
      <Button BtnAdd color="#3F3F41" width="149px">
        여성
      </Button>
      <Button BtnAdd width="78px" color="btnChange">
        변경
      </Button>
    </Grid>
  );
};

export default AddMyinfo;

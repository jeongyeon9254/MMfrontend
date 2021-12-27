import React from 'react';
import Button from '../element/Button';
import Grid from '../element/Grid';

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
      <Button BtnTag>운동</Button>
      <Button BtnTag>재테크</Button>
      <Button BtnRound width="87px" height="87px" margin="25px">
        자동 매칭
      </Button>
      <Button BtnIcon></Button>
      <Button BtnGender>남성</Button>
      <Button BtnGender fontcolor="white" color="#3F3F41">
        여성
      </Button>
    </Grid>
  );
};

export default AddMyinfo;

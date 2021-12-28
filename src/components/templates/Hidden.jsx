import React from 'react';
import { Input, Grid } from '../element';
import { Box, Image, Tag, Button } from '../element/index';
import Pen from '../../img/Icon/icon_create.svg';
import Bit from '../modules/Bit';
const Hidden = () => {
  return (
    <div>
      <Grid border="1px solid #000" height="100%" padding="30px" gap="40px" align="flex-start">
        <h4 style={{ fontSize: '50px' }}> Element 정리 페이지</h4>
        <Grid gap="20px" align="flex-start">
          <p style={{ fontSize: 30 }}>Input Element</p>
          <p>normal input</p>
          <Input />
          <p>date input</p>
          <Input _type="date" />
          <p>textarea input</p>
          <Input _type="textarea" />
          <p>password input</p>
          <Input _type="password" />
          <p>number input</p>
          <Input _type="number" />
          <p>Post input</p>
          <Input _type="posting" />
          <p>Chat input</p>
          <Input _type="chat" />
          <p>Comment input</p>
          <Input _type="comment" />
        </Grid>
        <Grid gap="20px" width="320px" align="flex-start">
          <p style={{ fontSize: 30 }}>Tag Element</p>
          <p>normal tag</p>
          <Tag mbti="INFJ">INFJ</Tag>
          <p>icon tag</p>
          <Tag mbti="INFJ" icon>
            INFJ
          </Tag>
          <p>black tag</p>
          <Tag mbti="INFJ" _type="black">
            INFJ
          </Tag>
          <p>black icon tag</p>
          <Tag mbti="INFJ" _type="black" icon>
            INFJ
          </Tag>
          <Tag mbti="INTJ">INTJ</Tag>
          <Tag mbti="INTJ" icon>
            INTJ
          </Tag>
          <Tag mbti="INTJ" _type="black">
            INTJ
          </Tag>
          <Tag mbti="INTJ" _type="black" icon>
            INTJ
          </Tag>
          <Grid row gap="20px">
            {Bit.map((x, idx) => {
              return (
                <Tag small _type="Btn" key={idx} _src={x.image} color={x.color}>
                  {x.name}
                </Tag>
              );
            })}
          </Grid>
          <Grid row gap="20px">
            {Bit.map((x, idx) => {
              return (
                <Tag _type="Btn" key={idx} _src={x.image} color={x.color}>
                  {x.name}
                </Tag>
              );
            })}
          </Grid>
          <Grid row gap="20px">
            {Bit.map((x, idx) => {
              return (
                <Tag _type="Btn" key={idx} state="active" _src={x.image} color={x.color}>
                  {x.name}
                </Tag>
              );
            })}
          </Grid>
        </Grid>
        <Grid gap="20px" margin="0 0 50px 0">
          <p style={{ fontSize: 30 }}>Box Element</p>
          <p>Default Box</p>
          <Box margin="0 0 10px 0">기본 박스입니다.</Box>
          <p>Black Box</p>
          <Box black>블랙 박스입니다.</Box>
          <p>MyChat Box</p>
          <Box myChat>안녕?</Box>
          <Box myChat>반가워 나의 MBTI가 뭔지 알려줄까?</Box>
          <p>UserChat Box</p>
          <Box userChat>안녕?</Box>
          <Box userChat>반가워 나의 MBTI가 뭔지 알려줄까?</Box>
          <p>Profile Box</p>
          <Box profile>나의 프로필 인사말을 적어주세요!</Box>
          <p>Comment Box</p>
          <Box comment>댓글을 적어주세요!</Box>
        </Grid>
        <Grid gap="20px" margin="0 0 50px 0">
          <p style={{ fontSize: 30 }}>Image Element</p>
          <p>Default Image</p>
          <Image></Image>
          <p>Round Image</p>
          <Image round width="50%" margin="0 auto"></Image>
          <p>Border Image</p>
          <Image border width="50%" margin="0 auto"></Image>
        </Grid>
      </Grid>
      <Grid gap="30px" align="flex-start">
        <Button BtnBottom>다음으로</Button>
        <Button BtnBottom state="Inactive">
          다음으로
        </Button>
        <Button BtnBottom state="Wait">
          매칭 친구 끊기
        </Button>

        <Button BtnRound width="87px">
          자동 매칭
        </Button>
        <Button BtnRound width="68px">
          <img src={Pen} alt="" />
        </Button>
        <Button BtnTag>운동</Button>
        <Button BtnTag state="active">
          운동
        </Button>
        <Button BtnTag state="In">
          전체 보기
        </Button>
        <Button BtnAdd width="149px">
          남성
        </Button>
        <Button BtnAdd width="149px" state="active">
          여성
        </Button>
        <Button BtnAdd width="78px" color="#A7A7A7">
          변경
        </Button>
      </Grid>
    </div>
  );
};

export default Hidden;

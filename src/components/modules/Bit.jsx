import INFJ from '../../img/MBTI/Normal/INFJ.svg';
import INFP from '../../img/MBTI/Normal/INFP.svg';
import ENFJ from '../../img/MBTI/Normal/ENFJ.svg';
import ENFP from '../../img/MBTI/Normal/ENFP.svg';
import ISTJ from '../../img/MBTI/Normal/ISTJ.svg';
import ISFJ from '../../img/MBTI/Normal/ISFJ.svg';
import ESTJ from '../../img/MBTI/Normal/ESTJ.svg';
import ESFJ from '../../img/MBTI/Normal/ESFJ.svg';
import ENTJ from '../../img/MBTI/Normal/ENTJ.svg';
import INTP from '../../img/MBTI/Normal/INTP.svg';
import INTJ from '../../img/MBTI/Normal/INTJ.svg';
import ENTP from '../../img/MBTI/Normal/ENTP.svg';
import ESTP from '../../img/MBTI/Normal/ESTP.svg';
import ISFP from '../../img/MBTI/Normal/ISFP.svg';
import ISTP from '../../img/MBTI/Normal/ISTP.svg';
import ESFP from '../../img/MBTI/Normal/ESFP.svg';

import INFJB from '../../img/MBTI/Black/INFJ.svg';
import INFPB from '../../img/MBTI/Black/INFP.svg';
import ENFJB from '../../img/MBTI/Black/ENFJ.svg';
import ENFPB from '../../img/MBTI/Black/ENFP.svg';
import ISTJB from '../../img/MBTI/Black/ISTJ.svg';
import ISFJB from '../../img/MBTI/Black/ISFJ.svg';
import ESTJB from '../../img/MBTI/Black/ESTJ.svg';
import ESFJB from '../../img/MBTI/Black/ESFJ.svg';
import ENTJB from '../../img/MBTI/Black/ENTJ.svg';
import INTPB from '../../img/MBTI/Black/INTP.svg';
import INTJB from '../../img/MBTI/Black/INTJ.svg';
import ENTPB from '../../img/MBTI/Black/ENTP.svg';
import ESTPB from '../../img/MBTI/Black/ESTP.svg';
import ISFPB from '../../img/MBTI/Black/ISFP.svg';
import ISTPB from '../../img/MBTI/Black/ISTP.svg';
import ESFPB from '../../img/MBTI/Black/ESFP.svg';

import INFJW from '../../img/MBTI/White/INFJ.svg';
import INFPW from '../../img/MBTI/White/INFP.svg';
import ENFJW from '../../img/MBTI/White/ENFJ.svg';
import ENFPW from '../../img/MBTI/White/ENFP.svg';
import ISTJW from '../../img/MBTI/White/ISTJ.svg';
import ISFJW from '../../img/MBTI/White/ISFJ.svg';
import ESTJW from '../../img/MBTI/White/ESTJ.svg';
import ESFJW from '../../img/MBTI/White/ESFJ.svg';
import ENTJW from '../../img/MBTI/White/ENTJ.svg';
import INTPW from '../../img/MBTI/White/INTP.svg';
import INTJW from '../../img/MBTI/White/INTJ.svg';
import ENTPW from '../../img/MBTI/White/ENTP.svg';
import ESTPW from '../../img/MBTI/White/ESTP.svg';
import ISFPW from '../../img/MBTI/White/ISFP.svg';
import ISTPW from '../../img/MBTI/White/ISTP.svg';
import ESFPW from '../../img/MBTI/White/ESFP.svg';

import Marker_enfj from '../../img/marker/Marker_enfj.svg';
import Marker_enfp from '../../img/marker/Marker_enfp.svg';
import Marker_entj from '../../img/marker/Marker_entj.svg';
import Marker_entp from '../../img/marker/Marker_entp.svg';
import Marker_esfj from '../../img/marker/Marker_esfj.svg';
import Marker_esfp from '../../img/marker/Marker_esfp.svg';
import Marker_estj from '../../img/marker/Marker_estj.svg';
import Marker_estp from '../../img/marker/Marker_estp.svg';
import Marker_infj from '../../img/marker/Marker_infj.svg';
import Marker_infp from '../../img/marker/Marker_infp.svg';
import Marker_intj from '../../img/marker/Marker_intj.svg';
import Marker_intp from '../../img/marker/Marker_intp.svg';
import Marker_isfj from '../../img/marker/Marker_isfj.svg';
import Marker_isfp from '../../img/marker/Marker_isfp.svg';
import Marker_istj from '../../img/marker/Marker_istj.svg';
import Marker_istp from '../../img/marker/Marker_istp.svg';

const Bit = [
  {
    name: 'INFJ',
    image: INFJ,
    marker: Marker_infj,
    color: '#D0ED91',
    circleColor: '#d0ed917f',
    title: '선의의 옹호자',
    virtue: '솔직함. 통찰력있음',
    Characteristics: ['높은 통찰', '공동체의 이익 중요'],
    ImageBlack: INFJB,
    ImageWhite: INFJW,
  },
  {
    name: 'INFP',
    image: INFP,
    marker: Marker_infp,
    color: '#5ECC17',
    circleColor: '#5fcc177c',
    title: '열정적인 중재자',
    virtue: '이상적임',
    Characteristics: ['성실함', '이해심'],
    ImageBlack: INFPB,
    ImageWhite: INFPW,
  },
  {
    name: 'ENFJ',
    image: ENFJ,
    marker: Marker_enfj,
    color: '#83B069',
    circleColor: '#83b0697d',
    title: '정의로운 사회운동가 ',
    virtue: '인상적이며 따듯함.',
    Characteristics: ['사교적', '타인을 존중'],
    ImageBlack: ENFJB,
    ImageWhite: ENFJW,
  },
  {
    name: 'ENFP',
    image: ENFP,
    marker: Marker_enfp,
    color: '#83B069',
    circleColor: '#3d840d78',
    title: '재기발랄한 활동가',
    virtue: '창의적',
    Characteristics: ['상상력 풍부', '뛰어난 순발력'],
    ImageBlack: ENFPB,
    ImageWhite: ENFPW,
  },
  {
    name: 'ISTJ',
    image: ISTJ,
    marker: Marker_istj,
    color: '#A6DDFF',
    circleColor: '#a6ddff83',
    title: '청렴결백한 논리주의자',
    virtue: '지혜로움, 근면성실함',
    Characteristics: ['책임감 강함', '보수적'],
    ImageBlack: ISTJB,
    ImageWhite: ISTJW,
  },
  {
    name: 'ISFJ',
    image: ISFJ,
    marker: Marker_isfj,
    color: '#53B5FF',
    circleColor: '#53b4ff7d',
    title: '용감한 수호자',
    virtue: '다정하고 사려깊음. 책임감이 강함',
    Characteristics: ['인내심이 강함', '차분하고 헌식적'],
    ImageBlack: ISFJB,
    ImageWhite: ISFJW,
  },
  {
    name: 'ESTJ',
    image: ESTJ,
    marker: Marker_estj,
    color: '#0085FF',
    circleColor: '#0084ff86',
    title: '엄격한 관리자',
    virtue: '품격있음',
    Characteristics: ['체계적', '규칙준수'],
    ImageBlack: ESTJB,
    ImageWhite: ESTJW,
  },
  {
    name: 'ESFJ',
    image: ESFJ,
    marker: Marker_esfj,
    color: '#528AB2',
    circleColor: '#528ab27a',
    title: '사교적인 외교관',
    virtue: '협조적이고 성실함',
    Characteristics: ['동정심', '친절함'],
    ImageBlack: ESFJB,
    ImageWhite: ESFJW,
  },
  {
    name: 'ENTJ',
    image: ENTJ,
    marker: Marker_entj,
    color: '#DB45FF',
    circleColor: '#da45ff7a',
    title: '대담한 통솔자',
    virtue: '대체로 솔직하며 결단력 있는 사람',
    Characteristics: ['철저한 준비', '활동적임'],
    ImageBlack: ENTJB,
    ImageWhite: ENTJW,
  },
  {
    name: 'INTP',
    image: INTP,
    marker: Marker_intp,
    color: '#FF83CA',
    circleColor: '#ff83c981',
    title: '논리적인 사색가',
    virtue: '유연적이고 분석적임',
    Characteristics: ['호기심이 많음', '잠재력과 가능성'],
    ImageBlack: INTPB,
    ImageWhite: INTPW,
  },
  {
    name: 'INTJ',
    image: INTJ,
    marker: Marker_intj,
    color: '#FC94FF',
    circleColor: '#fb94ff81',
    title: '용의주도한 전략가',
    virtue: '명석하고 창의적임',
    Characteristics: ['의지가 강함', '독립적'],
    ImageBlack: INTJB,
    ImageWhite: INTJW,
  },
  {
    name: 'ENTP',
    image: ENTP,
    marker: Marker_entp,
    color: '#9B00FF',
    circleColor: '#9900ff7f',
    title: '뜨거운 논쟁을 즐기는 변론가',
    virtue: '아는 것이 많고 독창적임',
    Characteristics: ['독창적', '박학다식'],
    ImageBlack: ENTPB,
    ImageWhite: ENTPW,
  },
  {
    name: 'ESTP',
    image: ESTP,
    marker: Marker_estp,
    color: '#F7CB16',
    circleColor: '#f7ca1681',
    title: '모험을 즐기는 사업가',
    virtue: '매사에 유연함',
    Characteristics: ['관용적임', '타협적'],
    ImageBlack: ESTPB,
    ImageWhite: ESTPW,
  },
  {
    name: 'ISFP',
    image: ISFP,
    marker: Marker_isfp,
    color: '#F7CB16',
    circleColor: '#f1e68583',
    title: '호기심 많은 예술가',
    virtue: '오픈 마인드',
    Characteristics: ['온화함', '여유로움'],
    ImageBlack: ISFPB,
    ImageWhite: ISFPW,
  },
  {
    name: 'ISTP',
    image: ISTP,
    marker: Marker_istp,
    color: '#F7CB16',
    circleColor: '#ffeb0f83',
    title: '만능 재주꾼',
    virtue: '발빠르게 움직이며 관조적임',
    Characteristics: ['과묵함', '적응력이 강함'],
    ImageBlack: ISTPB,
    ImageWhite: ISTPW,
  },
  {
    name: 'ESFP',
    image: ESFP,
    marker: Marker_esfp,
    color: '#F7CB16',
    circleColor: '#ffff567d',
    title: '자유로운 영혼의 연예인',
    virtue: '사교적이고 긍정적인 타입',
    Characteristics: ['호기심이 많음', '사실 중시'],
    ImageBlack: ESFPB,
    ImageWhite: ESFPW,
  },
];

//내 MBTI 속정 가지고 오기
export const Mybit = mbti => {
  return Bit.find(x => {
    return x.name === mbti;
  });
};

export default Bit;

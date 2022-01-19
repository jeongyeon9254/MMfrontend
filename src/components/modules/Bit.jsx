import INFJ from '../../img/MBTI/INFJ.svg';
import INFP from '../../img/MBTI/INFP.svg';
import ENFJ from '../../img/MBTI/ENFJ.svg';
import ENFP from '../../img/MBTI/ENFP.svg';
import ISTJ from '../../img/MBTI/ISTJ.svg';
import ISFJ from '../../img/MBTI/ISFJ.svg';
import ESTJ from '../../img/MBTI/ESTJ.svg';
import ESFJ from '../../img/MBTI/ESFJ.svg';
import ENTJ from '../../img/MBTI/ENTJ.svg';
import INTP from '../../img/MBTI/INTP.svg';
import INTJ from '../../img/MBTI/INTJ.svg';
import ENTP from '../../img/MBTI/ENTP.svg';
import ESTP from '../../img/MBTI/ESTP.svg';
import ISFP from '../../img/MBTI/ISFP.svg';
import ISTP from '../../img/MBTI/ISTP.svg';
import ESFP from '../../img/MBTI/ESFP.svg';

const Bit = [
  {
    name: 'INFJ',
    image: INFJ,
    color: '#D0ED91',
    title: '선의의 옹호자',
    virtue: '솔직함. 통찰력있음',
  },
  {
    name: 'INFP',
    image: INFP,
    color: '#5ECC17',
    title: '열정적인 중재자',
    virtue: '이상적임',
  },
  {
    name: 'ENFJ',
    image: ENFJ,
    color: '#316811',
    title: '정의로운 사회운동가 ',
    virtue: '인상적이며 따듯함.',
  },
  {
    name: 'ENFP',
    image: ENFP,
    color: '#3C840D',
    title: '재기발랄한 활동가',
    virtue: '창의적',
  },
  {
    name: 'ISTJ',
    image: ISTJ,
    color: '#C0DFF2',
    title: '청렴결백한 논리주의자',
    virtue: '지혜로움, 근면성실함',
  },
  {
    name: 'ISFJ',
    image: ISFJ,
    color: '#92C4EA',
    title: '용감한 수호자',
    virtue: '다정하고 사려깊음. 책임감이 강함',
  },
  {
    name: 'ESTJ',
    image: ESTJ,
    color: '#3c3cd3',
    title: '엄격한 관리자',
    virtue: '품격있음',
  },
  {
    name: 'ESFJ',
    image: ESFJ,
    color: '#5C51FF',
    title: '사교적인 외교관',
    virtue: '협조적이고 성실함',
  },
  {
    name: 'ENTJ',
    image: ENTJ,
    color: '#DB45FF',
    title: '대담한 통솔자',
    virtue: '대체로 솔직하며 결단력 있는 사람',
  },
  {
    name: 'INTP',
    image: INTP,
    color: '#FF83CA',
    title: '논리적인 사색가',
    virtue: '유연적이고 분석적임',
  },
  {
    name: 'INTJ',
    image: INTJ,
    color: '#FC94FF',
    title: '용의주도한 전략가',
    virtue: '명석하고 창의적임',
  },
  {
    name: 'ENTP',
    image: ENTP,
    color: '#9B00FF',
    title: '뜨거운 논쟁을 즐기는 변론가',
    virtue: '아는 것이 많고 독창적임',
  },
  {
    name: 'ESTP',
    image: ESTP,
    color: '#F7CB16',
    title: '모험을 즐기는 사업가',
    virtue: '매사에 유연함',
  },
  {
    name: 'ISFP',
    image: ISFP,
    color: '#F4E998',
    title: '호기심 많은 예술가',
    virtue: '오픈 마인드',
  },
  {
    name: 'ISTP',
    image: ISTP,
    color: '#FFEB0F',
    title: '만능 재주꾼',
    virtue: '발빠르게 움직이며 관조적임',
  },
  {
    name: 'ESFP',
    image: ESFP,
    color: '#EAD833',
    title: '자유로운 영혼의 연예인',
    virtue: '사교적이고 긍정적인 타입',
  },
];

export const Mybit = mbti => {
  return Bit.find(x => {
    return x.name === mbti;
  });
};

export default Bit;

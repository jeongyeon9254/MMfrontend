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
  },
  {
    name: 'INFP',
    image: INFP,
    marker: Marker_infp,
    color: '#5ECC17',
    circleColor: '#5fcc177c',
    title: '열정적인 중재자',
    virtue: '이상적임',
  },
  {
    name: 'ENFJ',
    image: ENFJ,
    marker: Marker_enfj,
    color: '#83B069',
    circleColor: '#83b0697d',
    title: '정의로운 사회운동가 ',
    virtue: '인상적이며 따듯함.',
  },
  {
    name: 'ENFP',
    image: ENFP,
    marker: Marker_enfp,
    color: '#3C840D',
    circleColor: '#3d840d78',
    title: '재기발랄한 활동가',
    virtue: '창의적',
  },
  {
    name: 'ISTJ',
    image: ISTJ,
    marker: Marker_istj,
    color: '#A6DDFF',
    circleColor: '#a6ddff83',
    title: '청렴결백한 논리주의자',
    virtue: '지혜로움, 근면성실함',
  },
  {
    name: 'ISFJ',
    image: ISFJ,
    marker: Marker_isfj,
    color: '#53B5FF',
    circleColor: '#53b4ff7d',
    title: '용감한 수호자',
    virtue: '다정하고 사려깊음. 책임감이 강함',
  },
  {
    name: 'ESTJ',
    image: ESTJ,
    marker: Marker_estj,
    color: '#0085FF',
    circleColor: '#0084ff86',
    title: '엄격한 관리자',
    virtue: '품격있음',
  },
  {
    name: 'ESFJ',
    image: ESFJ,
    marker: Marker_esfj,
    color: '#528AB2',
    circleColor: '#528ab27a',
    title: '사교적인 외교관',
    virtue: '협조적이고 성실함',
  },
  {
    name: 'ENTJ',
    image: ENTJ,
    marker: Marker_entj,
    color: '#DB45FF',
    circleColor: '#da45ff7a',
    title: '대담한 통솔자',
    virtue: '대체로 솔직하며 결단력 있는 사람',
  },
  {
    name: 'INTP',
    image: INTP,
    marker: Marker_intp,
    color: '#FF83CA',
    circleColor: '#ff83c981',
    title: '논리적인 사색가',
    virtue: '유연적이고 분석적임',
  },
  {
    name: 'INTJ',
    image: INTJ,
    marker: Marker_intj,
    color: '#FC94FF',
    circleColor: '#fb94ff81',
    title: '용의주도한 전략가',
    virtue: '명석하고 창의적임',
  },
  {
    name: 'ENTP',
    image: ENTP,
    marker: Marker_entp,
    color: '#9B00FF',
    circleColor: '#9900ff7f',
    title: '뜨거운 논쟁을 즐기는 변론가',
    virtue: '아는 것이 많고 독창적임',
  },
  {
    name: 'ESTP',
    image: ESTP,
    marker: Marker_estp,
    color: '#F7CB16',
    circleColor: '#f7ca1681',
    title: '모험을 즐기는 사업가',
    virtue: '매사에 유연함',
  },
  {
    name: 'ISFP',
    image: ISFP,
    marker: Marker_isfp,
    color: '#F1E685',
    circleColor: '#f1e68583',
    title: '호기심 많은 예술가',
    virtue: '오픈 마인드',
  },
  {
    name: 'ISTP',
    image: ISTP,
    marker: Marker_istp,
    color: '#FFEB0F',
    circleColor: '#ffeb0f83',
    title: '만능 재주꾼',
    virtue: '발빠르게 움직이며 관조적임',
  },
  {
    name: 'ESFP',
    image: ESFP,
    marker: Marker_esfp,
    color: '#FFFF56',
    circleColor: '#ffff567d',
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

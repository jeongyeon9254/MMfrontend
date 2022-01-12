import moment from 'moment';

export const returnTime = date => {
  const now = moment();
  console.log(now);
  const InputDate = date ? date : '';
  const Time = {
    day: Math.round(moment.duration(now.diff(date)).asDays()),
    hour: Math.round(moment.duration(now.diff(date)).asHours()),
    minute: Math.round(moment.duration(now.diff(date)).asMinutes()),
    second: Math.round(moment.duration(now.diff(date)).asMilliseconds()),
  };
  const Exceeding = InputDate.split(' ')[0].substring(4).split('-');
  const Date = Exceeding[1] + '월' + Exceeding[2] + '일';
  if (Time.minute > 60) {
    if (Time.hour > 24) {
      if (Time.day > 7) {
        return Date;
      } else {
        return `${Time.day}일 전`;
      }
    } else {
      return `${Time.hour}시간 전`;
    }
  } else if (Time.minute < 3) {
    return '방금';
  } else {
    return `${Time.minute}분 전`;
  }
};

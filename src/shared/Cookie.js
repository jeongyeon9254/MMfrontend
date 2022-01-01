const getCookie = name => {
  // 쿠키 값을 가져옵니다.
  let value = '; ' + document.cookie;
  // 키 값을 기준으로 파싱(구성 성분으로 분해)합니다.
  let parts = value.split(`; ${name}=`);
  // value를 return!
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
};

const setCookie = (name, value, exp = 5) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 10000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()};path=/`;
};

const delCookie = name => {
  let date = new Date('2020-01-01').toUTCString();
  document.cookie = name + '=; expires=' + date;
};

export { setCookie, delCookie, getCookie };

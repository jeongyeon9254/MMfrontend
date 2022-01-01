const getCookie = key => {
  let cookieKey = key + '=';
  let result = '';
  const cookieArr = document.cookie.split(';');

  for (let i = 0; i < cookieArr.length; i++) {
    if (cookieArr[i][0] === ' ') {
      cookieArr[i] = cookieArr[i].substring(1);
    }

    if (cookieArr[i].indexOf(cookieKey) === 0) {
      result = cookieArr[i].slice(cookieKey.length, cookieArr[i].length);
      return result;
    }
  }
  return result;
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

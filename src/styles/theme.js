const calcRem = size => `${size / 16}rem`;

const fontSizes = {
  maxSmall: calcRem(12),
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  titleSize: calcRem(50),
};

const paddings = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const interval = {
  base: calcRem(50),
  lg: calcRem(100),
  xl: calcRem(150),
  xxl: calcRem(200),
};

const verticalInterval = {
  base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
};

const deviceSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '450px',
  tablet: '768px',
  tabletL: '1024px',
};

const colors = {
  black: '#000000',
  white: '#FFFFFF',
  gray_1: '#E3E3E3',
  gray_2: '#3F3F41',
  green_1: '#3cb46e',
  btnTag: '#F9F9F9',
  input_gray1: '#E1E1E1',
  input_gray2: '#ececec',
  input_gray3: '#9b9b9b',
};

const radius = {
  tag: '60px',
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};

const theme = {
  fontSizes,
  colors,
  deviceSizes,
  device,
  paddings,
  margins,
  interval,
  verticalInterval,
  radius,
};

export default theme;

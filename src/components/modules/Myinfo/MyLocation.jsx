import React from 'react';
import styled from 'styled-components';
import { Grid, Tag, Select, Box } from '../../element';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

function MyLocation(props) {
  const { Location, Emit } = props;
  const [active, SetActive] = React.useState(Location);
  React.useEffect(() => {
    Emit(active);
  }, [active]);
  return (
    <Grid row gap="8px" padding="3px 0" align="center" justify="space-between">
      <Box width="119px" padding="11px" align="center">
        <Txt>서울특별시</Txt>
      </Box>
      <Select
        width="183px"
        padding="5px 10px 5px 17px"
        fontsize="14px"
        high="36px"
        defult={Location}
        Emit={Emit}
      ></Select>
    </Grid>
  );
}
MyLocation.defaultProps = {
  Emit: () => {},
};

const Txt = styled.div`
  color: #3f3f41;
`;
export default MyLocation;

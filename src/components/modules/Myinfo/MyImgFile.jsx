import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Image, Grid } from '../../element';
import icon_edit from '../../../img/Icon/icon_edit.svg';
function MyImgFile(props) {
  const { Img, mbti, Emit } = props;
  const [active, SetActive] = React.useState('string');
  const [Preview, SetPreview] = React.useState(Img);
  const fileRef = React.useRef();

  useEffect(() => {
    Emit(active);
  }, [active]);

  const handleFileOnChange = e => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();
    SetActive(file);
    reader.readAsDataURL(file);
    reader.onload = () => {
      SetPreview(reader.result);
    };
  };

  const handleFileUploadClick = e => {
    e.preventDefault();
    fileRef.current.click();
  };

  return (
    <Grid gap="10px">
      <Ti>프로필 사진</Ti>
      <Image
        photoRound
        width="139px"
        mbti={mbti}
        src={Preview}
        pointer
        _onClick={handleFileUploadClick}
      ></Image>
      <Point>
        <img src={icon_edit} />
      </Point>
      <input
        ref={fileRef}
        hidden={true}
        id="file"
        type="file"
        onChange={handleFileOnChange}
        accept="image/*"
      />
    </Grid>
  );
}
MyImgFile.defaultProps = {
  Emit: () => {},
  mbti: 'INTJ',
};

const Point = styled.div`
  position: absolute;
  left: 57%;
  bottom: -4px;
`;
const Ti = styled.p`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.small};
  font-weight: bold;
`;
export default MyImgFile;

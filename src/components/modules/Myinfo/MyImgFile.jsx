import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Image, Grid } from '../../element';
function MyImgFile(props) {
  const { Img, mbti, Emit } = props;
  const [active, SetActive] = React.useState('string');
  const [Preview, SetPreview] = React.useState(Img);
  const fileRef = React.useRef();

  useEffect(() => {
    Emit(active);
    console.log(active);
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
    <Grid>
      <Image
        photoRound
        width="70px"
        mbti={mbti}
        src={Preview}
        pointer
        _onClick={handleFileUploadClick}
      ></Image>
      <Point>
        <Image border radius="100%" width="30px" mbti={mbti} />
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
  left: 54%;
  bottom: 0px;
`;
export default MyImgFile;

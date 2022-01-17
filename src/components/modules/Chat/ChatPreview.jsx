import React from 'react';
import styled from 'styled-components';

function ChatPreview(props) {
  const { On, click, data } = props;
  if (On) {
    return (
      <PreviewBox
        onClick={() => {
          click(false);
        }}
      >
        <PreviewImg src={data.image} />
      </PreviewBox>
    );
  }
}

const PreviewBox = styled.div`
  width: 100%;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  left: 0px;
  top: -150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PreviewImg = styled.img``;
export default ChatPreview;

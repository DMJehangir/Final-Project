import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 360px;
    margin-bottom: 45px;
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%;
    height: 202px;
    background-color: #999;
    cursor: pointer;
`;

const Details = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12px;
`;

const channelImg = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
`;

const Texts = styled.div``;

const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({theme})=> theme.text};
`;

const channelName = styled.h2`
    font-size: 14px;
    color: ${({theme})=> theme.textSoft};
    margin: 9px 0px;
`;

const Info = styled.div`
    font-size: 14px;
    color: ${({theme})=> theme.textSoft};
`;

function Card() {
  return (
    <Container>
      <Image src='https://images4.alphacoders.com/414/thumb-1920-41416.jpg'/>
      <Details>
        <channelImg/>
        <Texts>
          <Title>Test Video</Title>
          <channelName>TutorNext</channelName>
          <Info>200 views . 1 day ago</Info>
        </Texts>
      </Details>
    </Container>
  )
}

export default Card

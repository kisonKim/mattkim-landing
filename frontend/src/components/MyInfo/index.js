import React from 'react'
import styled from 'styled-components'
import { useScrollFadeIn } from '../../hooks/useScrollFadeIn';
import profile from '../../images/profile.jpg'
const MyInfo = () => {
  const animatedItem = useScrollFadeIn({threshold:0.7,delay:'.2'});

  return (
    <Container>
      <LeftBox>
        <ProfileImage {...animatedItem} />
      </LeftBox>
      <RightBox>

      </RightBox>
    </Container>
  )
}

const Container = styled.section`
  display:flex;
  width:100vw;
  height:100vh;
  background-color: lightgrey;
`;

const LeftBox = styled.div`
  flex:1;
    
`;

const RightBox = styled.div`
  flex:1;

`;

const ProfileImage = styled.div`
  width:250px;
  height:250px;
  border-radius: 100%;
  margin: 50px 0 0 50px;
  background-image: url(${profile});
  background-position: top;
  background-size: contain;
  box-shadow: 0 0 10px 5px white;
`;

export default MyInfo;
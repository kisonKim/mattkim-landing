import React from 'react'
import styled from 'styled-components'
import { useScrollFadeIn } from '../../hooks/useScrollFadeIn';
import profile from '../../images/profile.jpg'
import gitImg from '../../images/gitLogo.png'

const MyInfo = () => {
  const profileImgAnim = useScrollFadeIn({threshold:0.7,delay:'.2'});
  const profileNameAnim = useScrollFadeIn({threshold:0.7,delay:'.4'});
  const profileEmailAnim = useScrollFadeIn({threshold:0.7,delay:'.6'});
  const InfoBoxAnim = useScrollFadeIn({threshold:0.7,delay:'.8'});
  return (
    <Container>
      <LeftBox>
        <ProfileBox>
          <ProfileImage {...profileImgAnim} />
          <div className="name" {...profileNameAnim}>Matthew Kim (김기손)</div>
          <div className="email" {...profileEmailAnim}>npolly7@hanyang.ac.kr</div>
        </ProfileBox>
      </LeftBox>
      <RightBox>
        <InfoBox {...InfoBoxAnim}>
          <div className="git">
            <img src={gitImg} width={40} height={40} />
            <a href={"https://github.com/kisonKim"} target={"_blank"}>https://github.com/kisonKim</a>
            </div>
          <div className="briphy"></div>
        </InfoBox>
      </RightBox>
    </Container>
  )
}

const Container = styled.section`
  display:flex;
  width:100vw;
  height:100vh;
  background:linear-gradient(#aecdad, lightgrey);
`;

const LeftBox = styled.div`
  flex:1;
  display:flex;
  justify-content: center;
  align-items: center;
`;

const RightBox = styled.div`
  flex:1;
  display:flex;
  align-items: center;
`;

const ProfileBox = styled.div`
  text-align: center;

  .name {
    margin: 20px 0;
    font-size:30px;
    font-weight:600;
  }

  .email {
    color: grey;
  }
`;

const InfoBox = styled.div`
  background-color:yellow;
  margin-left:10%;
  width:70%;
  height:60%;
  background:linear-gradient(#f9d3a5, lightgrey);
  box-shadow: 0 10px 20px 1px white;


`;


const ProfileImage = styled.div`
  width:300px;
  height:300px;
  border-radius: 100%;
  background-image: url(${profile});
  background-position: top;
  background-size: contain;
  box-shadow: 0 0 10px 5px white;
`;

export default MyInfo;
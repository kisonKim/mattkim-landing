import React from 'react'
import styled from 'styled-components'
import { useScrollFadeIn } from '../../hooks/useScrollFadeIn';
import profile from '../../images/profile.jpg'
import gitImg from '../../images/gitLogo.png'
import sticker from '../../images/sticker.png'

const MyInfo = () => {
  const profileImgAnim = useScrollFadeIn({threshold:0.7,delay:'.2'});
  const profileNameAnim = useScrollFadeIn({threshold:0.7,delay:'.4'});
  const profileRoleAnim = useScrollFadeIn({threshold:0.7,delay:'.4'});
  const profileEmailAnim = useScrollFadeIn({threshold:0.7,delay:'.6'});
  const InfoBoxAnim = useScrollFadeIn({threshold:0.7,delay:'.8'});
  return (
    <Container>
      <LeftBox>
        <InfoBox {...InfoBoxAnim}>
          <div className="stickerHead">
            Informations
          </div>
          <div className="git">
            <h2> - Bri-x WEB Developer<small>(front, back)</small></h2>
            <img className="gitImage" src={gitImg} alt="git logo"/>
            <a href={"https://github.com/kisonKim"} rel="noreferrer" target={"_blank"}>https://github.com/kisonKim</a>
          </div>
          <div className="portfolios">
            <h2> PORTFOLIOS </h2>
            <ul> 
              <li><a href={"https://www.briphy.com"} rel="noreferrer" target={"_blank"}>브리피 LandingPage - Vanilla JS</a></li> 
              <li><a href={"http://phmat.org"} rel="noreferrer" target={"_blank"}>대한의사협회:공중보건의료지원단 - PHP</a></li> 
            </ul>
            <h2> SPECs</h2>
            <img alt="html5" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=black"/> 
            <img alt="css3" src ="https://img.shields.io/badge/CSS3-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=black"/> 
            <img alt="JS" src ="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=black"/> 
            <img alt="React" src ="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=black"/> 
            <img alt="Node.js" src ="https://img.shields.io/badge/Node.js-339933.svg?&style=for-the-badge&logo=Node.js&logoColor=black"/> 
            <img alt="PHP" src ="https://img.shields.io/badge/php-777BB4.svg?&style=for-the-badge&logo=php&logoColor=white"/> 
          </div>
          <img className="sticker" src={sticker} width={140} alt="sticker" />
        </InfoBox>
      </LeftBox>
      <RightBox>
        <ProfileBox>
          <ProfileImage {...profileImgAnim} />
          <div className="name" {...profileNameAnim}>Matthew Kim (김기손)</div>
          <div className="role" {...profileRoleAnim}>Front-End Developer</div>
          <div className="email" {...profileEmailAnim}>npolly7@hanyang.ac.kr</div>
        </ProfileBox>
      </RightBox>
    </Container>
  )
}

const Container = styled.section`
  display:flex;
  width:100vw;
  height:100vh;
  padding-top:10%;
  background:linear-gradient(#aecdad, lightgrey);
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    flex-flow: column-reverse;
    min-width:0;
    height:fit-content;
  }
`;

const LeftBox = styled.div`
  flex:1;
  display:flex;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    margin-top:20%;
  }
`;

const RightBox = styled.div`
  flex:1;
  display:flex;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    justify-content : center ;
  }
`;

const ProfileBox = styled.div`
  text-align: center;
  margin-left:20%;
  .name {
    margin: 20px 0 10px;
    font-size:30px;
    font-weight:600;
  }

  .role {
    color: grey;
    margin: 10px 0;
  }

  .email {
    color: grey;
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin-left:0;
  }
`;

const InfoBox = styled.div`
  position:relative;
  background-color:yellow;
  width:60%;
  height:60%;
  padding:40px;
  background:linear-gradient(#ffcc3c,#ffe18c);
  box-shadow: 0 10px 20px 1px white;
  font-size:1.5rem;
  .stickerHead {
    text-align: center;
    font-weight: 800;
    font-size: 2em;
    color: #aecdad;
  }

  .portfolios {
    ul li {
      font-weight:light;
      font-size:0.8rem;
      &:not(:first-child) {
        margin-top:10px;
      } 
    }
  }
  .gitImage {
    vertical-align: middle;
    margin-right:10px;
    width:40px;
    height:40px;
  }
  .sticker {
    position:absolute;
    top:-10px;
    left:50%;
    transform: translate3d(-50%,-50%,0);
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 80%;
    padding: 40px 10px;
    font-size:0.8rem;
    h2{
      font-size: 1.5em;
    }
    
    .stickerHead {
      font-size:2em;
    }
    .gitImage {
      width:30px;
      height:30px;
    }
  }
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
import React,{ useState, useEffect, useRef } from 'react'
import styled,{ keyframes } from 'styled-components'
import keyvisualImg from '../../images/keyvisual.jpg'



const Keyvisual = () => {
  const typingTextArr = ['A JS Developer','A Front-end Developer','A ReactJS Developer', 'A NodeJS Developer', 'A Full Stack Developer']; /* The text */ 
  let textIdx = 0;
  let i = 0;
  let typingSpeed = 40;
  const typingText = useRef(null);
  
  const typingTextWriter = () => {
    if(i < typingTextArr[textIdx].length){
      typingText.current.innerHTML += typingTextArr[textIdx].charAt(i);
      i++;
      setTimeout(typingTextWriter, typingSpeed);
    }else{
      setTimeout(typingTextDelete, 850);
    }
  }

  const typingTextDelete = () => {
    if (i > 0) {
      let str = typingText.current.innerHTML.substring(0,typingText.current.innerHTML.length-1);
      typingText.current.innerHTML = str;
      i--;
      setTimeout(typingTextDelete, typingSpeed);
    } else {
      textIdx++;
      textIdx%=5;
      setTimeout(typingTextWriter, 850);
    }
  }

  useEffect(() => {
    typingTextWriter();
  }, [])
  


  return (
    <>
    <Container>
      <FlexBox>
        <Typed>
          <FixedText>I AM</FixedText>
          <TypingText ref={typingText} className="typing"/>
        </Typed>
        <ScrollBox>
          <div className="scroll-bar">
            <div className="scroll-ball"></div>
          </div>
          <div className="scroll-text">
            SCROLL
          </div>
        </ScrollBox>
      </FlexBox>  
      
    </Container>
    </>
  )
}

const Container = styled.section`
  display:flex;
  width:100vw;
  height:100vh;
  background: url(${keyvisualImg});
  background-size:contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #aecdad;
  backdrop-filter: blur(5px);
`;


const FlexBox = styled.div`
  flex:1;
  display: flex;
  position: relative;
  align-items: center;
  width:100%;
  color:white;
  text-shadow: 0 0 5px white;
  font-size: 3.8rem;
  font-weight:800;
  @media ${({ theme }) => theme.device.mobile} {
    margin-top:20%;
    align-items: unset;
    font-size: 1.8rem;
  }
`;

const Typed = styled.div`
  padding-left:10%;
  @media ${({ theme }) => theme.device.mobile} {
    padding-left:5%;
  }
`;

const FixedText = styled.div`
  
`;

const cursorAnimation = keyframes`
  0%{border-right:0;}
  50%{border-right:2px solid white;}
  100%{border-right:0;}
`;


const TypingText = styled.div`
  width:fit-content;
  height:4.8rem;
  padding: 0 10px 0 0;
  font-weight:800;
  border-right:2px solid white;
  animation: ${cursorAnimation} 0.6s step-end infinite;
  @media ${({ theme }) => theme.device.mobile} {
    height:2rem;
  }
`;

const scrollMove  = keyframes`
  0%{
    box-shadow: 0 0 10px 4px white;
    top:0;
  }


  100%{
    box-shadow: 0 0 10px 0 white;
    top:85%;
  }
`

const ScrollBox = styled.div`
  position:absolute;
  bottom :7%;
  left:50%;
  height:50px;
  transform:translate3d(-50%,-50%,0);
  
  .scroll-bar {
    position:relative;
    width:10px;
    height:100%;
    border-radius: 10px;
    margin: 0 auto;
    background-color: rgba(230, 230, 230, 0.6); 
  }
  .scroll-text {
    margin-top: 17px;
    font-size: 14px;
    text-align: center;
    color: white;
  }
  .scroll-ball {
    position:absolute;
    border-radius:100%;
    background-color:white;
    width:100%;
    height:10px;
    box-shadow: 0 0 5px 2px white;
    animation: ${scrollMove} 2s linear infinite;
  }
`;


export default Keyvisual;

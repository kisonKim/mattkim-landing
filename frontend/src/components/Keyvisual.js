import React,{ useState, useEffect, useRef } from 'react'
import styled,{ keyframes } from 'styled-components'
import keyvisualImg from '../images/keyvisual.jpg'



const Keyvisual = () => {
  const typingTextArr = ['A JS Developer','A Front-end Developer','A ReactJS Developer', 'A NodeJS Developer', 'A Full Stack Developer']; /* The text */ 
  let textIdx = 0;
  let i = 0;
  let typingSpeed = 70;
  const typingText = useRef(null);
  
  const typingTextWriter = () => {
    if(i < typingTextArr[textIdx].length){
      typingText.current.innerHTML += typingTextArr[textIdx].charAt(i);
      i++;
      setTimeout(typingTextWriter, typingSpeed);
    }else{
      setTimeout(typingTextDelete, 1250);
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
      setTimeout(typingTextWriter, 1250);
  }
}
  
  useEffect(() => {
    typingTextWriter();
  }, [])
  

  return (
    <Container>
      <LeftBox>
        <Typed>
          <FixedText>I AM</FixedText>
          <TypingText ref={typingText} className="typing"/>
        </Typed>
      </LeftBox>  
      <Empty>

      </Empty>
    </Container>
  )
}

const Container = styled.section`
  display:flex;
  width:100vw;
  height:100vh;
  background: url(${keyvisualImg});
  background-size:cover;
`;


const LeftBox = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:100%;
  color:white;
  text-shadow: 0 0 5px white;
  font-size: 3.8vw;
  font-weight:800;
`;

const Typed = styled.div`
  padding-left:10%;
`;

const Empty = styled.div`
  flex:1;
  display:block;
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
  height:4.8vw;
  padding: 0 10px 0 0;
  font-weight:800;
  border-right:2px solid white;
  animation: ${cursorAnimation} 0.6s step-end infinite;
`;



export default Keyvisual;
import React from 'react'
import styled from 'styled-components'
import keyvisualImg from '../images/keyvisual.jpg'
const Keyvisual = () => {
  return (
    <Container />
  )
}

const Container = styled.section`
  width:100vw;
  height:100vh;
  background: url(${keyvisualImg});
  background-size:cover;
`;
export default Keyvisual;
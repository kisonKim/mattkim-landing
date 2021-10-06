import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Copyright>Copyrightⓒ2021 by Matthew kim. All Page content is property of Matthew kim</Copyright>
    </Container>
  );
}

const Container = styled.footer`
  position:relative;
  height:10vh;
  width:100vw;
  min-width:1300px;
  min-height:200px;
  background-color:lightgray;
`;

const Copyright = styled.div`
  position: absolute;
  bottom:10px;
  width:100%;
  text-align: center;
`;
export default Footer;
import styled from "styled-components";
import Footer from "../Footer";
import Keyvisual from "../Keyvisual";
import MyInfo from "../MyInfo";

const MainContainer = () => {
  return (
    <>
      <Main>
        <Keyvisual />
        <MyInfo />
        <Footer />
      </Main>
    </>
  );
}

const Main = styled.main `
  article, section {
    min-width:1300px;
    min-height:800px;
    @media ${({ theme }) => theme.device.mobile} {
      min-width:0;
      min-height:100vh;
      height:fit-content;
    }
  }
  footer{
    @media ${({ theme }) => theme.device.mobile} {
      min-width:0;
      min-height:20vh;
      height:fit-content;
    }
  }
`;
export default MainContainer;
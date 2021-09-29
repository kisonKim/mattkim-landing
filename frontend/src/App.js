import logo from './logo.svg';
import './App.css';
import Keyvisual from './components/Keyvisual';
import {createGlobalStyle} from "styled-components";
import KeyMessage from './components/KeyMessage';
function App() {
  return (
    <>
    <GlobalStyle />
    <Keyvisual />
    <KeyMessage />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    font-size:16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

`;

export default App;

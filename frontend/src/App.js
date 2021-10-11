import './App.css';
import {createGlobalStyle} from "styled-components";
import {ThemeProvider} from 'styled-components'
import theme from './styles/Theme'
import MainContainer from './components/MainContainer';
function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainer />
    </ThemeProvider>
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
    color: #191f28;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* scroll bar display none */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

`;

export default App;

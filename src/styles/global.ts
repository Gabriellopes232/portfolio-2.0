import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        transition: 0.1s;
    }
    html, body, #__next {
      height: 100%;
    }
    body {
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        font-family: Ubuntu, 'Open Sans', sans-serif
    }
    h1 {
        color: ${(props) => props.theme.colors.titles};
        font-weight: 800;
        font-size: 2.25em;
        line-height: 1em;
    }
    a{
      color: ${(props) => props.theme.colors.links};
      cursor: pointer;
      text-decoration: none;
    }
    p{
      color: ${(props) => props.theme.colors.text}
    }
    footer{
      color: ${(props) => props.theme.colors.footer};
    }
`;

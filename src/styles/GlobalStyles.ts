import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *,
  ::after,
  ::before {
  box-sizing: border-box;
  }
  
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
    
  body {
    color: #fff;
    font-family: 'Poppins', sans-serif;
    background: #014466;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;  
    padding: 32px;
    padding-top: 0px; 
    letter-spacing: 1.1px;
  }
`;

export default GlobalStyle;

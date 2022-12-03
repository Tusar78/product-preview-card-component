import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    /* Color and Typography */
    /* Primary color*/
    --dark-cyan: hsl(158, 36%, 37%);
    --cream: hsl(30, 38%, 92%);
    /* Neutral Color */
    --very-dark-blue: hsl(212, 21%, 14%);
    --dark-grayish-blue: hsl(228, 12%, 48%);
    --white: hsl(0, 0%, 100%);

    /* Typography */
    --body-font: 'Montserrat', sans-serif;
    --heading-font: 'Fraunces', serif;
    --normal-size: 14px;

    --font-500: 500; 
    --font-700: 700; 
  }

  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--body-font);
  }

  p {
    font-size: var(--normal-size);
  }
`;

export default GlobalStyle;
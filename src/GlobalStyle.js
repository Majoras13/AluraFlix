import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --color-primary: #2A7AE4;

    --bg:rgba(0,0,0,0.90);

    --bg-black: #000000;
    --bg-black-2:rgba(0, 0, 0, 0.60) ;
    --bg-black-3: rgba(0, 0, 0, 0.50);
    --bg-black-4: #9E9E9E;
    --bg-black-5:#53585D;

    --font-color:white;
    

    --gray:#C2C2C2;
    --gray-2:#E5E5E5;
    --gray-3:#F5F5F5;

    --error: #C62828;
    --error-2: #E53935;
    --error-3: #FCE7E7;

    --title-big: 3.75rem;
    --title-medium: 2.875rem;
    --title-small: 2.1875rem;

    --body-big: 1.6875rem;
    --body-medium: 1.125rem;
    --body-small: 1rem;
    --body-smaller: 0.75rem;

}

*{
  box-sizing: border-box;
  /* box-shadow: inset 0 0 1px red; */
}

body {
  background-color:var(--bg);
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  color: var(--font-color);
}
`

export default GlobalStyle;
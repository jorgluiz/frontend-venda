import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none; 
    list-style-type: none;
}

html, body, #root {
    height: 100%; /* Garante que o corpo ocupe 100% da altura */
  }

body {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    scrollbar-color: #000000 #322322;
}

*, button, input {
    border: 0;
    outline: 0;
    margin: 0;
    padding: 0;
}

:root {
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: rgb(32,34,37);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;
 
    --white: #fff;
    --gray: #8a8c90;
    --chat-input: rgb(64,68,75);
    --symbol: #74777a;
 
    --notification: #f84a4b;
    --discord: #6e86d6;
    --mention-detail: #f9a839;
    --mention-message: #413f3f;
 
    --link: #5d80d6;
 
    --rocketseat: #6633cc;

    --base:  #090909;
    --base-inverted:  rgb(var(--white));
    --base-100:  var(--base);
    --base-90:  #242424;
    --base-80:  #3d3d3d;
    --base-70:  #575757;
    --base-60:  #717171;
    --base-50:  #8a8a8a;
    --base-40:  #a3a3a3;
    --base-30:  #bdbdbd;
    --base-20:  #d6d6d7;
    --base-10:  #efefef;
    --base-0:  #f9f9f9;
  }
`;
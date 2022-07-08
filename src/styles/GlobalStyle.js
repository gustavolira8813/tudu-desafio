import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const GlobalStyle = createGlobalStyle`
/* declarando as variáveis globais */

:root{
    --color-primary: #1A55B4;
    --color-primary-variable-1:  #6AA5FF;
    --color-secondary: #FE746F;
    --color-secondary-variable-1: #FEC857;
    --color-secondary-variable-2: #EBF4FD;
    }


    body{

background-color: #ffffff; 
font-family: "Inter" , sans-serif;
}

`;

export const Title = styled.h1`
  color: var(--color-primary);
  font-size: 2em;
  font-weight: bold;
  text-align: center;
`;

export const Container = styled.div`
  height: 100vh;
  max-height: 702px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 25px;

  .welcome-page {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .login-page {
    background: var(--color-secondary-variable-2);
    height: 87vh;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 70px 70px 0 0;
    gap: 20px;
  }
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 90%;
    padding: 25px;
  }
  h1 {
    margin-left: 10%;
    align-self: flex-start;
  }
  .link-login-register {
    align-self: center;
    text-decoration: none;
    color: gray;
  }
  .mini-bar {
    background: #2196f3;
    width: 40px;
    height: 3px;
    border-radius: 24px;
    position: absolute;
    top: 20px;
  }
  .footer-bar {
    height: 8px;
    background: #607d8b;
    width: 33%;
    position: absolute;
    bottom: 13px;
    border-radius: 20px;
  }
  .welcome-footer {
    background: var(--color-secondary-variable-2);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 10vh;
    border-radius: 4em 4em 0 0;
    display: flex;
    font-size: 1.7em;
    justify-content: center;
    padding: 20px;
  }
`;

export const ContainerSecondary = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  height: ${(props) => (props.page === "welcome" ? "10vh" : "70vh")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px 50px 0px 0px;
  background: gray;
  background-color: var(--color-secondary-variable-2);

  .arrowUp {
    font-size: 2em;
    color: var(--color-primary-variable-1);
    font-weight: 400;
    /* align-self: flex-start; */
    margin-top: 11px;
  }
  .horizontal-bar {
    width: 30vw;
    background: gray;
    height: 10px;
    margin-bottom: 5px;
    border-radius: 10px;
  }
  .mini-bar {
    height: 5px;
    width: 25px;
    border-radius: 5px;
    margin-top: 8px;
    background-color: var(--color-primary-variable-1);
  }
`;

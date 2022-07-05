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
  justify-content: flex-start;
  gap: 25px;
  padding-top: 25vh;
`;

export const ContainerSecondary = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  height: ${(props) => (props.page === "welcome" ? "10vh" : "90vh")};
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

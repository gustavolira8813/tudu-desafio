import styled from "styled-components";

export const ContainerMenuFooter = styled.div`
  height: 10vh;
  padding: 5px;
  background-color: var(--color-secondary-variable-2);
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: start;
    gap: 50px;
    padding: 10px;
  }
  li {
    color: var(--color-primary);
    font-size: 2em;
  }
  .menu-items-add {
    font-size: 3em;
    position: static;
    transform: translateY(-50%);
  }
`;

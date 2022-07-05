import styled from "styled-components";

export const FooterContainer = styled.div`
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

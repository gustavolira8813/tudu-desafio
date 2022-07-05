import styled from "styled-components";

export const MainContainer = styled.main`
  height: 90vh;
  background-color: var(--color-secondary-variable-2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ToDoContainer = styled.section`
  height: 40%;
  width: 90%;
  padding: 20px;

  .todo-list {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ProgressContainer = styled.section`
  height: 30%;
  margin-top: 3vh;
  width: 100%;
  padding: 20px;

  .progress-list {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    overflow: auto;
    padding: 20px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
export const CompletedContainer = styled.section`
  height: 20%;
  margin-top: 3vh;
  width: 100%;
  padding: 20px;

  .completed-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    overflow: auto;
    gap: 15px;
    padding: 15px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

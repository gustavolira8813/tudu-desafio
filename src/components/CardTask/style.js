import styled from "styled-components";

export const TaskItem = styled.li`
  ${(props) => {
    switch (props.type.status) {
      case "todo":
        return `
        display:flex;
        gap:5px;
          background: ${props.type.type === "hard" ? "red" : "yellow"};
          width: 100%;
    border-radius: 10px;
    padding: 10px;
        `;
      case "completed":
        return `
        background: var(--color-secondary-variable-2);
        background:grey;
        width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 12px;
    padding: 15px;
    gap: 15px;
        `;
      case "progress":
        return `
            background: ${props.type.type === "hard" ? "red" : "yellow"};
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            width: 170px;
            height: 170px;
            border-radius: 12%;
            justify-content: center;
            gap: 15px;
        
            `;
      default:
        return `
          background: black;
        `;
    }
  }}
`;

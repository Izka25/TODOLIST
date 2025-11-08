import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Task = styled.li`
    display: flex;
    flex-basis: 100px;
    border-bottom: 1px solid #eee;
    margin: auto;
    background-color: white;
    padding: 25px;
 
  ${({ hidden }) => hidden && css`
    display: none;
    text-decoration: line-through;
    `}
`;

export const Content = styled.span`
    display: flex;
    flex-grow: 1;
    padding: 2px;

    ${({ $done }) => $done && css`
    flex-grow: 1;
    padding: 2px;
    text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    background-color: #326c86;
    color: white;
    transition: 1s;
    border: none;

    &:hover {
    background: #593ee0;
    transform: scale(1.5);
    }
    
${({ $toggleDone }) => $toggleDone && css`
    background: green;
    max-width: 25px;
    transition: 1s;
    width: 30px;
    height: 30px;
   
    &:hover {
    background: rgb(64, 199, 64);
    transform: scale(1.5);
    }
`}

${({ $remove }) => $remove && css`
    background: red;
    max-width: 25px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: flex-end;
    transition: 1s;
  
  &:hover {
    background: rgb(230, 9, 9);
    transform: scale(1.5);
    }
`}
`;
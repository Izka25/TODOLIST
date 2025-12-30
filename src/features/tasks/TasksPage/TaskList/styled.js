import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Task = styled.li`
    display: flex;
    flex-basis: 100px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gallery};
    margin: auto;
    background-color: ${({ theme }) => theme.color.white};
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
    background-color: ${({ theme }) => theme.color.calypso};
    color: ${({ theme }) => theme.color.white};
    transition: 1s;
    border: none;

    &:hover {
    background: ${({ theme }) => theme.color.royalBlue};
    transform: scale(1.5);
    }
    
${({ $toggleDone }) => $toggleDone && css`
    background: ${({ theme }) => theme.color.japaneseLaurel};
    max-width: 25px;
    transition: 1s;
    width: 30px;
    height: 30px;
   
    &:hover {
    background: ${({ theme }) => theme.color.apple};
    transform: scale(1.5);
    }
`}

${({ $remove }) => $remove && css`
    background: ${({ theme }) => theme.color.red};
    max-width: 25px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: center;
    transition: 1s;
    width: 30px;
    height: 30px;
    align-items: center;
  
  &:hover {
    background: ${({ theme }) => theme.color.scarlet};
    transform: scale(1.5);
    }
`}
`;
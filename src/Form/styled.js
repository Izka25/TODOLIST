import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 25px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    background-color: white;
    
    @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
    max-width: 650px;
    padding: 10px;
    border: 1px solid #eee;
`;

export const Button = styled.button`
    background-color: #326c86;
    color: white;
    transition: 1s;
    border: none;

    &:hover {
    background: #428caeff;
    transform: scale(1.3);
    }
`;
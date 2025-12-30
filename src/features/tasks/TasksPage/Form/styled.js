import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 25px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    background-color: ${({ theme }) => theme.color.white};
    
    @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;



export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.calypso};
    color: ${({ theme }) => theme.color.white};
    transition: 1s;
    border: none;

    &:hover {
    background: ${({ theme }) => theme.color.stealBlue};
    transform: scale(1.3);
    }
`;
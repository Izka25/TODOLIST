import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
`;

export const HideDoneButton = styled.button`
    border: none;
    margin: 0 0 0 20px;
    background: transparent;
    transition: 1s;
    color: ${({ theme }) => theme.color.keppel};

    @media (max-width: 767px) {
    flex-wrap: wrap;
    flex-basis: 100%;
    margin: 10px;
  }
`;

export const MakeAllDone = styled.button`
    border: none;
    margin: 0 0 0 20px;
    background: transparent;
    transition: 1s;
    color:  ${({ theme }) => theme.color.keppel};

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
    };
`;
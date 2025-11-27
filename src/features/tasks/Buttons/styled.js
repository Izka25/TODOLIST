import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    justify-content: flex-end;

    @media (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: baseline;
  }
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
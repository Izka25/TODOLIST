import styled, { css } from "styled-components";

export const  Div = styled.div`
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
    color: #44a7a7;

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
    color: #44a7a7;

    &:disabled {
        color: #ccc;
    };
`;
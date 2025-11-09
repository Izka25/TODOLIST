import styled from "styled-components";

export const SectionStyles = styled.section`
    font-family: "Montserrat", sans-serif;
    line-height: 1.5;
    text-align: left;
    max-width: 900px;
    margin: 10px;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    background-color: white;
    margin: auto;
    text-align: left;
    border-bottom: 1px solid #eee;

    @media (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 100%;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
    background-color: white;
    margin: 0;
    padding: 10px;
    text-align: left;
`;

export const Buttons = styled.ul`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
`;

export const Body = styled.div`
padding: 20px;
`;

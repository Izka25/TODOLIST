import { SectionStyles, Header, Title, Buttons, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <SectionStyles>
    <Header>
      <Title >{title}</Title>
      {extraHeaderContent}
    </Header>
    <Body>
      {body}
      <Buttons></Buttons>
    </Body>
  </SectionStyles>
);

export default Section;

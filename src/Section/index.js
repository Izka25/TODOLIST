import { SectionStyles, Header, Title, Buttons, SectionBody } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <SectionStyles>
    <Header>
      <Title >{title}</Title>
      {extraHeaderContent}
    </Header>
    <SectionBody>
      {body}
      <Buttons />
    </SectionBody>
  </SectionStyles>
);

export default Section;

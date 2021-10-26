import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {SiAdobecreativecloud} from 'react-icons/si'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development environment. From Backend to design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <listContainer>
          <ListTitle>Front-End </ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js
          </ListParagraph>
        </listContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size='3rem'/>
        <listContainer>
          <ListTitle>Back-End </ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node and Databse.
          </ListParagraph>
        </listContainer>
      </ListItem>

      <ListItem>
        <SiAdobecreativecloud size='3rem'/>
        <listContainer>
          <ListTitle>UI/UX </ListTitle>
          <ListParagraph>
            Experience with <br/>
            Adobe XD/ Figma
          </ListParagraph>
        </listContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents/index';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello their! <br />
        Welcome To My Portfolio
      </SectionTitle>
      <SectionText>
        From the World of Development I chose The Web Development!
      </SectionText>
      <Button onClick={()=> window.location = "#about"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
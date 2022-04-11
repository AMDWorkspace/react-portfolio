import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Alan M Do's <br />
          Coding and Web Development <br />
          Portfolio
        </SectionTitle>
      </LeftSection>
    </Section>
  </>
  
);

export default Hero;
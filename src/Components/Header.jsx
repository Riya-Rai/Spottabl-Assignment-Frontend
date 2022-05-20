import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';

const Title = styled.h2`
  text-transform: uppercase;
  margin: 0;
  font-weight: 700;
`;
const Subtitle = styled.span`
  line-height: 2;
  font-weight: 600;
  font-size: 0.9em;
  color: ${({ theme }) => `${theme.fontGrey}`};
`;

const Logo = styled.img`
  height: 60px;
`;
const HeaderContainer = styled.div`
  display: grid;
  grid-template-areas:
    'logo title'
    'logo subtitle';
  justify-content: start;
  align-items: start;
  grid-gap: 1em;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Spottabl logo" />
      <div>
        <Title>Your Spottabl Team</Title>
        <Subtitle>Spottabl supports you all throughout </Subtitle>
      </div>
    </HeaderContainer>
  );
}

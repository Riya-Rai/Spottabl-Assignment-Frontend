import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyles from '../styles/GlobalStyles';
import { lowerQuery } from '../utils/mediaQueries';
import Header from './Header';
import ListCard from './ListCard';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 1.5em;
  margin: auto;
  max-width: 1280px;
`;

function App() {
  const theme = {
    bgColor: `rgb(248, 249, 255)`,
    primaryColor: `rgb(30, 48, 161)`,
    primaryHover: `rgb(38, 61, 204)`,
    primaryBorder: `1px solid rgb(26, 42, 140)`,
    fontGrey: `rgb(79, 78, 79)`,
    cardBorderRadius: `8px`,
    primaryAccent: `rgb(216, 220, 252)`,
    cardBoxShadow: `rgb(0 0 0 / 4%) 0px 10px 20px, rgb(0 0 0 / 4%) 0px 2px 6px, rgb(0 0 0 / 4%) 0px 0px 1px`,
  };

  return (
    <ThemeProvider theme={{ ...theme, ...lowerQuery }}>
      <Normalize />
      <GlobalStyles />
      <Container>
        <Header />
        <ListCard />
      </Container>
    </ThemeProvider>
  );
}

export default App;

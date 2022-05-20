import { css } from 'styled-components';

const lowerSizes = {
  mobileQuery: 800,
};

const lowerQuery = Object.keys(lowerSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${lowerSizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export { lowerQuery };

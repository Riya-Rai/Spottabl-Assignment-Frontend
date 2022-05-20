import React from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';
const SuggestionsContainer = styled.div`
  margin-top: 0.5em;
  background-color: white;
  width: 100%;
  position: absolute;
  max-width: calc(100% - 125px);
  border-radius: ${({ theme }) => theme.cardBorderRadius};
  box-shadow: ${({ theme }) => theme.cardBoxShadow};
  border: 1px solid #dfdcdc;
  ${({ theme }) => theme.mobileQuery`
  max-width: 100%;
  `}
`;

export default function SearchSuggestions({
  matchedResults,
  setMatchedResults,
  setSelectedUsers,
}) {
  const removeFromMatched = (index) => {
    const filtered = matchedResults.filter((result, resultIndex) => {
      return resultIndex != index;
    });
    setMatchedResults(filtered);
  };

  const handleSelection = (e) => {
    const index = e.currentTarget.getAttribute('data-index');
    setSelectedUsers((prev) => [...prev, matchedResults[index]]);
    removeFromMatched(index);
  };

  return (
    <SuggestionsContainer>
      {matchedResults?.map((result, index) => (
        <div
          key={index}
          data-index={index}
          onClick={(e) => {
            handleSelection(e);
          }}
        >
          <UserCard
            name={result.name}
            email={result.email}
            role={result.jobTitle}
          />
        </div>
      ))}
    </SuggestionsContainer>
  );
}

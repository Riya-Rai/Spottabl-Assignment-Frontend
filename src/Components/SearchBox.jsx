import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { userDetails } from '../user_details';
import SearchSuggestions from './SearchSuggestions';
import { CSM_LOCALSTORAGE_KEY } from '../config';
const SearchBoxContainer = styled.div`
  position: relative;
  .flex {
    display: flex;
  }
  input {
    border: none;
    padding: 0.5em;
    outline: none;
  }
  button {
    width: 125px;
    min-width: 125px;
    background-color: ${({ theme }) => theme.primaryColor};
    color: white;
    border: ${({ theme }) => theme.primaryBorder};
    font-size: 0.8em;
    font-weight: 500;
    box-shadow: ${({ theme }) => theme.cardBoxShadow};
    padding: 0 2em;
    cursor: pointer;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    :hover {
      background-color: ${({ theme }) => theme.primaryHover};
    }
    :active {
      background-color: ${({ theme }) => theme.primaryColor};
    }
  }
`;

const MultiSelect = styled.div`
  border: 1px solid #c5c5c5;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  input {
    flex-grow: 1;
  }
`;

const StyledChip = styled.div`
  display: inline-block;
  margin: 5px;
  border-radius: 4px;
  padding: 0.5em;
  color: ${({ theme }) => theme.primaryColor};
  font-weight: 500;
  background-color: ${({ theme }) => theme.primaryAccent};
  span {
    font-size: 0.9em;
    display: flex;
    align-items: center;

    svg {
      cursor: pointer;
      margin-left: 10px;
      :active {
        transform: translateY(1px);
      }
    }
  }
`;

const Chip = ({ name, handleChipRemove, index }) => {
  return (
    <StyledChip>
      <span className="chipName">
        {name} <FaTimes data-index={index} onClick={handleChipRemove} />
      </span>
    </StyledChip>
  );
};

export default function SearchBox({ setCsmList, csmList }) {
  const [matchedResults, setMatchedResults] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const searchUser = (e) => {
    const value = e.target.value.toLowerCase();
    if (!value) {
      return setMatchedResults([]);
    }
    const matchedValues = userDetails
      .filter(
        (user) =>
          user.email.toLowerCase().includes(value) ||
          user.name.toLowerCase().includes(value)
      )
      .filter(
        (a) => !csmList.some((b) => a.email === b.email && a.name === b.name)
      )
      .slice(0, 10);
    setMatchedResults(matchedValues);
  };

  const handleChipRemove = (e) => {
    const index = e.currentTarget.getAttribute('data-index');
    if (!index) {
      return;
    }
    setMatchedResults((prev) => [selectedUsers[index], ...prev]);
    setSelectedUsers(
      selectedUsers.filter((_item, itemIndex) => index != itemIndex)
    );
  };

  const handleCSMAdd = () => {
    if (window) {
      let prevCSM;
      try {
        prevCSM = JSON.parse(localStorage.getItem(CSM_LOCALSTORAGE_KEY)) || [];
      } catch {
        prevCSM = [];
      }
      const newList = [...selectedUsers, ...prevCSM];
      setCsmList(newList);
      localStorage.setItem('csm_list', JSON.stringify(newList));
      setMatchedResults([]);
      setSelectedUsers([]);
    }
  };

  return (
    <SearchBoxContainer>
      <div className="flex">
        <MultiSelect>
          {selectedUsers?.map((user, index) => (
            <Chip
              name={user.name}
              index={index}
              key={index}
              handleChipRemove={handleChipRemove}
              // setSelectedUsers={setSelectedUsers}
              // selectedUsers={selectedUsers}
            />
          ))}

          <input
            autoComplete="off"
            onChange={searchUser}
            type="text"
            placeholder="Add by Name or Email"
          ></input>
        </MultiSelect>

        <button onClick={() => handleCSMAdd()} type="submit">
          Add CSM
        </button>
      </div>
      {matchedResults.length ? (
        <SearchSuggestions
          setMatchedResults={setMatchedResults}
          setSelectedUsers={setSelectedUsers}
          matchedResults={matchedResults}
        />
      ) : null}
    </SearchBoxContainer>
  );
}

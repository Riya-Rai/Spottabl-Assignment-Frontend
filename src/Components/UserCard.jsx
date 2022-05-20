import React from 'react';
import styled from 'styled-components';
import { FaUserTie } from 'react-icons/fa';

const UserCardContainer = styled.div`
  width: 100%;
  cursor: pointer;
  display: grid;
  grid-template-areas:
    'avatar name'
    'avatar meta';
  justify-content: start;
  justify-items: start;
  align-content: center;
  align-items: center;
  padding: 1em;

  :hover {
    background-color: #dfdcdc;
  }

  /* grid-gap: 1em; */
  border-bottom: 2px solid #e4e4e4;
  .name {
    grid-area: name;
    font-size: 1.1em;
    font-weight: 700;
  }
  .meta {
    margin-top: 0.5em;
    grid-area: meta;
  }
  .faded {
    color: #9b9b9b;
  }
  .period {
    height: 5px;
    width: 5px;
    margin: auto 0.5em;
    display: inline-block;
    border-radius: 50%;
    padding: 0;
    background-color: #9b9b9b;
  }
`;

const StyledAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  font-weight: 600;
  grid-area: avatar;
  margin-right: 1em;
  background-color: ${({ theme }) => theme.primaryAccent};
`;

export const Avatar = ({ name }) => {
  return (
    <StyledAvatar>
      {name?.split(' ').reduce((prevVal, newVal) => prevVal + newVal[0], '')}
    </StyledAvatar>
  );
};

export default function UserCard({ name, role, email }) {
  return (
    <UserCardContainer>
      <Avatar name={name} />
      <div>
        <span className="name">{name}</span>
        <div className="meta">
          <FaUserTie className="faded" size={'0.8em'} /> <span>{role}</span>
          <span className="period"></span>
          <span>{email}</span>
        </div>
      </div>
    </UserCardContainer>
  );
}

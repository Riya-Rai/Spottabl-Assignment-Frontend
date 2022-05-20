import React from 'react';
import styled from 'styled-components';
import { Avatar } from './UserCard';
import { FaTrashAlt } from 'react-icons/fa';

const CSMListContainer = styled.div`
  margin-top: 2em;
  border-radius: ${({ theme }) => theme.cardBorderRadius};
  ${({ children }) => children && `border: 1px solid #dfdcdc;`}
`;

const UserDetailsContainer = styled.div`
  padding: 1.2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
  .grid {
    display: grid;
    grid-template-areas:
      'avatar name'
      'avatar meta';
    justify-content: start;
    align-items: center;
  }
  .name {
    font-size: 1.2em;
    font-weight: 700;
    grid-area: name;
  }
  .meta {
    grid-area: meta;
    font-weight: 600;
    font-size: 0.9em;
    text-transform: capitalize;
  }
  .flex {
    display: flex;
  }
  .delete {
    color: ${({ theme }) => theme.primaryColor};
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    :hover {
      color: ${({ theme }) => theme.primaryHover};
    }
    :active {
      transform: translateY(1px);
    }
  }
`;

const ManagerDetails = ({ name, jobTitle, handleRemoveCSM, index }) => {
  return (
    <UserDetailsContainer>
      <div className="grid">
        <Avatar name={'Some Name'} />
        <span className="name">{name}</span>
        <span className="meta">{jobTitle}</span>
      </div>
      <div>
        <button className="delete" data-index={index} onClick={handleRemoveCSM}>
          <FaTrashAlt />
        </button>
      </div>
    </UserDetailsContainer>
  );
};

export default function CSMList({ csmList, handleRemoveCSM }) {
  return (
    <>
      {csmList?.length ? (
        <CSMListContainer>
          {csmList?.map((csm, index) => (
            <div data-index={index} key={index}>
              <ManagerDetails
                handleRemoveCSM={handleRemoveCSM}
                name={csm.name}
                jobTitle={csm.jobTitle}
                index={index}
              />
            </div>
          ))}
        </CSMListContainer>
      ) : null}
    </>
  );
}

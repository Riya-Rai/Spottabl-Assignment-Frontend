import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBox from './SearchBox';
import CSMList from './CSMList';
import { CSM_LOCALSTORAGE_KEY } from '../config';

const ListCardContainer = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.cardBorderRadius};
  box-shadow: ${({ theme }) => theme.cardBoxShadow};
  padding: 1em;
`;

const Title = styled.h3``;
export default function ListCard() {
  const [csmList, setCsmList] = useState([]);

  useEffect(() => {
    const csmValues =
      JSON.parse(localStorage.getItem(CSM_LOCALSTORAGE_KEY)) || [];
    setCsmList(csmValues);
  }, []);

  const handleRemoveCSM = (e) => {
    const index = parseInt(e?.currentTarget?.getAttribute('data-index'));
    if (isNaN(index)) {
      return;
    }
    const newCsmList = csmList;
    newCsmList.splice(index, 1);
    setCsmList([...newCsmList]);
    localStorage.setItem(CSM_LOCALSTORAGE_KEY, JSON.stringify(newCsmList));
  };

  return (
    <ListCardContainer>
      <Title>Customer Success Managers</Title>
      <SearchBox csmList={csmList} setCsmList={setCsmList} />
      <CSMList handleRemoveCSM={handleRemoveCSM} csmList={csmList} />
    </ListCardContainer>
  );
}

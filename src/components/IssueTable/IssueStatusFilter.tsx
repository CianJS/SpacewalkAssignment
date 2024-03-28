import styled from '@emotion/styled';
import { useState } from 'react';
import ArrowDown from '../../../assets/icons/arrow-down.svg';

function IssueStatusFilter() {
  const [test, setTest] = useState('Test');

  return (
    <IssueStatusFilterBox>
      <IssuesFilterText>이슈 상태</IssuesFilterText>
      <IssueStatusFilterIcon src={ArrowDown} alt="열기" />
    </IssueStatusFilterBox>
  );
}

export default IssueStatusFilter;

const IssueStatusFilterBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 14px;
  border-radius: 32px;
  border: 1px solid #dfe5eb;
  user-select: none;
  cursor: pointer;
`;

const IssuesFilterText = styled.span`
  color: #14171a;
  margin-right: 4px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;

const IssueStatusFilterIcon = styled.img`
  width: 12px;
  height: 12px;
`;

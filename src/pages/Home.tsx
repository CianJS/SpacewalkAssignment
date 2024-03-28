import styled from '@emotion/styled';
import { useState } from 'react';
import IssueTable from '../components/IssueTable';

function HomePage() {
  const [test, setTest] = useState('Test');
  return (
    <HomePageContainer>
      <InterviewerContainer>
        <InterviewerName>김준성</InterviewerName>
      </InterviewerContainer>

      <IssueSummaryContainer>
        <TableTitle>이슈정리</TableTitle>
        <IssueTable />
      </IssueSummaryContainer>
    </HomePageContainer>
  );
}

export default HomePage;

const HomePageContainer = styled.div`
  margin: 72px 80px;
`;

const InterviewerContainer = styled.div`
  padding-bottom: 12px;
  border-bottom: 1px solid #dfe5eb;
`;

const InterviewerName = styled.span`
  color: #7b848c;
  font-size: 16px;
  line-height: 24px;
`;

const IssueSummaryContainer = styled.div`
  margin-top: 32px;
`;

const TableTitle = styled.h3`
  color: #14171a;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 32px;
`;

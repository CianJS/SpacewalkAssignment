import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import IssueTable from '../components/IssueTable';
import { getGithubIssueList } from '../api/APIIssues';
import {
  GithubIssues,
  GithubIssueState,
  GithubIssueSort,
} from '../types/github';
import { Filter } from '../types/homeTable';

function HomePage() {
  const location = useLocation();
  const [issueList, setIssueList] = useState<GithubIssues[]>();
  const [page, setPage] = useState<number>(1);
  const [state, setState] = useState<GithubIssueState>(GithubIssueState.all);
  const [sort, setSort] = useState<GithubIssueSort>(GithubIssueSort.CREATED);

  const handleChangePage = (pageNumber: number) => setPage(pageNumber);
  const handleChangeState = (state: GithubIssueState) => setState(state);

  const fetchIssueList = () => {
    getGithubIssueList({ perPage: 10, page, state, sort }).then((issueList) =>
      setIssueList(issueList)
    );
  };

  useEffect(() => {
    const filterState = Object.fromEntries(
      new URLSearchParams(location.search)
    ) as unknown as Filter;
    handleChangePage(Number(filterState.page));
    handleChangeState(filterState.state);
  }, [location.search]);

  useEffect(() => {
    fetchIssueList();
  }, [page, state, sort]);

  return (
    <HomePageContainer>
      <InterviewerContainer>
        <InterviewerName>김준성</InterviewerName>
      </InterviewerContainer>

      <IssueSummaryContainer>
        <TableTitle>이슈정리</TableTitle>
        {issueList && (
          <IssueTable
            issueList={issueList}
            currentPage={page}
            state={state}
            handleChangeState={handleChangeState}
          />
        )}
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

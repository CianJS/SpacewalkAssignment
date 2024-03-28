import styled from '@emotion/styled';
import IssueStatusFilter from './IssueStatusFilter';
import { Property } from 'csstype';
import { GithubIssues } from '../../types/github';

interface Props {
  issueList: GithubIssues[];
}

function IssueTable({ issueList }: Props) {
  return (
    <IssueTableContainer>
      <FilterWrapper>
        <IssueStatusFilter />
        <IssueStatusFilter />
      </FilterWrapper>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeadData width="12%">번호</TableHeadData>
            <TableHeadData width="36%">제목</TableHeadData>
            <TableHeadData width="11%">작성자</TableHeadData>
            <TableHeadData width="13%" textAlign="center">
              작성일
            </TableHeadData>
            <TableHeadData width="13%" textAlign="center">
              수정일
            </TableHeadData>
            <TableHeadData width="10%" textAlign="right">
              코멘트 수
            </TableHeadData>
          </TableRow>
        </TableHead>
        <TableBody>
          {issueList?.map((issue) => (
            <TableRow key={issue.id}>
              <TableBodyData>{issue.id}</TableBodyData>
              <TableBodyData>{issue.title}</TableBodyData>
              <TableBodyData>{issue.user.login}</TableBodyData>
              <TableBodyData textAlign="center">
                {issue.created_at}
              </TableBodyData>
              <TableBodyData textAlign="center">
                {issue.updated_at}
              </TableBodyData>
              <TableBodyData textAlign="right">{issue.comments}</TableBodyData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PaginationContainer></PaginationContainer>
    </IssueTableContainer>
  );
}

export default IssueTable;

const IssueTableContainer = styled.div``;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Table = styled.table`
  width: 100%;
  height: 100%;
  margin: 24px 0;
  border-collapse: collapse;
  table-layout: fixed;
`;

const TableHead = styled.thead`
  background: #f5f8fa;
  border-radius: 8px;
  padding: 6px 12px;
`;

const TableRow = styled.tr``;

const TableHeadData = styled.th<{
  width: string;
  textAlign?: Property.TextAlign;
}>(({ width, textAlign = 'left' }) => ({
  width: width,
  textAlign,
  color: '#5a6066',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '20px',
  padding: '6px 12px',
  textWrap: 'nowrap',
  ['&:first-of-type']: {
    borderRadius: '8px 0 0 8px',
  },
  ['&:last-of-type']: {
    borderRadius: '0 8px 8px 0',
  },
}));

const TableBody = styled.tbody`
  height: 36px;
  margin-top: 8px;
  ::before {
    content: '';
    display: block;
    height: 8px;
  }
`;

const TableBodyData = styled.td<{ textAlign?: Property.TextAlign }>(
  ({ textAlign = 'left' }) => ({
    textAlign,
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '20px',
    color: '#5a6066',
    padding: '8px 12px',
    textWrap: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  })
);

const PaginationContainer = styled.div``;

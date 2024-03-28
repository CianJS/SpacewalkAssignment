import styled from '@emotion/styled';
import { useState } from 'react';
import IssueStatusFilter from './IssueStatusFilter';
import { Property } from 'csstype';

function IssueTable() {
  const [test, setTest] = useState('Test');

  return (
    <IssueTableContainer>
      <FilterWrapper>
        <IssueStatusFilter />
        <IssueStatusFilter />
      </FilterWrapper>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeadData width="60px">번호</TableHeadData>
            <TableHeadData width="420px">제목</TableHeadData>
            <TableHeadData width="120px">작성자</TableHeadData>
            <TableHeadData width="90px" textAlign="center">
              작성일
            </TableHeadData>
            <TableHeadData width="90px" textAlign="center">
              수정일
            </TableHeadData>
            <TableHeadData width="60px" textAlign="right">
              코멘트 수
            </TableHeadData>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableBodyData>1</TableBodyData>
            <TableBodyData>
              Fix for script yarn build-for-devtools-dev failing due to
              argument...
            </TableBodyData>
            <TableBodyData>sandeep36butte</TableBodyData>
            <TableBodyData>2023-12-25</TableBodyData>
            <TableBodyData>2023-12-25</TableBodyData>
            <TableBodyData>1</TableBodyData>
          </TableRow>
          <TableRow>
            <TableBodyData>1</TableBodyData>
            <TableBodyData>
              Fix for script yarn build-for-devtools-dev failing due to
              argument...
            </TableBodyData>
            <TableBodyData>sandeep36butte</TableBodyData>
            <TableBodyData>2023-12-25</TableBodyData>
            <TableBodyData>2023-12-25</TableBodyData>
            <TableBodyData>1</TableBodyData>
          </TableRow>
          <TableRow>
            <TableBodyData>1</TableBodyData>
            <TableBodyData>
              Fix for script yarn build-for-devtools-dev failing due to
              argument...
            </TableBodyData>
            <TableBodyData>sandeep36butte</TableBodyData>
            <TableBodyData>2023-12-25</TableBodyData>
            <TableBodyData>2023-12-25</TableBodyData>
            <TableBodyData>1</TableBodyData>
          </TableRow>
        </TableBody>
      </Table>
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
  maxWidth: width,
  textAlign,
  color: '#5a6066',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '20px',
  padding: '6px 12px',
  textWrap: 'nowrap',
  ['&:first-child']: {
    borderRadius: '8px 0 0 8px',
  },
  ['&:last-child']: {
    borderRadius: '0 8px 8px 0',
  },
}));

const TableBody = styled.tbody`
  height: 36px;
  margin-top: 8px;
  tr {
    padding: 8px 12px;
  }
  ::before {
    content: '';
    display: block;
    height: 8px;
  }
`;

const TableBodyData = styled.td`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #5a6066;
  padding: 6px 12px;
  text-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

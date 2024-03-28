import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import ArrowDown from '../../../assets/icons/arrow-down.svg';
import { GithubIssues } from '../../types/github';

interface Props {
  currentPage: number;
}

function TablePagination({ currentPage }: Props) {
  const navigate = useNavigate();
  Math.ceil(5 / 10);
  const pageArray = [...Array(5)].map((v, index) => currentPage + index);
  const pageChangeEvent = (pageNumber: number) => {
    pageNumber !== currentPage && navigate(`/home?page=${pageNumber}`);
  };

  return (
    <PaginationContainer>
      <PageChangeButton
        onClick={() => pageChangeEvent(currentPage - 1)}
        disabled={currentPage === 1}
      >
        arrow left
      </PageChangeButton>
      <PageNumberButtonWrapper>
        {pageArray.map((pageNumber) => (
          <PageNumber
            key={pageNumber}
            className={pageNumber === currentPage ? 'active' : ''}
            onClick={() => pageChangeEvent(pageNumber)}
          >
            {pageNumber}
          </PageNumber>
        ))}
      </PageNumberButtonWrapper>
      <PageChangeButton onClick={() => pageChangeEvent(currentPage + 1)}>
        arrow right
      </PageChangeButton>
    </PaginationContainer>
  );
}

export default TablePagination;

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageChangeButton = styled.button`
  margin: 0 4px;
  border: 0;
  background: none;
`;

const PageNumberButtonWrapper = styled.div``;

const PageNumber = styled.button`
  width: 36px;
  height: 36px;
  padding: 6px;
  margin: 0 4px;
  border: 0;
  border-radius: 18px;
  background: none;
  cursor: pointer;

  &.active {
    background: #f0f4f7;
  }
`;

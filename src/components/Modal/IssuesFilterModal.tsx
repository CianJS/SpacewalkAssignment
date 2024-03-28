import styled from '@emotion/styled';
import FilterModal from './FilterModal';
import { GithubIssueState } from '../../types/github';
import { useState } from 'react';

interface Props {
  currentState: GithubIssueState;
  applyIssueStateFilter: (state: GithubIssueState) => void;
  handleCloseModal: () => void;
}

const issueStateName = {
  [GithubIssueState.all]: '전체',
  [GithubIssueState.open]: GithubIssueState.open,
  [GithubIssueState.closed]: GithubIssueState.closed,
};

const issueStateList = [
  GithubIssueState.all,
  GithubIssueState.open,
  GithubIssueState.closed,
];

function IssuesFilterModal({
  currentState,
  applyIssueStateFilter,
  handleCloseModal,
}: Props) {
  const [stateValue, setStateValue] = useState(currentState);

  return (
    <FilterModal title="이슈 상태" clickBackground={handleCloseModal}>
      <FilterBoxWrapper>
        {issueStateList.map((state) => (
          <FilterBox
            className={stateValue === state ? 'active' : ''}
            onClick={() => setStateValue(state)}
          >
            {issueStateName[state]}
          </FilterBox>
        ))}
      </FilterBoxWrapper>
      <FilterSaveButton onClick={() => applyIssueStateFilter(stateValue)}>
        적용
      </FilterSaveButton>
    </FilterModal>
  );
}

export default IssuesFilterModal;

const FilterBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

const FilterBox = styled.button`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  color: #363b40;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 10px 14px;
  border: 1px solid #dfe5eb;
  border-radius: 30px;
  margin-right: 8px;
  cursor: pointer;

  &.active {
    color: #ffffff;
    background-color: #1a8cff;
    border: 0;
  }
`;

const FilterSaveButton = styled.button`
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  border: 0;
  border-radius: 10px;
  color: #ffffff;
  background: #1a8cff;
  user-select: none;
  cursor: pointer;
`;

import styled from '@emotion/styled';
import ArrowDown from '../../../assets/icons/arrow-down.svg';
import { GithubIssueState } from '../../types/github';

interface Props {
  state: GithubIssueState;
  handleClick: () => void;
}

function IssueStatusFilter({ state, handleClick }: Props) {
  return (
    <IssueStatusFilterBox onClick={handleClick}>
      <IssuesFilterText
        className={state === GithubIssueState.all ? '' : 'selected'}
      >
        {state === GithubIssueState.all ? '이슈 상태' : state}
      </IssuesFilterText>
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
  &.selected {
    color: #1a8cff;
  }
`;

const IssueStatusFilterIcon = styled.img`
  width: 12px;
  height: 12px;
`;

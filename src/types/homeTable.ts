import { GithubIssueState } from './github';

export type Filter = {
  page: string;
  state: GithubIssueState;
  sort: string;
};

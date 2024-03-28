import { GithubIssueSort, GithubIssueState } from '../types/github';
import githubAPI from './github';

export const getGithubIssueList = async ({
  perPage,
  page,
  state,
  sort,
}: {
  perPage: number;
  page: number;
  state: GithubIssueState;
  sort: GithubIssueSort;
}) => {
  const queryParams = new URLSearchParams({
    per_page: perPage.toString(),
    page: page.toString(),
    state,
    sort,
  }).toString();
  const { data } = await githubAPI.http.get(`issues?${queryParams}`);
  return data;
};

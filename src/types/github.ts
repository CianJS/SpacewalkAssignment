export interface GithubIssues {
  id: number;
  title: string;
  comments: number;
  state: GithubIssueState;
  created_at: string;
  updated_at: string;
  user: User;
}

export enum GithubIssueState {
  open = 'open',
  closed = 'closed',
  all = 'all',
}

export enum GithubIssueSort {
  CREATED = 'created',
  UPDATED = 'updated',
  COMMENTS = 'comments',
}

interface User {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: false;
  starred_url: string;
  subscriptions_url: string;
  type: 'User';
  url: string;
}

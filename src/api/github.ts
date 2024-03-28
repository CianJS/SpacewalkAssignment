import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class GithubAPI {
  public githubToken: string;
  public http: AxiosInstance;

  constructor() {
    this.githubToken = '{GITHUB_ACCESS_TOKEN}';
    this.http = axios.create({
      baseURL: 'https://api.github.com/repos/facebook/react/',
      withCredentials: false,
      headers: { Authorization: `Bearer ${this.githubToken}` },
    });
  }
}

export default new GithubAPI();

import React, { Component } from 'react';
import 'whatwg-fetch';

export default class RepoDetails extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      repository: {},
    };
  }

  fetchData(repoName) {
    fetch('https://api.github.com/repos/pro-react/' + repoName)
    .then((response)=> response.json())
    .then((responseData)=> {
      this.setState({
        repository: responseData,
      });
    });
  }

  componentDidMount() {
    let repoName = this.props.params.repo_name;
    this.fetchData(repoName);
  }

  componentWillReceiveProps(nextProps) {
    let repoName = nextProps.params.repo_name;
    this.fetchData(repoName);
  }

  render() {
    return (
      <div>
        <h2>{this.state.repository.name}</h2>
        <p>{this.state.repository.description}</p>
        <span>{this.state.repository.stargazers_count + ' ★' }</span>
      </div>
    );
  }

}


import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import About from './components/About';
import Home from './components/Home';
import Repos from './components/Repos';
import RepoDetails from './components/RepoDetails';

class App extends Component {
  render() {
    return (
      <div>
        <header>App</header>
        <menu>
          <ul>
            <li><Link to='/about' activeClassName='active'>About</Link></li>
            <li><Link to='/repos' activeClassName='active'>Repos</Link></li>
          </ul>
        </menu>
        { this.props.children }
      </div>
    );
  }
}

render((
  <Router history={ browserHistory }>
    <Route path='/' component={ App} >
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='repos' component={Repos}>
        <Route path='details/:repo_name' component={RepoDetails} />
      </Route>
    </Route>
  </Router>
  ), document.getElementById('root'));

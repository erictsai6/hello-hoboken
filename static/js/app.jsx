import React from 'react';
import ReactDOM from 'react-dom';
import HelloHoboken from './hello-hoboken.jsx';
import About from './about.jsx';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, IndexRoute, Link, hashHistory, History } from 'react-router'

const App = React.createClass({

  render() {
    return (
      <div>
        <nav className="navigation">
          <Link className="navigation--link" activeClassName="active" to="/">Home</Link>
          <Link className="navigation--link" activeClassName="active" to="/about">About</Link>
        </nav>
        <div className="container--child">
          {this.props.children}
        </div>
      </div>
    )
  }
})

ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={HelloHoboken} />
            <Route path="about" component={About} />
        </Route>
    </Router>,
    document.getElementById('container')
);
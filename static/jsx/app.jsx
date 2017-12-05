import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home/home.jsx';
import About from './pages/about/about.jsx';
import Ar from './pages/ar/ar.jsx';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, IndexRoute, Link, IndexRedirect, hashHistory, History } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    // loggerMiddleware // neat middleware that logs actions
  ));

const App = React.createClass({

  render() {
    return (
      <div>
        <nav className="navigation">
          <Link className="navigation--link" activeClassName="active" to="/home">Home</Link>
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
    <Provider store={store}>
      <Router history={hashHistory}>
          <Route path="/" component={App}>
              <IndexRedirect to="/home" />
              <Route path="home" component={Home} />
              <Route path="about" component={About} />
              <Route path="ar" component={Ar} />
          </Route>
      </Router>
    </Provider>,
    document.getElementById('container')
);
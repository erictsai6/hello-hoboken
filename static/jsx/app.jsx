import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home/home.jsx';
import About from './pages/about/about.jsx';
import Game from './pages/game/game.jsx';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, IndexRoute, Link, IndexRedirect, hashHistory, History } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer);

const App = React.createClass({

  render() {
    return (
      <div>
        <nav className="navigation">
          <Link className="navigation--link" activeClassName="active" to="/home">Home</Link>
          <Link className="navigation--link" activeClassName="active" to="/game">Game</Link>
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
              <Route path="game" component={Game} />
              <Route path="about" component={About} />        
          </Route>
      </Router>
    </Provider>,
    document.getElementById('container')
);
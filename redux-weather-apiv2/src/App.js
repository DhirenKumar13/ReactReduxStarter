import React, { Component } from 'react';
import { Provider } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import Comments from './components/comments';
import CommentForm from './components/comment_form';
import store from './redux-store/'

class App extends Component {
  render() {
    return (
      <Provider store = {store} >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CommentForm />
        <Comments />
      </div>
      </Provider>
    );
  }
}

export default App;

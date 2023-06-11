import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostsList from './components/PostsList';
import Post from './components/Post';

class App extends React.Component {
  render() {
    return (
      <div>
        <PostsList />
      </div>
    );
  }
}

export default App;

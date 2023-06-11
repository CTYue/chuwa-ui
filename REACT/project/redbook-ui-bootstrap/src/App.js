import logo from './logo.svg';
import './App.css';
import PostsList from './components/PostList';
import FakePostsList from './components/faker/FakePostList'

function App() {
  return (
    <div className="App">
      {/* <PostsList /> */}
      <FakePostsList />
    </div>
  );
}

export default App;

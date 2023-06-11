import React from 'react';
import FakePost from './FakePost'
import { getRandomData } from '../../services/fakeDataService';
import Pagination from 'react-bootstrap/Pagination';

class FakePostsList extends React.Component {
  state = {
    posts: [],
    currentPage: 1,
    postsPerPage: 10
  };

  componentDidMount() {
    const posts = Array.from({ length: 100 }, () => getRandomData());
    this.setState({ posts });
  }

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  }

  render() {
    const { posts, currentPage, postsPerPage } = this.state;
    console.log(posts);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Calculate total pages
    const totalPages = Math.ceil(posts.length / postsPerPage);

    return (
      <div>
        <div className="row">
          {currentPosts.map((post, index) => (
            <div className="col-sm-6" key={index + currentPage}>
              <FakePost key={index} data={post} />
            </div>))}
        </div>
        <Pagination>
          {[...Array(totalPages)].map((page, i) =>
            <Pagination.Item key={i} active={i + 1 === currentPage} onClick={() => this.handlePageChange(i + 1)}>
              {i + 1}
            </Pagination.Item>
          )}
        </Pagination>
      </div>
    );
  }
}

export default FakePostsList;

import React from 'react';
import { getPosts } from '../services/api';
import Post from './Post';
import Pagination from './MyPagination';

class PostsList extends React.Component {
    state = {
        posts: [],
        currentPage: 1
    };

    componentDidMount() {
        this.fetchPosts(this.state.currentPage);
    }

    fetchPosts(page) {
        getPosts(page)
            .then(response => {
                console.log(response.data);
                this.setState({ posts: response.data.content });
            })
            .catch(error => {
                console.error('Error fetching data', error);
            });
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page }, () => {
            this.fetchPosts(this.state.currentPage);
        });
    }

    render() {
        return (
            <div>
                {console.log(this.state.posts)}
                {
                this.state.posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
                <Pagination currentPage={this.state.currentPage} onPageChange={this.handlePageChange} />
            </div>
        );
    }
}

export default PostsList;

import React from 'react';
import Post from './Post'
import { getPosts } from '../services/api';

class PostsList extends React.Component {
    state = {
        posts: [],
        currentPage: 0,
        totalPages: 1,
    };

    componentDidMount() {
        this.fetchPosts(this.state.currentPage);
    }

    fetchPosts(page) {
        getPosts(page)
            .then(response => {
                this.setState({ 
                    posts: response.data, 
                    totalPages: response.data.totalPages });
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
                <div className="row">
                    {this.state.posts.map((post) => (
                        <div className="col-sm-6" key={post.id}>
                            <Post post={post} />
                        </div>
                    ))}

                </div>
            </div>
        );
    }
}

export default PostsList;

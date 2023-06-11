// Post.js
import React from 'react';
import axios from 'axios';
import Comment from './Comment';
import AddComment from './AddComment';
import { Card, CardContent, Typography } from '@material-ui/core';
import { getPost } from '../services/api'

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: props.post
        };
    }

    componentDidMount() {
        // getPost(this.props.match.params.id)
        //     .then(response => {
        //         this.setState({ post: response.data });
        //     })
        //     .catch(error => {
        //         console.error('Error fetching data', error);
        //     });

        // axios.get(`https://your-api-url.com/posts/${this.props.match.params.id}`)
        //     .then(response => {
        //         this.setState({ post: response.data });
        //     })
        //     .catch(error => {
        //         console.error('Error fetching data', error);
        //     });
    }

    addComment = (comment) => {
        axios.post(`https://your-api-url.com/posts/${this.state.post.id}/comments`, comment)
            .then(response => {
                this.setState({
                    post: {
                        ...this.state.post,
                        comments: [...this.state.post.comments, response.data]
                    }
                });
            })
            .catch(error => {
                console.error('Error adding comment', error);
            });
    }

    deleteComment = (commentId) => {
        axios.delete(`https://your-api-url.com/comments/${commentId}`)
            .then(() => {
                this.setState({
                    post: {
                        ...this.state.post,
                        comments: this.state.post.comments.filter(comment => comment.id !== commentId)
                    }
                });
            })
            .catch(error => {
                console.error('Error deleting comment', error);
            });
    }

    render() {
        const { post } = this.state;
        console.log(post)
        if (!post) {
            return <div>Loading...</div>;
        }

        return (
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">{post.title}</Typography>
                    <Typography color="textSecondary">{post.description}</Typography>
                    <Typography color="textSecondary">{post.content}</Typography>
                    <img src="https://i0.wp.com/countryswag.com/wp-content/uploads/2022/01/kane-brown-new-song.jpg?resize=705%2C705&ssl=1"
                     alt={post.title} />
                    <Typography color="textSecondary">{post.date}</Typography>
                    {post.comments.map(comment => (
                        <Comment key={comment.id} comment={comment} onDelete={this.deleteComment} />
                    ))}
                    <AddComment onAdd={this.addComment} />
                </CardContent>
            </Card>
        );
    }
}

export default Post;
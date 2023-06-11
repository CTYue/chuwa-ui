import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { getPost } from '../services/api';
import Comment from './Comment';
import { getRandomImage } from '../services/getRandomImage';

class Post extends React.Component {
    state = {
        post: null
    };

    componentDidMount() {
        const { post } = this.props;

        if (post) {
            // 如果传入了 post prop，就直接使用
            this.setState({ post });
        } else {
            // 否则就调用 API 来获取数据
            const { id } = this.props.match.params;
            this.fetchPost(id);
        }
    }

    fetchPost(id) {
        getPost(id)
            .then(response => {
                this.setState({ post: response.data });
            })
            .catch(error => {
                console.error('Error fetching data', error);
            });
    }

    render() {
        const { post } = this.state;

        if (!post) {
            return null;
        }

        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Img src={getRandomImage()} className="img-thumbnail"></Card.Img>
                        <Card.Title className="mb-2 text-muted">{post.title}</Card.Title>
                        {/* <Card.Text>{post.description}</Card.Text> */}
                        <Card.Text className="text-justify">{post.content}</Card.Text>
                    </Card.Body>
                </Card>
                {this.props.showComments && post.comments && (
                    <ListGroup>
                        {post.comments.map(comment => (
                            <ListGroup.Item key={comment.id}>
                                <Comment {...comment} />
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </div>
        );
    }
}

export default Post;

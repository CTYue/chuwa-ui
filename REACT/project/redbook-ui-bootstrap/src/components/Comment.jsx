import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Comment extends React.Component {
    render() {
        const { name, body, update_date_time } = this.props;
        
        return (
            <ListGroup.Item>
                <h5>{name}</h5>
                <p>{body}</p>
                <small>Last updated: {new Date(update_date_time).toLocaleString()}</small>
            </ListGroup.Item>
        );
    }
}

export default Comment;

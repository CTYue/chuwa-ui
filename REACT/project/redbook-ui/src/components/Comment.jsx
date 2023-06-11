// Comment.js
import React from 'react';
import { IconButton, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

class Comment extends React.Component {
    handleDelete = () => {
        this.props.onDelete(this.props.comment.id);
    }

    render() {
        const { comment } = this.props;
        return (
            <ListItem>
                <ListItemText primary={comment.commenter} secondary={comment.comment} />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={this.handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default Comment;

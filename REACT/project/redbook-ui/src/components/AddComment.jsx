// AddComment.js
import React from 'react';
import { Button, TextField } from '@material-ui/core';

class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commenter: '',
            comment: ''
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state);
        this.setState({ commenter: '', comment: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField
                    label="评论者"
                    value={this.state.commenter}
                    onChange={this.handleChange}
                    name="commenter"
                    required
                />
                <TextField
                    label="评论"
                    value={this.state.comment}
                    onChange={this.handleChange}
                    name="comment"
                    required
                />
                <Button variant="contained" color="primary" type="submit">添加评论</Button>
            </form>
        );
    }
}

export default AddComment;

import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1';

export function getPosts(page) {
    return axios.get(`${API_URL}/posts?pageNo=${page}`);
}

export function getPost(id) {
    return axios.get(`${API_URL}/posts/${id}`);
}

export function addComment(postId, comment) {
    return axios.post(`${API_URL}/posts/${postId}/comments`, comment);
}

export function deleteComment(commentId) {
    return axios.delete(`${API_URL}/comments/${commentId}`);
}

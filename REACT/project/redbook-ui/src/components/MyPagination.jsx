import React from 'react';
import Pagination from '@mui/material/Pagination';

class MyPagination extends React.Component {
  handleChange = (event, value) => {
    this.props.onPageChange(value);
  };

  render() {
    return (
      <Pagination count={this.props.totalPages} page={this.props.currentPage} onChange={this.handleChange} />
    );
  }
}

export default MyPagination;

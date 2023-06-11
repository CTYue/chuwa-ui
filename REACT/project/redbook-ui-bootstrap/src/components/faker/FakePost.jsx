import React from 'react';
import Card from 'react-bootstrap/Card';

class FakePost extends React.Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  render() {
    const { data } = this.state;
    console.log(data)
    if (!data) {
      return null;
    }

    return (
      <div>
        <Card>
          <Card.Img variant="top" src={data.image} className="img-thumbnail" />
          <Card.Body>
            <Card.Title className="mb-2 text-muted">{data.title}</Card.Title>
            <Card.Text className="text-justify">{data.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default FakePost;

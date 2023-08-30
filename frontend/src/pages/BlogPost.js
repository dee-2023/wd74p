import React from 'react';
import { Container } from 'react-bootstrap';

const BlogPost = ({ title, author, date, imageUrl, content }) => {
  return (
    <Container className="blog-post ">
      <h2>{title}</h2>
      <p>By {author}</p>
      <p>{date}</p>
      <img src={imageUrl} alt={title}  />
      <div>{content}<hr /></div>
    </Container>
  );
};

export default BlogPost;
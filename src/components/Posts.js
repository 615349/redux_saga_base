import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Posts = ({ posts = [] }) => (<>
  { posts.map(post => <div className='post' key={post.created_at}>
    <div>author: {post.author}</div>
    <div>title: {post.title}</div>
  </div>) }
</>);

Posts.propTypes = {
  posts: PropTypes.array
};

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps)(Posts);

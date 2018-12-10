import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ posts }) => (<ul>
  { posts && posts.map(item => <li key={item.objectID}>{item.title}</li>) }
</ul>);

Home.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Home;

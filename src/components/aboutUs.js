import React from 'react';
import PropTypes from 'prop-types';

const AboutUs = ({ gists }) => (<ul>
  { gists && gists.map(item => <li key={item.id}>{item.owner.login}</li>) }
</ul>);

AboutUs.propTypes = {
  gists: PropTypes.array.isRequired
};

export default AboutUs;

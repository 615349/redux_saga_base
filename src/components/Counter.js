import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Counter = ({ number }) => <p>Posts Number: {number}</p>;

Counter.propTypes = {
  number: PropTypes.number
};

const mapStateToProps = ({ number }) => ({ number });

export default connect(mapStateToProps)(Counter);

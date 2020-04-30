import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/';
import Posts from './Posts';
import Counter from './Counter';

const App = ({ isFetching, hasError, requestAlgolia }) => {
  const handleClick = () => {
    requestAlgolia();
  };

  if (hasError) {
    return <h1>Something is wrong...</h1>;
  }

  return (
    <>
      <button onClick={handleClick}>FETCH DATA</button>
      {isFetching && <h1> loading... </h1>}
      {!isFetching && (
        <>
          <Counter />
          <Posts />
        </>
      )}
    </>
  );
};

App.propTypes = {
  isFetching: PropTypes.bool,
  hasError: PropTypes.bool,
  dispatch: PropTypes.func
};

const mapStateToProps = ({ hasError, isFetching }) => ({
  hasError,
  isFetching
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

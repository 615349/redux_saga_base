import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/aboutUsActionCreators';
import AboutUsComponent from '../components/aboutUs';

class AboutUs extends Component {
  componentDidMount() {
    this.props.dispatch(actionCreators.requestPublic());
  }

  render() {
    const { hasError, isFetching, gists } = this.props;
    if (hasError) {
      return <h1>something is wrong</h1>;
    }
    if (isFetching) {
      return <h1>loading</h1>
    }
    return <AboutUsComponent gists={gists}/>
  }
}

const mapStateToProps = ({ aboutUs }) => aboutUs;

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actionCreators),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);


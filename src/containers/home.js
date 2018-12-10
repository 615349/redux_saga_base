import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/homeActionCreators';
import HomeComponent from '../components/home';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(actionCreators.requestAlgolia());
  }

  render() {
    const { hasError, isFetching, posts } = this.props;
    if (hasError) {
      return <h1>something is wrong</h1>;
    }
    if (isFetching) {
      return <h1>loading</h1>
    }
    return <HomeComponent posts={posts}/>
  }
}

const mapStateToProps = ({ home }) => home;

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actionCreators),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

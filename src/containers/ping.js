import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import View from '../views/ping';
import { setMessage } from '../actions';

const messageSelector = state => state.ping.message;

const selector = createSelector(
  messageSelector,
  message => { return { message } }
);

const mapDispatchToProps = (dispatch) => {
  return {
    setMessageHandler: message => dispatch(setMessage(message))
  };
};

const Ping = connect(selector, mapDispatchToProps)(View);

export default Ping;
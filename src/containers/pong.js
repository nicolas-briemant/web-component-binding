import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import View from '../views/pong';

const messageSelector = state => state.pong.message;

const selector = createSelector(
  messageSelector,
  message => { return { message } }
);

const Pong = connect(selector, null)(View);

export default Pong;
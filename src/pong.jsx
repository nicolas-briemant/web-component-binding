import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import pongReducer from './reducers/pong';
import Pong from './containers/pong';

const pong = () => {
  const logger = createLogger();

  const store = createStore(
    combineReducers({
      pong: pongReducer
    }),
    applyMiddleware(thunk, logger)
  );

  const setMessageHandler = (message) => {
    store.dispatch({ type: 'SET_MESSAGE', message });
  };

  const App = () => {
    return (
      <Provider store={ store }>
        <Pong />
      </Provider>
    );
  };

  return { App, setMessageHandler };
};

export default pong;
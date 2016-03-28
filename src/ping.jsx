import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import EventEmitter from 'events';

import pingReducer from './reducers/ping';
import pingMiddleware from './middlewares/ping';
import Ping from './containers/ping';

const ping = (setMessageHandler) => {
  const logger = createLogger();

  const ee = new EventEmitter();
  if (setMessageHandler) ee.on('SET_MESSAGE', setMessageHandler);

  const store = createStore(
    combineReducers({
      ping: pingReducer
    }),
    applyMiddleware(pingMiddleware(ee), thunk, logger)
  );

  const App = () => {
    return (
      <Provider store={ store }>
        <Ping />
      </Provider>
    );
  };

  return App;
};


export default ping;
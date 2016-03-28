import React from 'react';
import { render } from 'react-dom';

import './assets/ping-pong.less';

import ping from './ping';
import pong from './pong';

const gonp = pong();
const Ping = ping(gonp.setMessageHandler);
const Pong = pong().App;

const App = () => {
  return (
    <div className="ping-pong">
      <Ping />
      <gonp.App />
      <Pong />
    </div>
  );
}

render(<App />, document.getElementById('root'));
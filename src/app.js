import React from 'react';
import { render } from 'react-dom';

import './assets/ping-pong.less';

import ping from './ping';
import pong from './pong';

const gonp = pong();
const Gonp = gonp.App;
const Ping = ping(gonp.setMessageHandler);
const Gimp = ping();
const Pong = pong().App;

const App = () => {
  return (
    <div className="ping-pong">
      <Ping />
      <Gimp />
      <Gonp />
      <Pong />
    </div>
  );
}

render(<App />, document.getElementById('root'));
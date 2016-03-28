import React, { PropTypes } from 'react';

const Ping = ({ message, setMessageHandler }) => {
  let input;

  const onClickHander = () => {
    setMessageHandler(input.value);
    input.value = '';
  };

  return (
    <div className="ping">
      <input className="ping__input" ref={ node => { input = node; } } />
      <button className="ping__button" onClick={ onClickHander }>set message</button>
      <p className="ping__message">{ message }</p>
    </div>
  );
};

Ping.propTypes = {
  message: PropTypes.string,
  setMessageHandler: PropTypes.func
};

export default Ping;
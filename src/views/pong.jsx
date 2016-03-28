import React, { PropTypes } from 'react';

const Pong = ({ message }) => {
  return (
    <div className="pong">
      <p className="pong__message">{ message }</p>
    </div>
  );
};

Pong.propTypes = {
  message: PropTypes.string
};

export default Pong;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
  return (
    <div className='tweet'>
      <Avatar />
      Tweet
    </div>
  );
}

ReactDOM.render(<Tweet />, document.querySelector('#root'));

function Avatar() {
  return (
    <img
      src='https://www.gravatar.com/avatar/nothing'
      className='avatar'
      alt='avatar'
    />
  );
}

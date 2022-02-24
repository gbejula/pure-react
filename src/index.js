import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
  return (
    <div className='tweet'>
      <Avatar />
      <div className='content'>
        <Author />
        <Message />
      </div>
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

function Message() {
  return <div className='message'>This is less than 40 characters</div>;
}

function Author() {
  return (
    <span className='author'>
      <span className='name'>Your Name</span>
      <span className='handle'>@handle</span>
    </span>
  );
}

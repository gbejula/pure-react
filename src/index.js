import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
  return (
    <div className='tweet'>
      <Avatar />
      <div className='content'>
        <Author />
        <Time />
        <Message />
        <div className='buttons'>
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      src='https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1645725295~hmac=d7228fa2ef5f1dfe97c0ddc52bd5360c'
      className='avatar'
      alt='avatar'
    />
  );
}

function Message() {
  return (
    <div className='message'>
      This is how we need to affect the next generation positively.
    </div>
  );
}

function Author() {
  return (
    <span className='author'>
      <span className='name'>Tunde Onakoya</span>
      <span className='handle'>@tonak</span>
    </span>
  );
}

const Time = () => <span className='time'>3h ago</span>;
const ReplyButton = () => <i className='fa fa-reply reply-button' />;
const RetweetButton = () => <i className='fa fa-retweet retweet-button' />;
const LikeButton = () => <i className='fa fa-heart like-button' />;
const MoreOptionsButton = () => (
  <i className='fa fa-ellipsis-h more-options-button' />
);

ReactDOM.render(<Tweet />, document.querySelector('#root'));

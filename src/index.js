import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';

function Tweet({ tweet }) {
  return (
    <div className='tweet'>
      <Avatar hash={tweet.gravatar} />
      <div className='content'>
        <Author author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
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

const testTweet = {
  message: 'Something about cats.',
  gravatar: 'xyz',
  author: {
    handle: 'gbejula',
    name: 'Olugbenga',
  },
  likes: 2,
  retweets: 0,
  timestamp: '2016-07-30 21:24:37',
};

// https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1645725295~hmac=d7228fa2ef5f1dfe97c0ddc52bd5360c'

function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} className='avatar' alt='avatar' />;
}

function Message({ text }) {
  return <div className='message'>{text}</div>;
}

function Author({ author }) {
  const { name, handle } = author;
  return (
    <span className='author'>
      <span className='name'>{name}</span>
      <span className='handle'>@{handle}</span>
    </span>
  );
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className='time'>{timeString}</span>;
};
const ReplyButton = () => <i className='fa fa-reply reply-button' />;
const RetweetButton = () => <i className='fa fa-retweet retweet-button' />;
const LikeButton = () => <i className='fa fa-heart like-button' />;
const MoreOptionsButton = () => (
  <i className='fa fa-ellipsis-h more-options-button' />
);

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector('#root'));

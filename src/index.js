import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';
import PropTypes from 'prop-types';

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
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function AddressLabel({ info }) {
  return (
    <div>
      <Person name={info.name} />
      <Address address={info.address} />
    </div>
  );
}

function Envelope() {
  return (
    <div className='envelope'>
      <AddressLabel className='middle-contact' info={person} />
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
  retweets: 17,
  timestamp: '2016-07-30 21:24:37',
};

const person = {
  name: 'Full Name',
  address: '123, Fake St. Boston, MA 02118.',
};

// https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1645725295~hmac=d7228fa2ef5f1dfe97c0ddc52bd5360c'

const Person = ({ name }) => <p className='name'>{name}</p>;

const Address = ({ address }) => <div className='address'>{address}</div>;

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

function getRetweetCount(count) {
  if (count > 0) {
    return <span className='retweet-count'>{count}</span>;
  } else {
    return null;
  }
}
const ReplyButton = () => <i className='fa fa-reply reply-button' />;

const RetweetButton = ({ count }) => (
  <span className='retweet-button'>
    <i className='fa fa-retweet' />
    {getRetweetCount(count)}
  </span>
);
const LikeButton = ({ count }) => (
  <span className='like-button'>
    <i className='fa fa-heart' />
    {count > 0 && <span className='like-count'>{count}</span>}
  </span>
);
const MoreOptionsButton = () => (
  <i className='fa fa-ellipsis-h more-options-button' />
);

LikeButton.propTypes = {
  count: PropTypes.number,
};

RetweetButton.propTypes = {
  count: PropTypes.number,
};

Message.propTypes = {
  text: PropTypes.string,
};

Time.propTypes = {
  time: PropTypes.string,
};

Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
  }).isRequired,
};

Avatar.propTypes = {
  hash: PropTypes.string,
};

ReactDOM.render(<Envelope />, document.querySelector('#root'));

//<Tweet tweet={testTweet} />   -- Tweet component
//<AddressLabel info={person} />

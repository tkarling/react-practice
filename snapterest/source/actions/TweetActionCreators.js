var AppDispatcher = require('../dispatcher/AppDispatcher');

function receiveTweet(tweet) {
    console.log('received tweet');

    var action = {
        type: 'receive_tweet',
        tweet: tweet
    };

    AppDispatcher.dispatch(action);
}

module.exports = {
  receiveTweet: receiveTweet
};
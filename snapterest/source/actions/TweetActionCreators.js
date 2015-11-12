import AppDispatcher from '../dispatcher/AppDispatcher';

export default class TweetActionCreators {
    static receiveTweet(tweet) {
        var action = {
            type: 'receive_tweet',
            tweet: tweet
        };

        AppDispatcher.dispatch(action);
    }
}


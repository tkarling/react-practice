import AppDispatcher from '../dispatcher/AppDispatcher';
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var tweet = null;

function setTweet(receivedTweet) {
    tweet = receivedTweet;
}

function emitChange() {
    tweetStore.emit(CHANGE_EVENT);
}

class TweetStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListene(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    getTweet () {
        return tweet;
    }
};


function handleAction(action) {
    if(action.type === 'receive_tweet') {
        setTweet(action.tweet);
        emitChange();
    }
}

var tweetStore = new TweetStore();
TweetStore.dispatchToken = AppDispatcher.register(handleAction);

export default tweetStore;
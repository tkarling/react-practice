import AppDispatcher from '../dispatcher/AppDispatcher';
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var collectionTweets = {};
var collectionName = 'new';

function addTweetToCollection(tweet) {
    collectionTweets[tweet.id] = tweet;
}

function removeTweetFromCollection(tweetId) {
    delete collectionTweets[tweetId];
}

function removeAllTweetsFromCollection() {
    collectionTweets = {};
}

function setCollectionName(name) {
    collectionName = name;
}

function emitChange() {
    collectionStore.emit(CHANGE_EVENT);
}

class CollectionStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }
    removeChangeListener(callback) {
        this.removeChangeListener(CHANGE_EVENT, callback);
    }
    getCollectionTweets () {
        return collectionTweets;
    }
    getCollectionName() {
        return collectionName;
    }

};

function handleAction(action) {
    switch(action.type) {
        case 'add_tweet_to_collection':
            addTweetToCollection(action.tweet);
            emitChange();
            break;

        case 'remove_tweet_from_collection':
            removeTweetFromCollection(action.tweetId);
            emitChange();
            break;

        case 'remove_all_tweets_from_collection' :
            removeAllTweetsFromCollection();
            emitChange();
            break;

        case 'set_collection_name':
            setCollectionName(action.collectionName);
            emitChange();
            break;

        default: // ...do nothing

    }
}

var collectionStore = new CollectionStore();
collectionStore.dispatchToken = AppDispatcher.register(handleAction);

export default collectionStore;
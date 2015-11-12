var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
    addTweetToCollection(tweet) {
        var action = {
            type: 'add_tweet_to_collection',
            tweet: tweet
        };

        AppDispatcher.dispatch(action);
    },

    removeTweetFromCollection(tweetId) {
        var action = {
            type: 'remove_tweet_from_collection',
            tweetId: tweetId
        };

        AppDispatcher.dispatch(action);
    },

    removeAllTweetsFromCollection() {
        var action = {
            type: 'remove_all_tweets_from_collection'
        };

        AppDispatcher.dispatch(action);
    },

    setCollectionName(collectionName) {
        var action = {
            type: 'set_collection_name',
            collectionName: collectionName
        };

        AppDispatcher.dispatch(action);
    }

};
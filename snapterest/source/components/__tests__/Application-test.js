jest.dontMock('../Application.react');

describe('Application', function () {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var TestUtils = require('react-addons-test-utils');
    var Application = require('../Application.react');
    var application;

    describe('from empty', function() {
        beforeEach(function() {
            application = TestUtils.renderIntoDocument(
                <Application />
            );
        });

        it('gets initial state', function () {
            expect(application.state.collectionTweets).toEqual({});
        });

        it('adds tweet to collection', function () {
            var tweet = {id: "tweet1", content:"tweet1 content"};
            application.addTweetToCollection(tweet);

            expect(application.state.collectionTweets[tweet.id]).toEqual(tweet);
        });
    })

    describe('with content', function() {
        beforeEach(function() {
            application = TestUtils.renderIntoDocument(
                <Application />
            );
            application.addTweetToCollection({id: "tweet1", content:"tweet1 content"});
            application.addTweetToCollection({id: "tweet2", content:"tweet2 content"});
        });

        it('removes tweet from collection', function () {
            var tweetToBeRemoved = {id: "tweet1", content:"tweet1 content"};
            application.removeTweetFromCollection(tweetToBeRemoved);

            expect(application.state.collectionTweets[tweetToBeRemoved.id]).not.toBeDefined();
            expect(application.state.collectionTweets).not.toEqual({});
        });

        it('removes all tweets from collection', function () {
            application.removeAllTweetsFromCollection();

            expect(application.state.collectionTweets).toEqual({});
        });

    })


});
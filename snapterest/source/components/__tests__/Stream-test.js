jest.dontMock('../Stream.react');

describe('Stream', function () {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var TestUtils = require('react-addons-test-utils');
    var Stream = require('../Stream.react');
    var stream;

    describe('from empty', function() {
        beforeEach(function() {
            stream = TestUtils.renderIntoDocument(
                <Stream />
            );
        });

        it('gets initial state', function () {
            //expect(stream.state.tweet).toBe(null);
        });

        it('sets tweet', function () {
            var tweet = {id: "tweet1", content: "tweet1 content"};
            stream.handleNewTweet(tweet);
            expect(stream.state.tweet).toEqual(tweet);
        });


    })


});
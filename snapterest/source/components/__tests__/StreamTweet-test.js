jest.dontMock('../StreamTweet.react');

describe('StreamTweet', function () {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var TestUtils = require('react-addons-test-utils');
    var StreamTweet = require('../StreamTweet.react');
    var streamTweet;

    describe('from empty', function() {
        beforeEach(function() {
            streamTweet = TestUtils.renderIntoDocument(
                <StreamTweet />
            );
        });

        it('gets state at Mount', function () {
            expect(streamTweet.state.numberOfCharsIsIncreasing).toBe(true);
            expect(streamTweet.state.headerText).toBe("Latest public photo from Twitter");
        });

    })


});
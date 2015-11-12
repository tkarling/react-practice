var React = require('react');
//var SnapkiteStreamClient = require('snapkite-stream-client');
var StreamTweet = require('./StreamTweet.react');
var Header = require('./Header.react');
var TweetStore = require('../stores/TweetStore');

var Stream = React.createClass({
    getInitialState: function() {
      return {
          tweet: TweetStore.getTweet()
      }
    },
    onTweetChange: function() {
        this.setState({
            tweet: TweetStore.getTweet()
        });
    },
    componentDidMount: function() {
        TweetStore.addChangeListener(this.onTweetChange);
    },
    componentWillUnMount: function() {
        TweetStore.removeChangeListener(this.onTweetChange);
    },
    render: function() {
        var tweet = this.state.tweet;

        if(tweet) {
            return (
                <div>
                    <StreamTweet tweet={tweet} />
                </div>
            )
        }
        return (
            <Header text="Waiting for photos from Twitter..." />
        )
    }
});

module.exports = Stream;
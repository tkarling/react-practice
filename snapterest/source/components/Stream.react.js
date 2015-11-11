var React = require('react');
var SnapkiteStreamClient = require('snapkite-stream-client');
var StreamTweet = require('./StreamTweet.react');
var Header = require('./Header.react');

var Stream = React.createClass({
    getInitialState: function() {
      return {
          tweet: null
      }
    },
    componentDidMount: function() {
        var tweet = {id:'1', text:'joopa joo', media:[{url: 'http://45.55.16.198:3039/api/pocketScrum/thumbnail?id=55ed8ec6516b4266230081a6'}]};
        //console.log("Stream: componentDidMount", tweet);
        this.handleNewTweet(tweet);
        //SnapkiteStreamClient.initialiseStream(this.handleNewTweet);
    },
    componentWillUnMount: function() {
        //SnapkiteStreamClient.destroyStream();
    },
    handleNewTweet: function (tweet) {
      this.setState({
          tweet: tweet
      });
    },
    render: function() {
        var tweet = this.state.tweet;

        //<img src={tweet.media[0].url}/>
        if(tweet) {
            return (
                <div>
                    <StreamTweet
                        tweet={tweet}
                        onAddTweetToCollection={this.props.onAddTweetToCollection} />
                </div>
            )
        }
        return (
            <Header text="Waiting for photos from Twitter..." />
        )
    }
});

module.exports = Stream;
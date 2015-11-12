var React = require('react');
var Tweet = require('./Tweet.react');
var CollectionActionCreators = require('../actions/CollectionActionCreators');

var listStyle = {
    padding: '0'
};

var listItemStyle = {
    display: 'inline-block',
    listStyle: 'none'
};

var TweetList = React.createClass({
    getListOfTweetIds: function () {
        //console.log("TweetList: getListOfTweetIds tweets", this.props.tweets);
        var listOfTweetIds =  Object.keys(this.props.tweets);
        //console.log("TweetList: getListOfTweetIds tweetIds", listOfTweetIds);
        return listOfTweetIds;
    },
    removeTweetFromCollection: function(tweet) {
        CollectionActionCreators.removeTweetFromCollection(tweet.id)
    },
    getTweetElement: function (tweetId) {
        var tweet = this.props.tweets[tweetId];
        var handleRemoveTweetFromCollection = this.removeTweetFromCollection;
        var tweetElement;

        if (handleRemoveTweetFromCollection) {
            tweetElement = (
                <Tweet
                    tweet={tweet}
                    onImageClick={handleRemoveTweetFromCollection}/>
            );
        } else {
            tweetElement = <Tweet tweet={tweet}/>
        }
        return <li style={listItemStyle} key={tweet.id}>{tweetElement}</li>

    },
    render: function () {
        //console.log("TweetList: render tweets", this.props.tweets);
        var tweetElements = this.getListOfTweetIds().map(this.getTweetElement);
        return (
            <ul style={listStyle}>
                {tweetElements}
            </ul>
        )
    }
});

module.exports = TweetList;
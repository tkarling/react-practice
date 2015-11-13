import React from 'react';
import Tweet from './Tweet.react';
import CollectionActionCreators from '../actions/CollectionActionCreators';


var listStyle = {
    padding: '0'
};

var listItemStyle = {
    display: 'inline-block',
    listStyle: 'none'
};

class TweetList extends React.Component {
    getListOfTweetIds () {
        var listOfTweetIds =  Object.keys(this.props.tweets);
        return listOfTweetIds;
    }
    removeTweetFromCollection(tweet) {
        CollectionActionCreators.removeTweetFromCollection(tweet.id)
    }
    getTweetElement (tweetId) {
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

    }
    render () {
        var tweetElements = this.getListOfTweetIds().map(this.getTweetElement.bind(this));
        return (
            <ul style={listStyle}>
                {tweetElements}
            </ul>
        )
    }
};

export default TweetList;
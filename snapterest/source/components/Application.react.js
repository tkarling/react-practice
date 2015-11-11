var React = require('react');
var Stream = require('./Stream.react');
var Collection = require('./Collection.react');

var Application = React.createClass({
    getInitialState: function () {
        return {
            collectionTweets: {}
        };
    },
    addTweetToCollection: function (tweet) {
        //console.log("Application: addTweetToCollection", tweet);
        var collectionTweets = this.state.collectionTweets;
        collectionTweets[tweet.id] = tweet;
        this.setState({
            collectionTweets: collectionTweets
        });
        //console.log("Application: addTweetToCollection this.state.collectionTweets", this.state.collectionTweets);
    },
    removeTweetFromCollection: function (tweet) {
        var collectionTweets = this.state.collectionTweets;
        delete collectionTweets[tweet.id];
        this.setState({
            collectionTweets: collectionTweets
        });
    },
    removeAllTweetsFromCollection: function () {
        this.setState({
            collectionTweets: {}
        });
    },
    render: function () {
        var tweets = this.state.collectionTweets;
        //console.log("this.state.collectionTweets", this.state.collectionTweets);
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4" text-center>
                        <Stream onAddTweetToCollection={this.addTweetToCollection}/>
                    </div>
                    <div className="col-md-8">
                        <Collection tweets={tweets} onRemoveTweetFromCollection={this.removeTweetFromCollection}
                            onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection}/>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Application;
var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');
var CollectionActionCreators = require('../actions/CollectionActionCreators');


var StreamTweet = React.createClass({
    getInitialState: function () {
        //console.log("StreamTweet: 1. getInitialState()");
        return {
            numberOfCharsIsIncreasing: null,
            headerText: null
        }
    },
    componentWillMount: function () {
        //console.log("StreamTweet: 2. componentWillMount()");

        this.setState({
            numberOfCharsIsIncreasing: true,
            headerText: "Latest public photo from Twitter"
        });

        window.snapterest = {
            noOfReceivedTweets: 1,
            noOfDisplayedTweets: 1
        }

    },
    componentDidMount: function () {
        //console.log("StreamTweet: 3.1. componentDidMount()");

        var componentDOMRepresentation = ReactDOM.findDOMNode( this);
        window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
        window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
    },
    componentWillReceiveProps: function(nextProps) {
        //console.log("StreamTweet: 4. componentWillReceiveProps()");

        var currentTweetLength = this.props.tweet.text.length;
        var nextTweetLength = nextProps.tweet.text.length;
        var isNoOfCharsIncreasing = nextTweetLength > currentTweetLength;
        var headerText;

        this.setState({
            numberOfCharsIsIncreasing: isNoOfCharsIncreasing
        });

        if(isNoOfCharsIncreasing) {
            headerText = 'Number of Chars is increasing';
        } else {
            headerText = 'Latest public photo from Twitter';
        }

        this.setState( {
            headerText: headerText
        });

        window.snapterest.noOfReceivedTweets++;
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        //console.log("StreamTweet: 5. shouldComponentUpdate()");
        return (nextProps.tweet.text.length > 1);
    },

    componentWillUpdate: function(nextProps, nextState) {
        //console.log("StreamTweet: 6. componentWillUpdate()");

    },

    componentDidUpdate: function(precProps, prevState) {
        //console.log("StreamTweet: 7. componentDidUpdate()");
        window.snapterest.noOfDisplayedTweets++;
    },

    componentWillUnmount: function() {
        //console.log("StreamTweet: 8. componentWillUnmount()");
        delete window.snapterest;
    },
    addTweetToCollection: function(tweet) {
        CollectionActionCreators.addTweetToCollection(tweet)
    },
    render: function () {
        //console.log("StreamTweet: 3. render");
        return (
            <section>
                <Header text={this.state.headerText}/>
                <Tweet
                    tweet={this.props.tweet}
                    onImageClick={this.addTweetToCollection}/>
            </section>
        )
    }
});

module.exports = StreamTweet;



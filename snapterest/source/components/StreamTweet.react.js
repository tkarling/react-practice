import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.react';
import Tweet from './Tweet.react';
import CollectionActionCreators from '../actions/CollectionActionCreators';


class StreamTweet extends React.Component {
    constructor() {
        super();
        this.state = {
            numberOfCharsIsIncreasing: null,
            headerText: null
        };
    }

    componentWillMount () {
        //console.log("StreamTweet: 2. componentWillMount()");

        this.setState({
            numberOfCharsIsIncreasing: true,
            headerText: "Latest public photo from Twitter"
        });

        window.snapterest = {
            noOfReceivedTweets: 1,
            noOfDisplayedTweets: 1
        }

    }
    componentDidMount() {
        //console.log("StreamTweet: 3.1. componentDidMount()");

        var componentDOMRepresentation = ReactDOM.findDOMNode( this);
        window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
        window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
    }

    componentWillReceiveProps(nextProps) {
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
    }

    shouldComponentUpdate(nextProps, nextState) {
        //console.log("StreamTweet: 5. shouldComponentUpdate()");
        return (nextProps.tweet.text.length > 1);
    }

    componentWillUpdate(nextProps, nextState) {
        //console.log("StreamTweet: 6. componentWillUpdate()");

    }
    componentDidUpdate(precProps, prevState) {
        //console.log("StreamTweet: 7. componentDidUpdate()");
        window.snapterest.noOfDisplayedTweets++;
    }

    componentWillUnmount() {
        //console.log("StreamTweet: 8. componentWillUnmount()");
        delete window.snapterest;
    }
    addTweetToCollection(tweet) {
        CollectionActionCreators.addTweetToCollection(tweet)
    }

    render () {
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
}

export default StreamTweet;



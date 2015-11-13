import React from 'react';
import StreamTweet from './StreamTweet.react';
import Header from './Header.react';
import TweetStore from '../stores/TweetStore';

class Stream extends React.Component {
    constructor() {
        super();
        this.state = {
            tweet: TweetStore.getTweet()
        };
    }
    onTweetChange() {
        this.setState({
            tweet: TweetStore.getTweet()
        });
    }
    componentDidMount() {
        TweetStore.addChangeListener(this.onTweetChange.bind(this));
    }
    componentWillUnMount() {
        TweetStore.removeChangeListener(this.onTweetChange.bind(this));
    }
    render() {
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
}

export default Stream;
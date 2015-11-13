import React from 'react';

var tweetStyle = {
    positon: 'relative',
    display: 'inline-bock',
    width: '300px',
    height: '400px',
    margin: '10px'
};

var imageStyle = {
    maxHeight: '400px',
    boxShadow: '0px 1px 1px 0px #aaa',
    border: '1px solid #fff'
};

class Tweet extends React.Component {
    handleImageClick() {
        var tweet = this.props.tweet;
        var onImageClick = this.props.onImageClick;

        if(onImageClick) {
            onImageClick(tweet);
        }
    }

    render() {
        var tweet = this.props.tweet;
        var tweetMediaUrl = tweet.media[0].url;

        return (
            <div style={tweetStyle}>
                <img src={tweetMediaUrl} onClick={this.handleImageClick.bind(this)} style={imageStyle} />
            </div>
        )
    }
}
Tweet.propTypes = {
    tweet: function(properties, propertyName, componentName) {
        var tweet = properties[propertyName];

        if(!tweet || !tweet.media) {
            console.log('Tweet must be set & have an image', tweet);
            return new Error('Tweet must be set & have an image');
        }
    },
    onImageClick: React.PropTypes.func
};

export default Tweet;



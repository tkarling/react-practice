var React = require('react');

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

var Tweet = React.createClass({
    propTypes: {
        tweet: function(properties, propertyName, componentName) {
            var tweet = properties[propertyName];

            if(!tweet || !tweet.media) {
                console.log('Tweet must be set & have an image', tweet);
                return new Error('Tweet must be set & have an image');
            }
        },
        onImageClick: React.PropTypes.func
    },
    handleImageClick: function() {
        var tweet = this.props.tweet;
        var onImageClick = this.props.onImageClick;

        if(onImageClick) {
            onImageClick(tweet);
        }
    },
    render: function() {
        var tweet = this.props.tweet;
        var tweetMediaUrl = tweet.media[0].url;

        return (
            <div style={tweetStyle}>
                <img src={tweetMediaUrl} onClick={this.handleImageClick} style={imageStyle} />
            </div>
        )
    }
});

module.exports = Tweet;



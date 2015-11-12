var SnapkiteStreamClient = require('snapkite-stream-client');
var TweetActionCreators = require('../actions/TweetActionCreators');

function initializeStreamOfTweets() {
    var tweet = {id:'1', text:'joopa joo', media:[{url: 'http://45.55.16.198:3039/api/pocketScrum/thumbnail?id=55ed8ec6516b4266230081a6'}]};
    //console.log("Stream: componentDidMount", tweet);
    TweetActionCreators.receiveTweet(tweet);
    //SnapkiteStreamClient.initialiseStream(TweetActionCreators.receiveTweet);
}

function closeStreamOfTweets() {
    SnapkiteStreamClient.destroyStream();
}

module.exports = {
    initializeStreamOfTweets: initializeStreamOfTweets,
    closeStreamOfTweets: closeStreamOfTweets
}
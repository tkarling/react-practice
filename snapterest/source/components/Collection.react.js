var React = require('react');
var ReactDOMServer = require('react-dom/server');
var CollectionControls = require('./CollectionControls.react');
var TweetList = require('./TweetList.react');
var Header = require('./Header.react');

var Collection = React.createClass({
    createHtmlMarkupStringOfTweetList: function () {
        var htmlString = ReactDOMServer.renderToStaticMarkup(
            <TweetList tweets={this.props.tweets}/>
        );
        var htmlMarkup = {
            html: htmlString
        };
        return JSON.stringify(htmlMarkup);
    },

    getListOfTweetIds: function () {
        return Object.keys(this.props.tweets);
    },

    getNoOfTweetsInCollecton: function () {
        return this.getListOfTweetIds().length;
    },

    render: function () {
        var noOfTweetsInCollection = this.getNoOfTweetsInCollecton();
        if(noOfTweetsInCollection > 0) {
            var tweets = this.props.tweets;
            var htmlMarkup = this.createHtmlMarkupStringOfTweetList();
            var removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection;
            var handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;

            return(
                <div>
                    <CollectionControls
                        noOfTweetsInCollection={noOfTweetsInCollection}
                        htmlMarkup = {htmlMarkup}
                        onRemoveAllTweetsFromCollection = {removeAllTweetsFromCollection} />
                    <TweetList
                        tweets={tweets}
                        onRemoveTweetFromCollection = {handleRemoveTweetFromCollection} />
                </div>
            );

        }
        return <Header text="Your collection is empty" />;
    }
});

module.exports = Collection;



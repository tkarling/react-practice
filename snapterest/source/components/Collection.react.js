var React = require('react');
var ReactDOMServer = require('react-dom/server');
var CollectionControls = require('./CollectionControls.react');
var TweetList = require('./TweetList.react');
var Header = require('./Header.react');
var CollectionUtils = require('../utils/CollectionUtils');
var CollectionStore = require('../stores/CollectionStore');

var Collection = React.createClass({
    getInitialState: function() {
      return {
          collectionTweets: CollectionStore.getCollectionTweets()
      }
    },

    onCollectionChange: function() {
        this.setState({
            collectionTweets: CollectionStore.getCollectionTweets()
        })
        console.log("Collection: onCollectionChange", this.state.collectionTweets);
    },

    componentDidMount: function() {
      CollectionStore.addChangeListener(this.onCollectionChange);
    },

    componentWillUnmount: function() {
      CollectionStore.removeChangeListener(this.onCollectionChange);
    },

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
        return Object.keys(this.state.collectionTweets);
    },

    getNoOfTweetsInCollecton: function (collectionTweets) {
        return this.getListOfTweetIds().length;
    },

    render: function () {
        //var collectionTweets = this.state.collectionTweets;
        //var noOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweets);
        var collectionTweets = this.state.collectionTweets;
        var noOfTweetsInCollection = this.getNoOfTweetsInCollecton(this.getListOfTweetIds());
        console.log("Collection: render", noOfTweetsInCollection, collectionTweets);
        if(noOfTweetsInCollection > 0) {
            //var htmlMarkup = this.createHtmlMarkupStringOfTweetList();
            var htmlMarkup = "";
            //console.log("Collection: Moikka", noOfTweetsInCollection, collectionTweets);

            return(
                <div>
                    <CollectionControls
                        noOfTweetsInCollection={noOfTweetsInCollection}
                        htmlMarkup = {htmlMarkup} />
                    <TweetList
                        tweets={collectionTweets} />
                </div>
            );

        }
        return <Header text="Your collection is empty" />;
    }
});

module.exports = Collection;



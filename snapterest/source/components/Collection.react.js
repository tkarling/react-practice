import React from 'react';
import ReactDOMServer from 'react-dom/server';
import CollectionControls from './CollectionControls.react';
import TweetList from './TweetList.react';
import Header from './Header.react';
import CollectionUtils from '../utils/CollectionUtils';
import CollectionStore from '../stores/CollectionStore';

class Collection extends React.Component {
    constructor() {
        super();
        this.state = {
            collectionTweets: CollectionStore.getCollectionTweets()
        }
    }

    onCollectionChange() {
        this.setState({
            collectionTweets: CollectionStore.getCollectionTweets()
        })
    }

    componentDidMount() {
        CollectionStore.addChangeListener(this.onCollectionChange.bind(this));
    }

    componentWillUnmount() {
        CollectionStore.removeChangeListener(this.onCollectionChange.bind(this));
    }

    createHtmlMarkupStringOfTweetList() {
        var htmlString = ReactDOMServer.renderToStaticMarkup(
            <TweetList tweets={this.state.collectionTweets}/>
        );
        var htmlMarkup = {
            html: htmlString
        };
        return JSON.stringify(htmlMarkup);
    }

    render() {
        var collectionTweets = this.state.collectionTweets;
        var noOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweets);
        if (noOfTweetsInCollection > 0) {
            var htmlMarkup = this.createHtmlMarkupStringOfTweetList();

            return (
                <div>
                    <CollectionControls
                        noOfTweetsInCollection={noOfTweetsInCollection}
                        htmlMarkup={htmlMarkup}/>
                    <TweetList
                        tweets={collectionTweets}/>
                </div>
            );

        }
        return <Header text="Your collection is empty"/>;
    }
}

export default Collection;



import React from 'react';
import Header from './Header.react';
import Button from './Button.react';
import CollectionRenameForm from './CollectionRenameForm.react';
import CollectionExportForm from './CollectionExportForm.react';
import CollectionActionCreators from '../actions/CollectionActionCreators';
import CollectionStore from '../stores/CollectionStore';

class CollectionControls extends React.Component {
    constructor() {
        super();
        this.state = {
            isEditingName: false
        };
    }
    getHeaderText() {
        var noOfTweetsInCollection = this.props.noOfTweetsInCollection;
        var text = noOfTweetsInCollection;
        var name = CollectionStore.getCollectionName();

        if (noOfTweetsInCollection === 1) {
            text = text + ' tweet in your';
        } else {
            text = text + ' tweets in your';
        }

        return (
            <span>
                {text} <strong>{name}</strong> collection
            </span>
        )

    }
    toggleEditCollectionName() {
      this.setState({
         isEditingName: ! this.state.isEditingName
      });
    }

    removeAllTweetsFromCollection() {
        CollectionActionCreators.removeAllTweetsFromCollection();
    }

    render() {

        if (this.state.isEditingName) {
            return (
                <CollectionRenameForm
                    onCancelCollectionNameChange={this.toggleEditCollectionName.bind(this)}/>
            );
        }

        return (
            <div>
                <Header text={this.getHeaderText()}/>

                <Button
                    label="Rename collection"
                    handleClick={this.toggleEditCollectionName.bind(this)}/>

                <Button
                    label="Empty collection"
                    handleClick={this.removeAllTweetsFromCollection.bind(this)}/>

                <CollectionExportForm htmlMarkup={this.props.htmlMarkup}/>

            </div>
        )
    }

};

export default CollectionControls;
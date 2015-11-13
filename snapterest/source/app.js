import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application.react';
import WebAPIUtils from './utils/WebAPIUtils';


if (typeof window !== 'undefined') {
    window.React = React;
}

WebAPIUtils.initializeStreamOfTweets();

ReactDOM.render(
    <Application />,
    document.getElementById('react-application')
)


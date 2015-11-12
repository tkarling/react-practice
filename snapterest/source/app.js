var React = require('react');
var ReactDOM = require('react-dom');
var Application = require('./components/Application.react');
var WebAPIUtils = require('./utils/WebAPIUtils');


if (typeof window !== 'undefined') {
    window.React = React;
}

WebAPIUtils.initializeStreamOfTweets();

ReactDOM.render(
    <Application />,
    document.getElementById('react-application')
)


var React = require('react');
var ReactDOM = require('react-dom');
var Application = require('./components/Application.react');

if (typeof window !== 'undefined') {
    window.React = React;
}

//var listOfItems = <ul className ="list-of-items">
//    <li className ="item-1">Item 1</li>
//    <li className ="item-2">Item 2</li>
//    <li className ="item-3">Item 3</li>
//</ul>;

ReactDOM.render(
    //listOfItems,
    <Application />,
    document.getElementById('react-application')
)


jest.dontMock('../Header.react');

describe('Header', function () {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var TestUtils = require('react-addons-test-utils');
    var Header = require('../Header.react');

    it('renders default header', function () {
        var expectedHeader = "Default header";
        var header = TestUtils.renderIntoDocument(
            <Header />
        );
        var actualHeader = ReactDOM.findDOMNode(header).textContent;

        expect(actualHeader).toBe(expectedHeader);
    });

    it('renders provided header', function () {
        var expectedHeader = "Testing...";
        var header = TestUtils.renderIntoDocument(
            <Header text={expectedHeader}/>
        );
        var actualHeader = ReactDOM.findDOMNode(header).textContent;

        expect(actualHeader).toBe(expectedHeader);
    });

});
jest.dontMock('../Button.react');

describe('Button', function () {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var TestUtils = require('react-addons-test-utils');
    var Button = require('../Button.react');
    var handleClick;

    beforeEach(function() {
        handleClick = jest.genMockFunction();
    });

    it('renders button name', function () {
        var expectedLabel = "joo";
        var button = TestUtils.renderIntoDocument(
            <Button handleClick={handleClick} label={expectedLabel}/>
        );
        var actualLabel = ReactDOM.findDOMNode(button).textContent;

        expect(actualLabel).toBe(expectedLabel);
    });

    it('calls handler on click', function () {
        var button = TestUtils.renderIntoDocument(
            <Button handleClick={handleClick} />
        );
        var buttonInstance = TestUtils.findRenderedDOMComponentWithTag(button, 'button');

        TestUtils.Simulate.click(buttonInstance);

        expect(handleClick).toBeCalled();
        var noOfCallsOfMockFunction = handleClick.mock.calls.length;
        expect(noOfCallsOfMockFunction).toBe(1);
    });


});
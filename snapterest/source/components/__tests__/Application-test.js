jest.dontMock('../Application.react');
jest.dontMock('object-assign');

describe('Application', function () {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var TestUtils = require('react-addons-test-utils');
    var Application = require('../Application.react');
    var application;

    describe('from empty', function() {
        beforeEach(function() {
            application = TestUtils.renderIntoDocument(
                <Application />
            );
        });

        it('gets initial state', function () {
            expect(application.state).toEqual(null);
            expect(application.props).toEqual({});
        });
    })


});
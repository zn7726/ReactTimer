var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    if('should render Pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus={"started"}/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseBtn = $el.find('button:contains(Pause)');

      expect($pauseBtn.length).toBe(1);
    });

    if('should render Start when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus={"paused"}/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseBtn = $el.find('button:contains(Start)');

      expect($pauseBtn.length).toBe(1);
    });
  });
});

'use strict';

const easy = require('easy'),
      { React } = easy;

Object.defineProperty(window, 'React', {
  get: function() {
    return React;
  }
});

module.exports = React;

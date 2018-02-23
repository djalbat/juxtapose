'use strict';

const easy = require('easy');

const { React } = easy;

Object.defineProperty(window, 'React', {
  get: function() {
    return React;
  }
});

'use strict';

const easyui = require('easyui'),
      { React } = easyui;

Object.defineProperty(window, 'React', {
  get: function() {
    return React;
  }
});

module.exports = React;

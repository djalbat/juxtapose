'use strict';

require('./easyui-jsx');

var easyui = require('easyui'),
    Body = easyui.Body;


var body = new Body();

body.append(React.createElement(
  'div',
  { className: 'example' },
  'An easy example.'
));
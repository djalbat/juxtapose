'use strict';

require('../../index.js'); /// easyui-jsx

var Introduction = function Introduction() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'code',
      { className: 'floatRight' },
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Body } = easyui;\n\nconst body = new Body();\n\nbody.append(\n\n  <div className="example">\n    An easy example.\n  </div>\n\n);'
    ),
    React.createElement(
      'p',
      null,
      'These pages showcase the use of ',
      React.createElement(
        'a',
        { href: 'https://facebook.github.io/react/docs/jsx-in-depth.html' },
        'JSX'
      ),
      ' with ',
      React.createElement(
        'a',
        { href: 'https://github.com/djalbat/EasyUI' },
        'EasyUI'
      ),
      '. It is easy to combine these two technologies in practice, as the example shows.'
    ),
    React.createElement(
      'p',
      null,
      'It also turned out not to be very difficult to implement this combination. JSX transpiles into a call to ',
      React.createElement(
        'code',
        { className: 'inline' },
        'React.createClass(...)'
      ),
      ' and so all that needed to be done was to ',
      React.createElement(
        'a',
        { href: 'https://github.com/djalbat/EasyUI-JSX/blob/master/es6/react.js' },
        'implement that'
      ),
      ', and then to ',
      React.createElement(
        'a',
        { href: 'https://github.com/djalbat/EasyUI/blob/master/es6/mixin/jsx.js' },
        'augment'
      ),
      ' EasyUI\'s base ',
      React.createElement(
        'code',
        { className: 'inline' },
        'Element'
      ),
      ' class in order to enable elements to apply the properties they were passed.'
    ),
    React.createElement(
      'p',
      { className: 'clearBoth' },
      React.createElement(
        'a',
        { href: '#jsxIsGreat', className: 'floatRight' },
        'Next: JSX is great'
      )
    )
  );
};

module.exports = Introduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2ludHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiSW50cm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVEsZ0JBQVIsRSxDQUEyQjs7QUFFM0IsSUFBTUMsZUFBZSxTQUFmQSxZQUFlLEdBQU07QUFDekIsU0FFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBTSxXQUFVLFlBQWhCO0FBQUE7QUFBQSxLQURGO0FBZUU7QUFBQTtBQUFBO0FBQUE7QUFDa0M7QUFBQTtBQUFBLFVBQUcsTUFBSyx5REFBUjtBQUFBO0FBQUEsT0FEbEM7QUFBQTtBQUNpSDtBQUFBO0FBQUEsVUFBRyxNQUFLLG1DQUFSO0FBQUE7QUFBQSxPQURqSDtBQUFBO0FBQUEsS0FmRjtBQW1CRTtBQUFBO0FBQUE7QUFBQTtBQUMyRztBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUQzRztBQUFBO0FBRXVDO0FBQUE7QUFBQSxVQUFHLE1BQUssZ0VBQVI7QUFBQTtBQUFBLE9BRnZDO0FBQUE7QUFHYztBQUFBO0FBQUEsVUFBRyxNQUFLLGdFQUFSO0FBQUE7QUFBQSxPQUhkO0FBQUE7QUFHaUg7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FIakg7QUFBQTtBQUFBLEtBbkJGO0FBd0JFO0FBQUE7QUFBQSxRQUFHLFdBQVUsV0FBYjtBQUNFO0FBQUE7QUFBQSxVQUFHLE1BQUssYUFBUixFQUFzQixXQUFVLFlBQWhDO0FBQUE7QUFBQTtBQURGO0FBeEJGLEdBRkY7QUFnQ0QsQ0FqQ0Q7O0FBbUNBQyxPQUFPQyxPQUFQLEdBQWlCRixZQUFqQiIsImZpbGUiOiJpbnRyb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL2luZGV4LmpzJyk7IC8vLyBlYXN5dWktanN4XG5cbmNvbnN0IEludHJvZHVjdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGNvZGUgY2xhc3NOYW1lPVwiZmxvYXRSaWdodFwiPntgcmVxdWlyZSgnZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICAgIHsgQm9keSB9ID0gZWFzeXVpO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxuYm9keS5hcHBlbmQoXG5cbiAgPGRpdiBjbGFzc05hbWU9XCJleGFtcGxlXCI+XG4gICAgQW4gZWFzeSBleGFtcGxlLlxuICA8L2Rpdj5cblxuKTtgfTwvY29kZT5cbiAgICAgIDxwPlxuICAgICAgICBUaGVzZSBwYWdlcyBzaG93Y2FzZSB0aGUgdXNlIG9mIDxhIGhyZWY9XCJodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL2pzeC1pbi1kZXB0aC5odG1sXCI+SlNYPC9hPiB3aXRoIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGphbGJhdC9FYXN5VUlcIj5FYXN5VUk8L2E+LlxuICAgICAgICBJdCBpcyBlYXN5IHRvIGNvbWJpbmUgdGhlc2UgdHdvIHRlY2hub2xvZ2llcyBpbiBwcmFjdGljZSwgYXMgdGhlIGV4YW1wbGUgc2hvd3MuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgSXQgYWxzbyB0dXJuZWQgb3V0IG5vdCB0byBiZSB2ZXJ5IGRpZmZpY3VsdCB0byBpbXBsZW1lbnQgdGhpcyBjb21iaW5hdGlvbi4gSlNYIHRyYW5zcGlsZXMgaW50byBhIGNhbGwgdG8gPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+UmVhY3QuY3JlYXRlQ2xhc3MoLi4uKTwvY29kZT4gYW5kXG4gICAgICAgIHNvIGFsbCB0aGF0IG5lZWRlZCB0byBiZSBkb25lIHdhcyB0byA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RqYWxiYXQvRWFzeVVJLUpTWC9ibG9iL21hc3Rlci9lczYvcmVhY3QuanNcIj5pbXBsZW1lbnQgdGhhdDwvYT4sXG4gICAgICAgIGFuZCB0aGVuIHRvIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGphbGJhdC9FYXN5VUkvYmxvYi9tYXN0ZXIvZXM2L21peGluL2pzeC5qc1wiPmF1Z21lbnQ8L2E+IEVhc3lVSSdzIGJhc2UgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+RWxlbWVudDwvY29kZT4gY2xhc3MgaW4gb3JkZXIgdG8gZW5hYmxlIGVsZW1lbnRzIHRvIGFwcGx5IHRoZSBwcm9wZXJ0aWVzIHRoZXkgd2VyZSBwYXNzZWQuXG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJjbGVhckJvdGhcIj5cbiAgICAgICAgPGEgaHJlZj1cIiNqc3hJc0dyZWF0XCIgY2xhc3NOYW1lPVwiZmxvYXRSaWdodFwiPk5leHQ6IEpTWCBpcyBncmVhdDwvYT5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgKTsgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRyb2R1Y3Rpb247XG4iXX0=
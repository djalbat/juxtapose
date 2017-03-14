'use strict';

require('../../index.js'); /// easyui-jsx

var Introduction = function Introduction() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'h2',
      null,
      'Introduction'
    ),
    React.createElement(
      'code',
      { className: 'block' },
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Body } = easyui;\n\nconst body = new Body();\n\nbody.append(\n\n  <div className="example">\n    An easy example.\n  </div>\n\n);'
    ),
    React.createElement(
      'p',
      null,
      'These pages give some examples of the use of ',
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
      '. It is easy to combine these two technologies in practice, as the first example shows.'
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
      '. So all that needed to be done was to ',
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
      'nav',
      null,
      React.createElement(
        'span',
        { className: 'next' },
        React.createElement(
          'a',
          { href: '#jsxIsGreat' },
          'Next: JSX is great'
        )
      ),
      React.createElement(
        'span',
        null,
        React.createElement(
          'a',
          { href: '#contents' },
          'Contents'
        )
      )
    )
  );
};

module.exports = Introduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2ludHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiSW50cm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVEsZ0JBQVIsRSxDQUEyQjs7QUFFM0IsSUFBTUMsZUFBZSxTQUFmQSxZQUFlLEdBQU07QUFDekIsU0FFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBTSxXQUFVLE9BQWhCO0FBQUE7QUFBQSxLQUZGO0FBZ0JFO0FBQUE7QUFBQTtBQUFBO0FBQytDO0FBQUE7QUFBQSxVQUFHLE1BQUsseURBQVI7QUFBQTtBQUFBLE9BRC9DO0FBQUE7QUFDOEg7QUFBQTtBQUFBLFVBQUcsTUFBSyxtQ0FBUjtBQUFBO0FBQUEsT0FEOUg7QUFBQTtBQUFBLEtBaEJGO0FBb0JFO0FBQUE7QUFBQTtBQUFBO0FBQzJHO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRDNHO0FBQUE7QUFFdUM7QUFBQTtBQUFBLFVBQUcsTUFBSyxnRUFBUjtBQUFBO0FBQUEsT0FGdkM7QUFBQTtBQUdjO0FBQUE7QUFBQSxVQUFHLE1BQUssZ0VBQVI7QUFBQTtBQUFBLE9BSGQ7QUFBQTtBQUdpSDtBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUhqSDtBQUFBO0FBQUEsS0FwQkY7QUF5QkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQU0sV0FBVSxNQUFoQjtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssYUFBUjtBQUFBO0FBQUE7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxXQUFSO0FBQUE7QUFBQTtBQURGO0FBSkY7QUF6QkYsR0FGRjtBQXNDRCxDQXZDRDs7QUF5Q0FDLE9BQU9DLE9BQVAsR0FBaUJGLFlBQWpCIiwiZmlsZSI6ImludHJvZHVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vaW5kZXguanMnKTsgLy8vIGVhc3l1aS1qc3hcblxuY29uc3QgSW50cm9kdWN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+SW50cm9kdWN0aW9uPC9oMj5cbiAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImJsb2NrXCI+e2ByZXF1aXJlKCdlYXN5dWktanN4Jyk7XG5cbmNvbnN0IGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgICAgeyBCb2R5IH0gPSBlYXN5dWk7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpO1xuXG5ib2R5LmFwcGVuZChcblxuICA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVcIj5cbiAgICBBbiBlYXN5IGV4YW1wbGUuXG4gIDwvZGl2PlxuXG4pO2B9PC9jb2RlPlxuICAgICAgPHA+XG4gICAgICAgIFRoZXNlIHBhZ2VzIGdpdmUgc29tZSBleGFtcGxlcyBvZiB0aGUgdXNlIG9mIDxhIGhyZWY9XCJodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL2pzeC1pbi1kZXB0aC5odG1sXCI+SlNYPC9hPiB3aXRoIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGphbGJhdC9FYXN5VUlcIj5FYXN5VUk8L2E+LlxuICAgICAgICBJdCBpcyBlYXN5IHRvIGNvbWJpbmUgdGhlc2UgdHdvIHRlY2hub2xvZ2llcyBpbiBwcmFjdGljZSwgYXMgdGhlIGZpcnN0IGV4YW1wbGUgc2hvd3MuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgSXQgYWxzbyB0dXJuZWQgb3V0IG5vdCB0byBiZSB2ZXJ5IGRpZmZpY3VsdCB0byBpbXBsZW1lbnQgdGhpcyBjb21iaW5hdGlvbi4gSlNYIHRyYW5zcGlsZXMgaW50byBhIGNhbGwgdG8gPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+UmVhY3QuY3JlYXRlQ2xhc3MoLi4uKTwvY29kZT4uXG4gICAgICAgIFNvIGFsbCB0aGF0IG5lZWRlZCB0byBiZSBkb25lIHdhcyB0byA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RqYWxiYXQvRWFzeVVJLUpTWC9ibG9iL21hc3Rlci9lczYvcmVhY3QuanNcIj5pbXBsZW1lbnQgdGhhdDwvYT4sXG4gICAgICAgIGFuZCB0aGVuIHRvIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGphbGJhdC9FYXN5VUkvYmxvYi9tYXN0ZXIvZXM2L21peGluL2pzeC5qc1wiPmF1Z21lbnQ8L2E+IEVhc3lVSSdzIGJhc2UgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+RWxlbWVudDwvY29kZT4gY2xhc3MgaW4gb3JkZXIgdG8gZW5hYmxlIGVsZW1lbnRzIHRvIGFwcGx5IHRoZSBwcm9wZXJ0aWVzIHRoZXkgd2VyZSBwYXNzZWQuXG4gICAgICA8L3A+XG4gICAgICA8bmF2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXh0XCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNqc3hJc0dyZWF0XCI+TmV4dDogSlNYIGlzIGdyZWF0PC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxhIGhyZWY9XCIjY29udGVudHNcIj5Db250ZW50czwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9uYXY+XG4gICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICk7ICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50cm9kdWN0aW9uO1xuIl19
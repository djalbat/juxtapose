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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2ludHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiSW50cm9kdWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVEsZ0JBQVIsRSxDQUEyQjs7QUFFM0IsSUFBTUMsZUFBZSxTQUFmQSxZQUFlLEdBQU07QUFDekIsU0FFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBTSxXQUFVLE9BQWhCO0FBQUE7QUFBQSxLQUZGO0FBZ0JFO0FBQUE7QUFBQTtBQUFBO0FBQ2tDO0FBQUE7QUFBQSxVQUFHLE1BQUsseURBQVI7QUFBQTtBQUFBLE9BRGxDO0FBQUE7QUFDaUg7QUFBQTtBQUFBLFVBQUcsTUFBSyxtQ0FBUjtBQUFBO0FBQUEsT0FEakg7QUFBQTtBQUFBLEtBaEJGO0FBb0JFO0FBQUE7QUFBQTtBQUFBO0FBQzJHO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRDNHO0FBQUE7QUFFdUM7QUFBQTtBQUFBLFVBQUcsTUFBSyxnRUFBUjtBQUFBO0FBQUEsT0FGdkM7QUFBQTtBQUdjO0FBQUE7QUFBQSxVQUFHLE1BQUssZ0VBQVI7QUFBQTtBQUFBLE9BSGQ7QUFBQTtBQUdpSDtBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUhqSDtBQUFBO0FBQUEsS0FwQkY7QUF5QkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQU0sV0FBVSxNQUFoQjtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssYUFBUjtBQUFBO0FBQUE7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxXQUFSO0FBQUE7QUFBQTtBQURGO0FBSkY7QUF6QkYsR0FGRjtBQXNDRCxDQXZDRDs7QUF5Q0FDLE9BQU9DLE9BQVAsR0FBaUJGLFlBQWpCIiwiZmlsZSI6ImludHJvZHVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vaW5kZXguanMnKTsgLy8vIGVhc3l1aS1qc3hcblxuY29uc3QgSW50cm9kdWN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+SW50cm9kdWN0aW9uPC9oMj5cbiAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImJsb2NrXCI+e2ByZXF1aXJlKCdlYXN5dWktanN4Jyk7XG5cbmNvbnN0IGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgICAgeyBCb2R5IH0gPSBlYXN5dWk7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpO1xuXG5ib2R5LmFwcGVuZChcblxuICA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVcIj5cbiAgICBBbiBlYXN5IGV4YW1wbGUuXG4gIDwvZGl2PlxuXG4pO2B9PC9jb2RlPlxuICAgICAgPHA+XG4gICAgICAgIFRoZXNlIHBhZ2VzIHNob3djYXNlIHRoZSB1c2Ugb2YgPGEgaHJlZj1cImh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvanN4LWluLWRlcHRoLmh0bWxcIj5KU1g8L2E+IHdpdGggPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kamFsYmF0L0Vhc3lVSVwiPkVhc3lVSTwvYT4uXG4gICAgICAgIEl0IGlzIGVhc3kgdG8gY29tYmluZSB0aGVzZSB0d28gdGVjaG5vbG9naWVzIGluIHByYWN0aWNlLCBhcyB0aGUgZXhhbXBsZSBzaG93cy5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBJdCBhbHNvIHR1cm5lZCBvdXQgbm90IHRvIGJlIHZlcnkgZGlmZmljdWx0IHRvIGltcGxlbWVudCB0aGlzIGNvbWJpbmF0aW9uLiBKU1ggdHJhbnNwaWxlcyBpbnRvIGEgY2FsbCB0byA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5SZWFjdC5jcmVhdGVDbGFzcyguLi4pPC9jb2RlPi5cbiAgICAgICAgU28gYWxsIHRoYXQgbmVlZGVkIHRvIGJlIGRvbmUgd2FzIHRvIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGphbGJhdC9FYXN5VUktSlNYL2Jsb2IvbWFzdGVyL2VzNi9yZWFjdC5qc1wiPmltcGxlbWVudCB0aGF0PC9hPixcbiAgICAgICAgYW5kIHRoZW4gdG8gPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kamFsYmF0L0Vhc3lVSS9ibG9iL21hc3Rlci9lczYvbWl4aW4vanN4LmpzXCI+YXVnbWVudDwvYT4gRWFzeVVJJ3MgYmFzZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5FbGVtZW50PC9jb2RlPiBjbGFzcyBpbiBvcmRlciB0byBlbmFibGUgZWxlbWVudHMgdG8gYXBwbHkgdGhlIHByb3BlcnRpZXMgdGhleSB3ZXJlIHBhc3NlZC5cbiAgICAgIDwvcD5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5leHRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI2pzeElzR3JlYXRcIj5OZXh0OiBKU1ggaXMgZ3JlYXQ8L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPGEgaHJlZj1cIiNjb250ZW50c1wiPkNvbnRlbnRzPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L25hdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgKTsgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRyb2R1Y3Rpb247XG4iXX0=
'use strict';

require('../../index.js'); /// easyui-jsx

var TheRenderMethod = function TheRenderMethod() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'h2',
      null,
      'The ',
      React.createElement(
        'code',
        { className: 'inline' },
        'render()'
      ),
      ' method'
    ),
    React.createElement(
      'code',
      { className: 'block' },
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Body, Button } = easyui;\n\nconst body = new Body(),\n      button = <Button>Click me...</Button>;\n\nbutton.onClick(function() {\n  alert(\'Clicked!\');\n});\n\nbody.append(button);'
    ),
    React.createElement(
      'p',
      null,
      'Creating EasyUI elements from JSX involves nothing more than employing the relevant class. And since the JSX results in an instance of an EasyUI class, in this case the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'Button'
      ),
      ' class, its methods can be called against it directly.'
    ),
    React.createElement(
      'nav',
      null,
      React.createElement(
        'span',
        { className: 'floatRight' },
        React.createElement(
          'a',
          { href: '#' },
          'Next: '
        )
      ),
      React.createElement(
        'span',
        { className: 'floatLeft' },
        React.createElement(
          'a',
          { href: '#easyUIElements' },
          'Previous: EasyUI elements'
        )
      )
    )
  );
};

module.exports = TheRenderMethod;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3RoZVJlbmRlck1ldGhvZC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiVGhlUmVuZGVyTWV0aG9kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVEsZ0JBQVIsRSxDQUEyQjs7QUFFM0IsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBUTtBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUFSO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQU0sV0FBVSxPQUFoQjtBQUFBO0FBQUEsS0FGRjtBQWVFO0FBQUE7QUFBQTtBQUFBO0FBRWdGO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRmhGO0FBQUE7QUFBQSxLQWZGO0FBbUJFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFNLFdBQVUsWUFBaEI7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBREYsT0FERjtBQUlFO0FBQUE7QUFBQSxVQUFNLFdBQVUsV0FBaEI7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGlCQUFSO0FBQUE7QUFBQTtBQURGO0FBSkY7QUFuQkYsR0FGRjtBQWdDRCxDQWpDRDs7QUFtQ0FDLE9BQU9DLE9BQVAsR0FBaUJGLGVBQWpCIiwiZmlsZSI6InRoZVJlbmRlck1ldGhvZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vaW5kZXguanMnKTsgLy8vIGVhc3l1aS1qc3hcblxuY29uc3QgVGhlUmVuZGVyTWV0aG9kID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+VGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPnJlbmRlcigpPC9jb2RlPiBtZXRob2Q8L2gyPlxuICAgICAgPGNvZGUgY2xhc3NOYW1lPVwiYmxvY2tcIj57YHJlcXVpcmUoJ2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IEJvZHksIEJ1dHRvbiB9ID0gZWFzeXVpO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgIGJ1dHRvbiA9IDxCdXR0b24+Q2xpY2sgbWUuLi48L0J1dHRvbj47XG5cbmJ1dHRvbi5vbkNsaWNrKGZ1bmN0aW9uKCkge1xuICBhbGVydCgnQ2xpY2tlZCEnKTtcbn0pO1xuXG5ib2R5LmFwcGVuZChidXR0b24pO2B9PC9jb2RlPlxuICAgICAgPHA+XG4gICAgICAgIENyZWF0aW5nIEVhc3lVSSBlbGVtZW50cyBmcm9tIEpTWCBpbnZvbHZlcyBub3RoaW5nIG1vcmUgdGhhbiBlbXBsb3lpbmcgdGhlIHJlbGV2YW50IGNsYXNzLlxuICAgICAgICBBbmQgc2luY2UgdGhlIEpTWCByZXN1bHRzIGluIGFuIGluc3RhbmNlIG9mIGFuIEVhc3lVSSBjbGFzcywgaW4gdGhpcyBjYXNlIHRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5CdXR0b248L2NvZGU+IGNsYXNzLCBpdHMgbWV0aG9kcyBjYW4gYmUgY2FsbGVkIGFnYWluc3QgaXQgZGlyZWN0bHkuXG4gICAgICA8L3A+XG4gICAgICA8bmF2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdFJpZ2h0XCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj5OZXh0OiA8L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRMZWZ0XCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNlYXN5VUlFbGVtZW50c1wiPlByZXZpb3VzOiBFYXN5VUkgZWxlbWVudHM8L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvbmF2PlxuICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICApOyAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRoZVJlbmRlck1ldGhvZDtcbiJdfQ==
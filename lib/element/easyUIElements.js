'use strict';

require('../../index.js'); /// easyui-jsx

var EasyUIElements = function EasyUIElements() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'h2',
      null,
      'EasyUI elements'
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
          { href: '#theRenderMethod' },
          'Next: The ',
          React.createElement(
            'code',
            { className: 'inline' },
            'render()'
          ),
          ' method'
        )
      ),
      React.createElement(
        'span',
        { className: 'floatLeft' },
        React.createElement(
          'a',
          { href: '#functionalElements' },
          'Previous: Functional elements'
        )
      )
    )
  );
};

module.exports = EasyUIElements;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2Vhc3lVSUVsZW1lbnRzLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJFYXN5VUlFbGVtZW50cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGdCQUFSLEUsQ0FBMkI7O0FBRTNCLElBQU1DLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFNLFdBQVUsT0FBaEI7QUFBQTtBQUFBLEtBRkY7QUFlRTtBQUFBO0FBQUE7QUFBQTtBQUVnRjtBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUZoRjtBQUFBO0FBQUEsS0FmRjtBQW1CRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFlBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxrQkFBUjtBQUFBO0FBQXFDO0FBQUE7QUFBQSxjQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLFdBQXJDO0FBQUE7QUFBQTtBQURGLE9BREY7QUFJRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFdBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxxQkFBUjtBQUFBO0FBQUE7QUFERjtBQUpGO0FBbkJGLEdBRkY7QUFnQ0QsQ0FqQ0Q7O0FBbUNBQyxPQUFPQyxPQUFQLEdBQWlCRixjQUFqQiIsImZpbGUiOiJlYXN5VUlFbGVtZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vaW5kZXguanMnKTsgLy8vIGVhc3l1aS1qc3hcblxuY29uc3QgRWFzeVVJRWxlbWVudHMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5FYXN5VUkgZWxlbWVudHM8L2gyPlxuICAgICAgPGNvZGUgY2xhc3NOYW1lPVwiYmxvY2tcIj57YHJlcXVpcmUoJ2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IEJvZHksIEJ1dHRvbiB9ID0gZWFzeXVpO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgIGJ1dHRvbiA9IDxCdXR0b24+Q2xpY2sgbWUuLi48L0J1dHRvbj47XG5cbmJ1dHRvbi5vbkNsaWNrKGZ1bmN0aW9uKCkge1xuICBhbGVydCgnQ2xpY2tlZCEnKTtcbn0pO1xuXG5ib2R5LmFwcGVuZChidXR0b24pO2B9PC9jb2RlPlxuICAgICAgPHA+XG4gICAgICAgIENyZWF0aW5nIEVhc3lVSSBlbGVtZW50cyBmcm9tIEpTWCBpbnZvbHZlcyBub3RoaW5nIG1vcmUgdGhhbiBlbXBsb3lpbmcgdGhlIHJlbGV2YW50IGNsYXNzLlxuICAgICAgICBBbmQgc2luY2UgdGhlIEpTWCByZXN1bHRzIGluIGFuIGluc3RhbmNlIG9mIGFuIEVhc3lVSSBjbGFzcywgaW4gdGhpcyBjYXNlIHRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5CdXR0b248L2NvZGU+IGNsYXNzLCBpdHMgbWV0aG9kcyBjYW4gYmUgY2FsbGVkIGFnYWluc3QgaXQgZGlyZWN0bHkuXG4gICAgICA8L3A+XG4gICAgICA8bmF2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdFJpZ2h0XCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiN0aGVSZW5kZXJNZXRob2RcIj5OZXh0OiBUaGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+cmVuZGVyKCk8L2NvZGU+IG1ldGhvZDwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdExlZnRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI2Z1bmN0aW9uYWxFbGVtZW50c1wiPlByZXZpb3VzOiBGdW5jdGlvbmFsIGVsZW1lbnRzPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L25hdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgKTsgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFYXN5VUlFbGVtZW50cztcbiJdfQ==
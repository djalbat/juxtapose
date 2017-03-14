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
        null,
        React.createElement(
          'a',
          { href: '#contents' },
          'Contents'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2Vhc3lVSUVsZW1lbnRzLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJFYXN5VUlFbGVtZW50cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGdCQUFSLEUsQ0FBMkI7O0FBRTNCLElBQU1DLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFNLFdBQVUsT0FBaEI7QUFBQTtBQUFBLEtBRkY7QUFlRTtBQUFBO0FBQUE7QUFBQTtBQUVnRjtBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUZoRjtBQUFBO0FBQUEsS0FmRjtBQW1CRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFlBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxrQkFBUjtBQUFBO0FBQXFDO0FBQUE7QUFBQSxjQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLFdBQXJDO0FBQUE7QUFBQTtBQURGLE9BREY7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLFdBQVI7QUFBQTtBQUFBO0FBREYsT0FKRjtBQU9FO0FBQUE7QUFBQSxVQUFNLFdBQVUsV0FBaEI7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLHFCQUFSO0FBQUE7QUFBQTtBQURGO0FBUEY7QUFuQkYsR0FGRjtBQW1DRCxDQXBDRDs7QUFzQ0FDLE9BQU9DLE9BQVAsR0FBaUJGLGNBQWpCIiwiZmlsZSI6ImVhc3lVSUVsZW1lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9pbmRleC5qcycpOyAvLy8gZWFzeXVpLWpzeFxuXG5jb25zdCBFYXN5VUlFbGVtZW50cyA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkVhc3lVSSBlbGVtZW50czwvaDI+XG4gICAgICA8Y29kZSBjbGFzc05hbWU9XCJibG9ja1wiPntgcmVxdWlyZSgnZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICAgIHsgQm9keSwgQnV0dG9uIH0gPSBlYXN5dWk7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgYnV0dG9uID0gPEJ1dHRvbj5DbGljayBtZS4uLjwvQnV0dG9uPjtcblxuYnV0dG9uLm9uQ2xpY2soZnVuY3Rpb24oKSB7XG4gIGFsZXJ0KCdDbGlja2VkIScpO1xufSk7XG5cbmJvZHkuYXBwZW5kKGJ1dHRvbik7YH08L2NvZGU+XG4gICAgICA8cD5cbiAgICAgICAgQ3JlYXRpbmcgRWFzeVVJIGVsZW1lbnRzIGZyb20gSlNYIGludm9sdmVzIG5vdGhpbmcgbW9yZSB0aGFuIGVtcGxveWluZyB0aGUgcmVsZXZhbnQgY2xhc3MuXG4gICAgICAgIEFuZCBzaW5jZSB0aGUgSlNYIHJlc3VsdHMgaW4gYW4gaW5zdGFuY2Ugb2YgYW4gRWFzeVVJIGNsYXNzLCBpbiB0aGlzIGNhc2UgdGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPkJ1dHRvbjwvY29kZT4gY2xhc3MsIGl0cyBtZXRob2RzIGNhbiBiZSBjYWxsZWQgYWdhaW5zdCBpdCBkaXJlY3RseS5cbiAgICAgIDwvcD5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0UmlnaHRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI3RoZVJlbmRlck1ldGhvZFwiPk5leHQ6IFRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5yZW5kZXIoKTwvY29kZT4gbWV0aG9kPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxhIGhyZWY9XCIjY29udGVudHNcIj5Db250ZW50czwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdExlZnRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI2Z1bmN0aW9uYWxFbGVtZW50c1wiPlByZXZpb3VzOiBGdW5jdGlvbmFsIGVsZW1lbnRzPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L25hdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgKTsgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFYXN5VUlFbGVtZW50cztcbiJdfQ==
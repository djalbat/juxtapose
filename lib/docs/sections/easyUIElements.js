'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents'),
    BlockCode = require('../blockCode'),
    InlineCode = require('../inlineCode');

var EasyUIElements = function EasyUIElements() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#theRenderMethod' },
        'The ',
        React.createElement(
          InlineCode,
          null,
          'render()'
        ),
        ' method'
      ),
      React.createElement(
        Previous,
        { href: '#functionalElements' },
        'Functional elements'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'EasyUI elements'
    ),
    React.createElement(
      BlockCode,
      null,
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Body, Button } = easyui;\n\nconst body = new Body(),\n      button = <Button>Click me...</Button>;\n\nbutton.onClick(function() {\n  alert(\'Clicked!\');\n});\n\nbody.append(button);'
    ),
    React.createElement(
      'p',
      null,
      'Creating EasyUI elements from JSX involves nothing more than employing the relevant class. And since the JSX results in an instance of an EasyUI class, in this case the ',
      React.createElement(
        InlineCode,
        null,
        'Button'
      ),
      ' class, its methods can be called against it directly.'
    )
  );
};

module.exports = EasyUIElements;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kb2NzL3NlY3Rpb25zL2Vhc3lVSUVsZW1lbnRzLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJOZXh0IiwiUHJldmlvdXMiLCJDb250ZW50cyIsIkJsb2NrQ29kZSIsIklubGluZUNvZGUiLCJFYXN5VUlFbGVtZW50cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGtCQUFSOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUUsV0FBV0YsUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFTUcsV0FBV0gsUUFBUSxhQUFSLENBRmpCO0FBQUEsSUFHTUksWUFBWUosUUFBUSxjQUFSLENBSGxCO0FBQUEsSUFJTUssYUFBYUwsUUFBUSxlQUFSLENBSm5COztBQU1BLElBQU1NLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUMsWUFBRDtBQUFBLFVBQU0sTUFBSyxrQkFBWDtBQUFBO0FBQWtDO0FBQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUEsU0FBbEM7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFDLGdCQUFEO0FBQUEsVUFBVSxNQUFLLHFCQUFmO0FBQUE7QUFBQSxPQUZGO0FBR0UsMEJBQUMsUUFBRDtBQUhGLEtBREY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTkY7QUFPRTtBQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUEsS0FQRjtBQW9CRTtBQUFBO0FBQUE7QUFBQTtBQUVnRjtBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRmhGO0FBQUE7QUFBQTtBQXBCRixHQUZGO0FBNkJELENBOUJEOztBQWdDQUMsT0FBT0MsT0FBUCxHQUFpQkYsY0FBakIiLCJmaWxlIjoiZWFzeVVJRWxlbWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgTmV4dCA9IHJlcXVpcmUoJy4uL25leHQnKSxcbiAgICAgIFByZXZpb3VzID0gcmVxdWlyZSgnLi4vcHJldmlvdXMnKSxcbiAgICAgIENvbnRlbnRzID0gcmVxdWlyZSgnLi4vY29udGVudHMnKSxcbiAgICAgIEJsb2NrQ29kZSA9IHJlcXVpcmUoJy4uL2Jsb2NrQ29kZScpLFxuICAgICAgSW5saW5lQ29kZSA9IHJlcXVpcmUoJy4uL2lubGluZUNvZGUnKTtcblxuY29uc3QgRWFzeVVJRWxlbWVudHMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxOZXh0IGhyZWY9XCIjdGhlUmVuZGVyTWV0aG9kXCI+VGhlIDxJbmxpbmVDb2RlPnJlbmRlcigpPC9JbmxpbmVDb2RlPiBtZXRob2Q8L05leHQ+XG4gICAgICAgIDxQcmV2aW91cyBocmVmPVwiI2Z1bmN0aW9uYWxFbGVtZW50c1wiPkZ1bmN0aW9uYWwgZWxlbWVudHM8L1ByZXZpb3VzPlxuICAgICAgICA8Q29udGVudHMgLz5cbiAgICAgIDwvbmF2PlxuICAgICAgPGgyPkVhc3lVSSBlbGVtZW50czwvaDI+XG4gICAgICA8QmxvY2tDb2RlPntgcmVxdWlyZSgnZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICAgIHsgQm9keSwgQnV0dG9uIH0gPSBlYXN5dWk7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgYnV0dG9uID0gPEJ1dHRvbj5DbGljayBtZS4uLjwvQnV0dG9uPjtcblxuYnV0dG9uLm9uQ2xpY2soZnVuY3Rpb24oKSB7XG4gIGFsZXJ0KCdDbGlja2VkIScpO1xufSk7XG5cbmJvZHkuYXBwZW5kKGJ1dHRvbik7YH08L0Jsb2NrQ29kZT5cbiAgICAgIDxwPlxuICAgICAgICBDcmVhdGluZyBFYXN5VUkgZWxlbWVudHMgZnJvbSBKU1ggaW52b2x2ZXMgbm90aGluZyBtb3JlIHRoYW4gZW1wbG95aW5nIHRoZSByZWxldmFudCBjbGFzcy5cbiAgICAgICAgQW5kIHNpbmNlIHRoZSBKU1ggcmVzdWx0cyBpbiBhbiBpbnN0YW5jZSBvZiBhbiBFYXN5VUkgY2xhc3MsIGluIHRoaXMgY2FzZSB0aGUgPElubGluZUNvZGU+QnV0dG9uPC9JbmxpbmVDb2RlPiBjbGFzcywgaXRzIG1ldGhvZHMgY2FuIGJlIGNhbGxlZCBhZ2FpbnN0IGl0IGRpcmVjdGx5LlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICApOyAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVhc3lVSUVsZW1lbnRzO1xuIl19
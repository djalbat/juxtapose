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
          'Next: The render() method'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2Vhc3lVSUVsZW1lbnRzLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJFYXN5VUlFbGVtZW50cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGdCQUFSLEUsQ0FBMkI7O0FBRTNCLElBQU1DLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFNLFdBQVUsT0FBaEI7QUFBQTtBQUFBLEtBRkY7QUFlRTtBQUFBO0FBQUE7QUFBQTtBQUVnRjtBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUZoRjtBQUFBO0FBQUEsS0FmRjtBQW1CRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFlBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxrQkFBUjtBQUFBO0FBQUE7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBLFVBQU0sV0FBVSxXQUFoQjtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUsscUJBQVI7QUFBQTtBQUFBO0FBREY7QUFKRjtBQW5CRixHQUZGO0FBZ0NELENBakNEOztBQW1DQUMsT0FBT0MsT0FBUCxHQUFpQkYsY0FBakIiLCJmaWxlIjoiZWFzeVVJRWxlbWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL2luZGV4LmpzJyk7IC8vLyBlYXN5dWktanN4XG5cbmNvbnN0IEVhc3lVSUVsZW1lbnRzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+RWFzeVVJIGVsZW1lbnRzPC9oMj5cbiAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImJsb2NrXCI+e2ByZXF1aXJlKCdlYXN5dWktanN4Jyk7XG5cbmNvbnN0IGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgICAgeyBCb2R5LCBCdXR0b24gfSA9IGVhc3l1aTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICBidXR0b24gPSA8QnV0dG9uPkNsaWNrIG1lLi4uPC9CdXR0b24+O1xuXG5idXR0b24ub25DbGljayhmdW5jdGlvbigpIHtcbiAgYWxlcnQoJ0NsaWNrZWQhJyk7XG59KTtcblxuYm9keS5hcHBlbmQoYnV0dG9uKTtgfTwvY29kZT5cbiAgICAgIDxwPlxuICAgICAgICBDcmVhdGluZyBFYXN5VUkgZWxlbWVudHMgZnJvbSBKU1ggaW52b2x2ZXMgbm90aGluZyBtb3JlIHRoYW4gZW1wbG95aW5nIHRoZSByZWxldmFudCBjbGFzcy5cbiAgICAgICAgQW5kIHNpbmNlIHRoZSBKU1ggcmVzdWx0cyBpbiBhbiBpbnN0YW5jZSBvZiBhbiBFYXN5VUkgY2xhc3MsIGluIHRoaXMgY2FzZSB0aGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+QnV0dG9uPC9jb2RlPiBjbGFzcywgaXRzIG1ldGhvZHMgY2FuIGJlIGNhbGxlZCBhZ2FpbnN0IGl0IGRpcmVjdGx5LlxuICAgICAgPC9wPlxuICAgICAgPG5hdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRSaWdodFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjdGhlUmVuZGVyTWV0aG9kXCI+TmV4dDogVGhlIHJlbmRlcigpIG1ldGhvZDwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdExlZnRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI2Z1bmN0aW9uYWxFbGVtZW50c1wiPlByZXZpb3VzOiBGdW5jdGlvbmFsIGVsZW1lbnRzPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L25hdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgKTsgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFYXN5VUlFbGVtZW50cztcbiJdfQ==
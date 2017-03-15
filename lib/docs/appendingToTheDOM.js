'use strict';

require('../easyui-jsx');

var GettingStarted = function GettingStarted() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        'span',
        { className: 'next' },
        React.createElement(
          'a',
          { href: '#functionalElements' },
          'Next: Functional elements'
        )
      ),
      React.createElement(
        'span',
        { className: 'previous' },
        React.createElement(
          'a',
          { href: '#jsxIsGreat' },
          'Previous: JSX is great'
        )
      ),
      React.createElement(
        'span',
        { className: 'contents' },
        React.createElement(
          'a',
          { href: '#contents' },
          'Contents'
        )
      )
    ),
    React.createElement(
      'h2',
      null,
      'Appending to the DOM'
    ),
    React.createElement(
      'code',
      { className: 'block' },
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Div } = easyui;\n\nconst rootDivDOMElement =\n        document.getElementbyId(\'root\'),\n      rootDivElement =\n        Div.fromDOMElement(rootDivDOMElement);\n\nrootDivElement.append(\n\n  <div className="example">\n    An easy example.\n  </div>\n\n);'
    ),
    React.createElement(
      'p',
      null,
      'EasyUI elements created using JSX need to be put in the DOM somehow. The example here is equivalent to the use of the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'ReactDOM.render(...)'
      ),
      ' method in React or Reaction. You at least need to do this once, but only once.'
    ),
    React.createElement(
      'p',
      null,
      'If you are not happy using ',
      React.createElement(
        'code',
        { className: 'inline' },
        'body'
      ),
      ' DOM element, then create an element that references a root ',
      React.createElement(
        'code',
        { className: 'inline' },
        'div'
      ),
      ' element, say, either by passing the requisite CSS selector to the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'Div'
      ),
      ' class constructor, or, if you have the DOM element to hand, by using the static ',
      React.createElement(
        'code',
        { className: 'inline' },
        'fromHTML()'
      ),
      ' factory method of the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'Div'
      ),
      ' class, as in the example here.'
    ),
    React.createElement(
      'p',
      null,
      'All the examples here append to the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'body'
      ),
      ' DOM element but in practice it is entirely up to you.'
    )
  );
};

module.exports = GettingStarted;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kb2NzL2FwcGVuZGluZ1RvVGhlRE9NLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJHZXR0aW5nU3RhcnRlZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGVBQVI7O0FBRUEsSUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQU0sV0FBVSxNQUFoQjtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUsscUJBQVI7QUFBQTtBQUFBO0FBREYsT0FERjtBQUlFO0FBQUE7QUFBQSxVQUFNLFdBQVUsVUFBaEI7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGFBQVI7QUFBQTtBQUFBO0FBREYsT0FKRjtBQU9FO0FBQUE7QUFBQSxVQUFNLFdBQVUsVUFBaEI7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLFdBQVI7QUFBQTtBQUFBO0FBREY7QUFQRixLQURGO0FBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVpGO0FBYUU7QUFBQTtBQUFBLFFBQU0sV0FBVSxPQUFoQjtBQUFBO0FBQUEsS0FiRjtBQThCRTtBQUFBO0FBQUE7QUFBQTtBQUUyQztBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUYzQztBQUFBO0FBQUEsS0E5QkY7QUFtQ0U7QUFBQTtBQUFBO0FBQUE7QUFDcUI7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FEckI7QUFBQTtBQUNxSDtBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQURySDtBQUFBO0FBRXVDO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRnZDO0FBQUE7QUFHQztBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUhEO0FBQUE7QUFHa0U7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FIbEU7QUFBQTtBQUFBLEtBbkNGO0FBd0NFO0FBQUE7QUFBQTtBQUFBO0FBQzhCO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRDlCO0FBQUE7QUFBQTtBQXhDRixHQUZGO0FBZ0RELENBakREOztBQW1EQUMsT0FBT0MsT0FBUCxHQUFpQkYsY0FBakIiLCJmaWxlIjoiYXBwZW5kaW5nVG9UaGVET00uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uL2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgR2V0dGluZ1N0YXJ0ZWQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5leHRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI2Z1bmN0aW9uYWxFbGVtZW50c1wiPk5leHQ6IEZ1bmN0aW9uYWwgZWxlbWVudHM8L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJldmlvdXNcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI2pzeElzR3JlYXRcIj5QcmV2aW91czogSlNYIGlzIGdyZWF0PC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRzXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNjb250ZW50c1wiPkNvbnRlbnRzPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L25hdj5cbiAgICAgIDxoMj5BcHBlbmRpbmcgdG8gdGhlIERPTTwvaDI+XG4gICAgICA8Y29kZSBjbGFzc05hbWU9XCJibG9ja1wiPntgcmVxdWlyZSgnZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICAgIHsgRGl2IH0gPSBlYXN5dWk7XG5cbmNvbnN0IHJvb3REaXZET01FbGVtZW50ID1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudGJ5SWQoJ3Jvb3QnKSxcbiAgICAgIHJvb3REaXZFbGVtZW50ID1cbiAgICAgICAgRGl2LmZyb21ET01FbGVtZW50KHJvb3REaXZET01FbGVtZW50KTtcblxucm9vdERpdkVsZW1lbnQuYXBwZW5kKFxuXG4gIDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZVwiPlxuICAgIEFuIGVhc3kgZXhhbXBsZS5cbiAgPC9kaXY+XG5cbik7YH08L2NvZGU+XG4gICAgICA8cD5cbkVhc3lVSSBlbGVtZW50cyBjcmVhdGVkIHVzaW5nIEpTWCBuZWVkIHRvIGJlIHB1dCBpbiB0aGUgRE9NIHNvbWVob3cuXG5UaGUgZXhhbXBsZSBoZXJlIGlzIGVxdWl2YWxlbnQgdG8gdGhlIHVzZSBvZiB0aGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+UmVhY3RET00ucmVuZGVyKC4uLik8L2NvZGU+IG1ldGhvZCBpbiBSZWFjdCBvciBSZWFjdGlvbi5cbllvdSBhdCBsZWFzdCBuZWVkIHRvIGRvIHRoaXMgb25jZSwgYnV0IG9ubHkgb25jZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuSWYgeW91IGFyZSBub3QgaGFwcHkgdXNpbmcgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+Ym9keTwvY29kZT4gRE9NIGVsZW1lbnQsIHRoZW4gY3JlYXRlIGFuIGVsZW1lbnQgdGhhdCByZWZlcmVuY2VzIGEgcm9vdCA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5kaXY8L2NvZGU+IGVsZW1lbnQsIHNheSwgZWl0aGVyXG5ieSBwYXNzaW5nIHRoZSByZXF1aXNpdGUgQ1NTIHNlbGVjdG9yIHRvIHRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5EaXY8L2NvZGU+IGNsYXNzIGNvbnN0cnVjdG9yLCBvciwgaWYgeW91IGhhdmUgdGhlIERPTSBlbGVtZW50IHRvIGhhbmQsIGJ5IHVzaW5nIHRoZVxuc3RhdGljIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPmZyb21IVE1MKCk8L2NvZGU+IGZhY3RvcnkgbWV0aG9kIG9mIHRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5EaXY8L2NvZGU+IGNsYXNzLCBhcyBpbiB0aGUgZXhhbXBsZSBoZXJlLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG5BbGwgdGhlIGV4YW1wbGVzIGhlcmUgYXBwZW5kIHRvIHRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5ib2R5PC9jb2RlPiBET00gZWxlbWVudCBidXQgaW4gcHJhY3RpY2UgaXQgaXMgZW50aXJlbHkgdXAgdG8geW91LlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICApOyAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdldHRpbmdTdGFydGVkO1xuIl19
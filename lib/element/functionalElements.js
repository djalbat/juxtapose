'use strict';

require('../../index.js'); /// easyui-jsx

var FunctionalElements = function FunctionalElements() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'h2',
      null,
      'Functional elements'
    ),
    React.createElement(
      'code',
      { className: 'block' },
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Body } = easyui;\n\nconst Div = (properties) => {\n  const { className } = properties,\n        { childElements } = properties;\n\n  return (\n\n    <div className={className}>\n    {childElements}\n    </div>\n\n  );\n};\n\nconst body = new Body();\n\nbody.append(\n\n  <Div className="example">\n  An easy example.\n  </Div>\n\n);'
    ),
    React.createElement(
      'p',
      null,
      'JSX can be returned from functions. These functions are passed the attributes of the JSX that references them as a ',
      React.createElement(
        'code',
        { className: 'inline' },
        'properties'
      ),
      ' argument. The ',
      React.createElement(
        'code',
        { className: 'inline' },
        'childElements'
      ),
      ' property of that argument gives access to child elements.'
    ),
    React.createElement(
      'p',
      null,
      'In EasyUI-JSX parlance:'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        React.createElement(
          'code',
          { className: 'inline' },
          'props'
        ),
        ' becomes ',
        React.createElement(
          'code',
          { className: 'inline' },
          'properties'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'code',
          { className: 'inline' },
          'children'
        ),
        ' becomes ',
        React.createElement(
          'code',
          { className: 'inline' },
          'childElements'
        )
      )
    ),
    React.createElement(
      'nav',
      null,
      React.createElement(
        'span',
        { className: 'floatRight' },
        React.createElement(
          'a',
          { href: '#easyUIElements' },
          'Next: EasyUI elements'
        )
      ),
      React.createElement(
        'span',
        { className: 'floatLeft' },
        React.createElement(
          'a',
          { href: '#gettingStarted' },
          'Previous: Getting started'
        )
      )
    )
  );
};

module.exports = FunctionalElements;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2Z1bmN0aW9uYWxFbGVtZW50cy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRnVuY3Rpb25hbEVsZW1lbnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVEsZ0JBQVIsRSxDQUEyQjs7QUFFM0IsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUMvQixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFNLFdBQVUsT0FBaEI7QUFBQTtBQUFBLEtBRkY7QUE2QkU7QUFBQTtBQUFBO0FBQUE7QUFFaUY7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FGakY7QUFBQTtBQUdNO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BSE47QUFBQTtBQUFBLEtBN0JGO0FBa0NFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FsQ0Y7QUFxQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQ2dEO0FBQUE7QUFBQSxZQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBO0FBRGhELE9BREY7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxTQURGO0FBQUE7QUFDbUQ7QUFBQTtBQUFBLFlBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUE7QUFEbkQ7QUFKRixLQXJDRjtBQTZDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFlBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxpQkFBUjtBQUFBO0FBQUE7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBLFVBQU0sV0FBVSxXQUFoQjtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssaUJBQVI7QUFBQTtBQUFBO0FBREY7QUFKRjtBQTdDRixHQUZGO0FBMERELENBM0REOztBQTZEQUMsT0FBT0MsT0FBUCxHQUFpQkYsa0JBQWpCIiwiZmlsZSI6ImZ1bmN0aW9uYWxFbGVtZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vaW5kZXguanMnKTsgLy8vIGVhc3l1aS1qc3hcblxuY29uc3QgRnVuY3Rpb25hbEVsZW1lbnRzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+RnVuY3Rpb25hbCBlbGVtZW50czwvaDI+XG4gICAgICA8Y29kZSBjbGFzc05hbWU9XCJibG9ja1wiPntgcmVxdWlyZSgnZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICAgIHsgQm9keSB9ID0gZWFzeXVpO1xuXG5jb25zdCBEaXYgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgeyBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICB7Y2hpbGRFbGVtZW50c31cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbmJvZHkuYXBwZW5kKFxuXG4gIDxEaXYgY2xhc3NOYW1lPVwiZXhhbXBsZVwiPlxuICBBbiBlYXN5IGV4YW1wbGUuXG4gIDwvRGl2PlxuXG4pO2B9PC9jb2RlPlxuICAgICAgPHA+XG4gICAgICAgIEpTWCBjYW4gYmUgcmV0dXJuZWQgZnJvbSBmdW5jdGlvbnMuXG4gICAgICAgIFRoZXNlIGZ1bmN0aW9ucyBhcmUgcGFzc2VkIHRoZSBhdHRyaWJ1dGVzIG9mIHRoZSBKU1ggdGhhdCByZWZlcmVuY2VzIHRoZW0gYXMgYSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5wcm9wZXJ0aWVzPC9jb2RlPiBhcmd1bWVudC5cbiAgICAgICAgVGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPmNoaWxkRWxlbWVudHM8L2NvZGU+IHByb3BlcnR5IG9mIHRoYXQgYXJndW1lbnQgZ2l2ZXMgYWNjZXNzIHRvIGNoaWxkIGVsZW1lbnRzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEluIEVhc3lVSS1KU1ggcGFybGFuY2U6XG4gICAgICA8L3A+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5wcm9wczwvY29kZT4gYmVjb21lcyA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5wcm9wZXJ0aWVzPC9jb2RlPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+Y2hpbGRyZW48L2NvZGU+IGJlY29tZXMgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+Y2hpbGRFbGVtZW50czwvY29kZT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8bmF2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdFJpZ2h0XCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNlYXN5VUlFbGVtZW50c1wiPk5leHQ6IEVhc3lVSSBlbGVtZW50czwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdExlZnRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI2dldHRpbmdTdGFydGVkXCI+UHJldmlvdXM6IEdldHRpbmcgc3RhcnRlZDwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9uYXY+XG4gICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICk7ICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb25hbEVsZW1lbnRzO1xuIl19
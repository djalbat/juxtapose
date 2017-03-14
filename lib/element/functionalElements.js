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
          { href: '#gettingStarted' },
          'Previous: Getting started'
        )
      )
    )
  );
};

module.exports = FunctionalElements;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2Z1bmN0aW9uYWxFbGVtZW50cy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRnVuY3Rpb25hbEVsZW1lbnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVEsZ0JBQVIsRSxDQUEyQjs7QUFFM0IsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUMvQixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFNLFdBQVUsT0FBaEI7QUFBQTtBQUFBLEtBRkY7QUE2QkU7QUFBQTtBQUFBO0FBQUE7QUFFaUY7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FGakY7QUFBQTtBQUdNO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BSE47QUFBQTtBQUFBLEtBN0JGO0FBa0NFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FsQ0Y7QUFxQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQ2dEO0FBQUE7QUFBQSxZQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBO0FBRGhELE9BREY7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxTQURGO0FBQUE7QUFDbUQ7QUFBQTtBQUFBLFlBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUE7QUFEbkQ7QUFKRixLQXJDRjtBQTZDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFlBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxpQkFBUjtBQUFBO0FBQUE7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxXQUFSO0FBQUE7QUFBQTtBQURGLE9BSkY7QUFPRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFdBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxpQkFBUjtBQUFBO0FBQUE7QUFERjtBQVBGO0FBN0NGLEdBRkY7QUE2REQsQ0E5REQ7O0FBZ0VBQyxPQUFPQyxPQUFQLEdBQWlCRixrQkFBakIiLCJmaWxlIjoiZnVuY3Rpb25hbEVsZW1lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9pbmRleC5qcycpOyAvLy8gZWFzeXVpLWpzeFxuXG5jb25zdCBGdW5jdGlvbmFsRWxlbWVudHMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5GdW5jdGlvbmFsIGVsZW1lbnRzPC9oMj5cbiAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImJsb2NrXCI+e2ByZXF1aXJlKCdlYXN5dWktanN4Jyk7XG5cbmNvbnN0IGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgICAgeyBCb2R5IH0gPSBlYXN5dWk7XG5cbmNvbnN0IERpdiA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICB7IGNoaWxkRWxlbWVudHMgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgIHtjaGlsZEVsZW1lbnRzfVxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxuYm9keS5hcHBlbmQoXG5cbiAgPERpdiBjbGFzc05hbWU9XCJleGFtcGxlXCI+XG4gIEFuIGVhc3kgZXhhbXBsZS5cbiAgPC9EaXY+XG5cbik7YH08L2NvZGU+XG4gICAgICA8cD5cbiAgICAgICAgSlNYIGNhbiBiZSByZXR1cm5lZCBmcm9tIGZ1bmN0aW9ucy5cbiAgICAgICAgVGhlc2UgZnVuY3Rpb25zIGFyZSBwYXNzZWQgdGhlIGF0dHJpYnV0ZXMgb2YgdGhlIEpTWCB0aGF0IHJlZmVyZW5jZXMgdGhlbSBhcyBhIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPnByb3BlcnRpZXM8L2NvZGU+IGFyZ3VtZW50LlxuICAgICAgICBUaGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+Y2hpbGRFbGVtZW50czwvY29kZT4gcHJvcGVydHkgb2YgdGhhdCBhcmd1bWVudCBnaXZlcyBhY2Nlc3MgdG8gY2hpbGQgZWxlbWVudHMuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgSW4gRWFzeVVJLUpTWCBwYXJsYW5jZTpcbiAgICAgIDwvcD5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPnByb3BzPC9jb2RlPiBiZWNvbWVzIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPnByb3BlcnRpZXM8L2NvZGU+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5jaGlsZHJlbjwvY29kZT4gYmVjb21lcyA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5jaGlsZEVsZW1lbnRzPC9jb2RlPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0UmlnaHRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI2Vhc3lVSUVsZW1lbnRzXCI+TmV4dDogRWFzeVVJIGVsZW1lbnRzPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxhIGhyZWY9XCIjY29udGVudHNcIj5Db250ZW50czwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdExlZnRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI2dldHRpbmdTdGFydGVkXCI+UHJldmlvdXM6IEdldHRpbmcgc3RhcnRlZDwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9uYXY+XG4gICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICk7ICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb25hbEVsZW1lbnRzO1xuIl19
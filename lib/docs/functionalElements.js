'use strict';

require('../easyui-jsx');

var FunctionalElements = function FunctionalElements() {
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
          { href: '#easyUIElements' },
          'Next: EasyUI elements'
        )
      ),
      React.createElement(
        'span',
        { className: 'previous' },
        React.createElement(
          'a',
          { href: '#appendingToTheDOM' },
          'Previous: Appending to the DOM'
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
      'In EasyUI-JSX parlance, in relation to React or Reaction:'
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
    )
  );
};

module.exports = FunctionalElements;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kb2NzL2Z1bmN0aW9uYWxFbGVtZW50cy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRnVuY3Rpb25hbEVsZW1lbnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVEsZUFBUjs7QUFFQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixHQUFNO0FBQy9CLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQU0sV0FBVSxNQUFoQjtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssaUJBQVI7QUFBQTtBQUFBO0FBREYsT0FERjtBQUlFO0FBQUE7QUFBQSxVQUFNLFdBQVUsVUFBaEI7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLG9CQUFSO0FBQUE7QUFBQTtBQURGLE9BSkY7QUFPRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFVBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxXQUFSO0FBQUE7QUFBQTtBQURGO0FBUEYsS0FERjtBQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FaRjtBQWFFO0FBQUE7QUFBQSxRQUFNLFdBQVUsT0FBaEI7QUFBQTtBQUFBLEtBYkY7QUF3Q0U7QUFBQTtBQUFBO0FBQUE7QUFFaUY7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FGakY7QUFBQTtBQUdNO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BSE47QUFBQTtBQUFBLEtBeENGO0FBNkNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0E3Q0Y7QUFnREU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQ2dEO0FBQUE7QUFBQSxZQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBO0FBRGhELE9BREY7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxTQURGO0FBQUE7QUFDbUQ7QUFBQTtBQUFBLFlBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUE7QUFEbkQ7QUFKRjtBQWhERixHQUZGO0FBNkRELENBOUREOztBQWdFQUMsT0FBT0MsT0FBUCxHQUFpQkYsa0JBQWpCIiwiZmlsZSI6ImZ1bmN0aW9uYWxFbGVtZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBGdW5jdGlvbmFsRWxlbWVudHMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5leHRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI2Vhc3lVSUVsZW1lbnRzXCI+TmV4dDogRWFzeVVJIGVsZW1lbnRzPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByZXZpb3VzXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNhcHBlbmRpbmdUb1RoZURPTVwiPlByZXZpb3VzOiBBcHBlbmRpbmcgdG8gdGhlIERPTTwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50c1wiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjY29udGVudHNcIj5Db250ZW50czwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9uYXY+XG4gICAgICA8aDI+RnVuY3Rpb25hbCBlbGVtZW50czwvaDI+XG4gICAgICA8Y29kZSBjbGFzc05hbWU9XCJibG9ja1wiPntgcmVxdWlyZSgnZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICAgIHsgQm9keSB9ID0gZWFzeXVpO1xuXG5jb25zdCBEaXYgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgeyBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICB7Y2hpbGRFbGVtZW50c31cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbmJvZHkuYXBwZW5kKFxuXG4gIDxEaXYgY2xhc3NOYW1lPVwiZXhhbXBsZVwiPlxuICBBbiBlYXN5IGV4YW1wbGUuXG4gIDwvRGl2PlxuXG4pO2B9PC9jb2RlPlxuICAgICAgPHA+XG4gICAgICAgIEpTWCBjYW4gYmUgcmV0dXJuZWQgZnJvbSBmdW5jdGlvbnMuXG4gICAgICAgIFRoZXNlIGZ1bmN0aW9ucyBhcmUgcGFzc2VkIHRoZSBhdHRyaWJ1dGVzIG9mIHRoZSBKU1ggdGhhdCByZWZlcmVuY2VzIHRoZW0gYXMgYSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5wcm9wZXJ0aWVzPC9jb2RlPiBhcmd1bWVudC5cbiAgICAgICAgVGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPmNoaWxkRWxlbWVudHM8L2NvZGU+IHByb3BlcnR5IG9mIHRoYXQgYXJndW1lbnQgZ2l2ZXMgYWNjZXNzIHRvIGNoaWxkIGVsZW1lbnRzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEluIEVhc3lVSS1KU1ggcGFybGFuY2UsIGluIHJlbGF0aW9uIHRvIFJlYWN0IG9yIFJlYWN0aW9uOlxuICAgICAgPC9wPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+cHJvcHM8L2NvZGU+IGJlY29tZXMgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+cHJvcGVydGllczwvY29kZT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPmNoaWxkcmVuPC9jb2RlPiBiZWNvbWVzIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPmNoaWxkRWxlbWVudHM8L2NvZGU+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICApOyAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uYWxFbGVtZW50cztcbiJdfQ==
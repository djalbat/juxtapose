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
          { href: '#appendingToTheDOM' },
          'Next: Appending to the DOM'
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
      'Getting started'
    ),
    React.createElement(
      'code',
      { className: 'block' },
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Body } = easyui;\n\nconst body = new Body();\n\nbody.append(\n\n  <div className="example">\n    An easy example.\n  </div>\n\n);'
    ),
    React.createElement(
      'p',
      null,
      'Instructions for building this example can be found in the readme file. Once it is running, this example can be replaced with any other from this documentation. There are two things that need bearing in mind when doing so:'
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        'The ',
        React.createElement(
          'code',
          { className: 'inline' },
          '\'use strict\''
        ),
        ' directive is missing from the examples here and should be left in place.'
      ),
      React.createElement(
        'li',
        null,
        'The ',
        React.createElement(
          'code',
          { className: 'inline' },
          'require(\'easyui-jsx\')'
        ),
        ' directives here require the actual npm module. However, this is not available from within the project itself and so you must replace it with a local ',
        React.createElement(
          'code',
          { className: 'inline' },
          'require(\'./easyui-jsx\')'
        ),
        ' directive.'
      )
    ),
    React.createElement(
      'p',
      null,
      'You are of course free to build the examples entirely outside of this project, the instructions given here and in the readme file are just probably the quickest way to get started for neophytes.'
    )
  );
};

module.exports = GettingStarted;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kb2NzL2dldHRpbmdTdGFydGVkLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJHZXR0aW5nU3RhcnRlZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGVBQVI7O0FBRUEsSUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQU0sV0FBVSxNQUFoQjtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssb0JBQVI7QUFBQTtBQUFBO0FBREYsT0FERjtBQUlFO0FBQUE7QUFBQSxVQUFNLFdBQVUsVUFBaEI7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGFBQVI7QUFBQTtBQUFBO0FBREYsT0FKRjtBQU9FO0FBQUE7QUFBQSxVQUFNLFdBQVUsVUFBaEI7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLFdBQVI7QUFBQTtBQUFBO0FBREY7QUFQRixLQURGO0FBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVpGO0FBYUU7QUFBQTtBQUFBLFFBQU0sV0FBVSxPQUFoQjtBQUFBO0FBQUEsS0FiRjtBQTJCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBM0JGO0FBZ0NFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQ0o7QUFBQTtBQUFBLFlBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsU0FESTtBQUFBO0FBQUEsT0FERjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQ0o7QUFBQTtBQUFBLFlBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsU0FESTtBQUFBO0FBRThGO0FBQUE7QUFBQSxZQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLFNBRjlGO0FBQUE7QUFBQTtBQUpGLEtBaENGO0FBeUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF6Q0YsR0FGRjtBQWlERCxDQWxERDs7QUFvREFDLE9BQU9DLE9BQVAsR0FBaUJGLGNBQWpCIiwiZmlsZSI6ImdldHRpbmdTdGFydGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9lYXN5dWktanN4Jyk7XG5cbmNvbnN0IEdldHRpbmdTdGFydGVkID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8bmF2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXh0XCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNhcHBlbmRpbmdUb1RoZURPTVwiPk5leHQ6IEFwcGVuZGluZyB0byB0aGUgRE9NPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByZXZpb3VzXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNqc3hJc0dyZWF0XCI+UHJldmlvdXM6IEpTWCBpcyBncmVhdDwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50c1wiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjY29udGVudHNcIj5Db250ZW50czwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9uYXY+XG4gICAgICA8aDI+R2V0dGluZyBzdGFydGVkPC9oMj5cbiAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImJsb2NrXCI+e2ByZXF1aXJlKCdlYXN5dWktanN4Jyk7XG5cbmNvbnN0IGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgICAgeyBCb2R5IH0gPSBlYXN5dWk7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpO1xuXG5ib2R5LmFwcGVuZChcblxuICA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVcIj5cbiAgICBBbiBlYXN5IGV4YW1wbGUuXG4gIDwvZGl2PlxuXG4pO2B9PC9jb2RlPlxuICAgICAgPHA+XG5JbnN0cnVjdGlvbnMgZm9yIGJ1aWxkaW5nIHRoaXMgZXhhbXBsZSBjYW4gYmUgZm91bmQgaW4gdGhlIHJlYWRtZSBmaWxlLlxuT25jZSBpdCBpcyBydW5uaW5nLCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlcGxhY2VkIHdpdGggYW55IG90aGVyIGZyb20gdGhpcyBkb2N1bWVudGF0aW9uLlxuVGhlcmUgYXJlIHR3byB0aGluZ3MgdGhhdCBuZWVkIGJlYXJpbmcgaW4gbWluZCB3aGVuIGRvaW5nIHNvOlxuICAgICAgPC9wPlxuICAgICAgPG9sPlxuICAgICAgICA8bGk+XG5UaGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+J3VzZSBzdHJpY3QnPC9jb2RlPiBkaXJlY3RpdmUgaXMgbWlzc2luZyBmcm9tIHRoZSBleGFtcGxlcyBoZXJlIGFuZCBzaG91bGQgYmUgbGVmdCBpbiBwbGFjZS5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuVGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPnJlcXVpcmUoJ2Vhc3l1aS1qc3gnKTwvY29kZT4gZGlyZWN0aXZlcyBoZXJlIHJlcXVpcmUgdGhlIGFjdHVhbCBucG0gbW9kdWxlLlxuSG93ZXZlciwgdGhpcyBpcyBub3QgYXZhaWxhYmxlIGZyb20gd2l0aGluIHRoZSBwcm9qZWN0IGl0c2VsZiBhbmQgc28geW91IG11c3QgcmVwbGFjZSBpdCB3aXRoIGEgbG9jYWwgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+cmVxdWlyZSgnLi9lYXN5dWktanN4Jyk8L2NvZGU+IGRpcmVjdGl2ZS5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvb2w+XG4gICAgICA8cD5cbllvdSBhcmUgb2YgY291cnNlIGZyZWUgdG8gYnVpbGQgdGhlIGV4YW1wbGVzIGVudGlyZWx5IG91dHNpZGUgb2YgdGhpcyBwcm9qZWN0LCB0aGUgaW5zdHJ1Y3Rpb25zIGdpdmVuIGhlcmUgYW5kIGluIHRoZSByZWFkbWUgZmlsZSBhcmUganVzdCBwcm9iYWJseSB0aGUgcXVpY2tlc3Qgd2F5IHRvIGdldCBzdGFydGVkIGZvciBuZW9waHl0ZXMuXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICk7ICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2V0dGluZ1N0YXJ0ZWQ7XG4iXX0=
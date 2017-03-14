'use strict';

require('../../index.js'); /// easyui-jsx

var GettingStarted = function GettingStarted() {
  return React.createElement(
    'section',
    null,
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
      'It is not always easy to know where to start and there are no instructions here for getting the first example working. However, there are instructions in the readme file on running this documentation locally. From there is should only be a short step to getting the examples themselves working. Good luck!'
    ),
    React.createElement(
      'p',
      null,
      'There is one point that needs making at this stage:'
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        'EasyUI elements created using JSX need to be put in the DOM ',
        React.createElement(
          'em',
          null,
          'somehow'
        ),
        '.'
      )
    ),
    React.createElement(
      'p',
      null,
      'The example on the right is equivalent to the use of the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'ReactDOM.render(...)'
      ),
      ' method in React or Reaction. You at least need to do this kind of thing once, in order to get started so to speak.'
    ),
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
        null,
        React.createElement(
          'a',
          { href: '#contents' },
          'Contents'
        )
      )
    )
  );
};

module.exports = GettingStarted;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2dldHRpbmdTdGFydGVkLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJHZXR0aW5nU3RhcnRlZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGdCQUFSLEUsQ0FBMkI7O0FBRTNCLElBQU1DLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFNLFdBQVUsT0FBaEI7QUFBQTtBQUFBLEtBRkY7QUFnQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWhCRjtBQXNCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBdEJGO0FBeUJFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQ29EO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEcEQ7QUFBQTtBQUFBO0FBREYsS0F6QkY7QUE4QkU7QUFBQTtBQUFBO0FBQUE7QUFDbUQ7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FEbkQ7QUFBQTtBQUFBLEtBOUJGO0FBa0NFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFNLFdBQVUsTUFBaEI7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLHFCQUFSO0FBQUE7QUFBQTtBQURGLE9BREY7QUFJRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFVBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxhQUFSO0FBQUE7QUFBQTtBQURGLE9BSkY7QUFPRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLFdBQVI7QUFBQTtBQUFBO0FBREY7QUFQRjtBQWxDRixHQUZGO0FBa0RELENBbkREOztBQXFEQUMsT0FBT0MsT0FBUCxHQUFpQkYsY0FBakIiLCJmaWxlIjoiZ2V0dGluZ1N0YXJ0ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL2luZGV4LmpzJyk7IC8vLyBlYXN5dWktanN4XG5cbmNvbnN0IEdldHRpbmdTdGFydGVkID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+R2V0dGluZyBzdGFydGVkPC9oMj5cbiAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImJsb2NrXCI+e2ByZXF1aXJlKCdlYXN5dWktanN4Jyk7XG5cbmNvbnN0IGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgICAgeyBCb2R5IH0gPSBlYXN5dWk7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpO1xuXG5ib2R5LmFwcGVuZChcblxuICA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVcIj5cbiAgICBBbiBlYXN5IGV4YW1wbGUuXG4gIDwvZGl2PlxuXG4pO2B9PC9jb2RlPlxuICAgICAgPHA+XG4gICAgICAgIEl0IGlzIG5vdCBhbHdheXMgZWFzeSB0byBrbm93IHdoZXJlIHRvIHN0YXJ0IGFuZCB0aGVyZSBhcmUgbm8gaW5zdHJ1Y3Rpb25zIGhlcmUgZm9yIGdldHRpbmcgdGhlIGZpcnN0IGV4YW1wbGUgd29ya2luZy5cbiAgICAgICAgSG93ZXZlciwgdGhlcmUgYXJlIGluc3RydWN0aW9ucyBpbiB0aGUgcmVhZG1lIGZpbGUgb24gcnVubmluZyB0aGlzIGRvY3VtZW50YXRpb24gbG9jYWxseS5cbiAgICAgICAgRnJvbSB0aGVyZSBpcyBzaG91bGQgb25seSBiZSBhIHNob3J0IHN0ZXAgdG8gZ2V0dGluZyB0aGUgZXhhbXBsZXMgdGhlbXNlbHZlcyB3b3JraW5nLlxuICAgICAgICBHb29kIGx1Y2shXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgVGhlcmUgaXMgb25lIHBvaW50IHRoYXQgbmVlZHMgbWFraW5nIGF0IHRoaXMgc3RhZ2U6XG4gICAgICA8L3A+XG4gICAgICA8b2w+XG4gICAgICAgIDxsaT5cbkVhc3lVSSBlbGVtZW50cyBjcmVhdGVkIHVzaW5nIEpTWCBuZWVkIHRvIGJlIHB1dCBpbiB0aGUgRE9NIDxlbT5zb21laG93PC9lbT4uXG4gICAgICAgIDwvbGk+XG4gICAgICA8L29sPlxuICAgICAgPHA+XG5UaGUgZXhhbXBsZSBvbiB0aGUgcmlnaHQgaXMgZXF1aXZhbGVudCB0byB0aGUgdXNlIG9mIHRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5SZWFjdERPTS5yZW5kZXIoLi4uKTwvY29kZT4gbWV0aG9kIGluIFJlYWN0IG9yIFJlYWN0aW9uLlxuICAgICAgICBZb3UgYXQgbGVhc3QgbmVlZCB0byBkbyB0aGlzIGtpbmQgb2YgdGhpbmcgb25jZSwgaW4gb3JkZXIgdG8gZ2V0IHN0YXJ0ZWQgc28gdG8gc3BlYWsuXG4gICAgICA8L3A+XG4gICAgICA8bmF2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXh0XCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNmdW5jdGlvbmFsRWxlbWVudHNcIj5OZXh0OiBGdW5jdGlvbmFsIGVsZW1lbnRzPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByZXZpb3VzXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNqc3hJc0dyZWF0XCI+UHJldmlvdXM6IEpTWCBpcyBncmVhdDwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8YSBocmVmPVwiI2NvbnRlbnRzXCI+Q29udGVudHM8L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvbmF2PlxuICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICApOyAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdldHRpbmdTdGFydGVkO1xuIl19
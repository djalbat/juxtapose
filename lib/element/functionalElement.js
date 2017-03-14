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
      'It is not always easy to know where to start and there are no instructions here for getting the example on the right working. However, there are instructions in the readme file in the root of the EasyUI-JSX repository on ',
      React.createElement(
        'a',
        { href: 'https://github.com/djalbat/EasyUI-JSX' },
        'GitHub'
      ),
      ' that should allow you to get a local copy of this page running, in fact. Good luck!'
    ),
    React.createElement(
      'p',
      null,
      'Assuming you have gotten this example working, there is one point that needs making:'
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        'EasyUI elements created using JSX need to be put in the DOM somehow.'
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
      ' method in React or Reaction. You at least need to do this kind of thing once, in order to get things started so to speak.'
    ),
    React.createElement(
      'nav',
      null,
      React.createElement(
        'span',
        { className: 'floatRight' },
        React.createElement(
          'a',
          { href: '#' },
          'Next: '
        )
      ),
      React.createElement(
        'span',
        { className: 'floatLeft' },
        React.createElement(
          'a',
          { href: '#jsxIsGreat' },
          'Previous: JSX is great'
        )
      )
    )
  );
};

module.exports = GettingStarted;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2Z1bmN0aW9uYWxFbGVtZW50LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJHZXR0aW5nU3RhcnRlZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGdCQUFSLEUsQ0FBMkI7O0FBRTNCLElBQU1DLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFNLFdBQVUsT0FBaEI7QUFBQTtBQUFBLEtBRkY7QUFnQkU7QUFBQTtBQUFBO0FBQUE7QUFFaUc7QUFBQTtBQUFBLFVBQUcsTUFBSyx1Q0FBUjtBQUFBO0FBQUEsT0FGakc7QUFBQTtBQUFBLEtBaEJGO0FBc0JFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F0QkY7QUF5QkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLEtBekJGO0FBOEJFO0FBQUE7QUFBQTtBQUFBO0FBQ21EO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRG5EO0FBQUE7QUFBQSxLQTlCRjtBQWtDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFlBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQURGLE9BREY7QUFJRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFdBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxhQUFSO0FBQUE7QUFBQTtBQURGO0FBSkY7QUFsQ0YsR0FGRjtBQStDRCxDQWhERDs7QUFrREFDLE9BQU9DLE9BQVAsR0FBaUJGLGNBQWpCIiwiZmlsZSI6ImZ1bmN0aW9uYWxFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9pbmRleC5qcycpOyAvLy8gZWFzeXVpLWpzeFxuXG5jb25zdCBHZXR0aW5nU3RhcnRlZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkdldHRpbmcgc3RhcnRlZDwvaDI+XG4gICAgICA8Y29kZSBjbGFzc05hbWU9XCJibG9ja1wiPntgcmVxdWlyZSgnZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICAgIHsgQm9keSB9ID0gZWFzeXVpO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxuYm9keS5hcHBlbmQoXG5cbiAgPGRpdiBjbGFzc05hbWU9XCJleGFtcGxlXCI+XG4gICAgQW4gZWFzeSBleGFtcGxlLlxuICA8L2Rpdj5cblxuKTtgfTwvY29kZT5cbiAgICAgIDxwPlxuICAgICAgICBJdCBpcyBub3QgYWx3YXlzIGVhc3kgdG8ga25vdyB3aGVyZSB0byBzdGFydCBhbmQgdGhlcmUgYXJlIG5vIGluc3RydWN0aW9ucyBoZXJlIGZvciBnZXR0aW5nIHRoZSBleGFtcGxlIG9uIHRoZSByaWdodCB3b3JraW5nLlxuICAgICAgICBIb3dldmVyLCB0aGVyZSBhcmUgaW5zdHJ1Y3Rpb25zIGluIHRoZSByZWFkbWUgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgRWFzeVVJLUpTWCByZXBvc2l0b3J5IG9uIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGphbGJhdC9FYXN5VUktSlNYXCI+R2l0SHViPC9hPiB0aGF0XG4gICAgICAgIHNob3VsZCBhbGxvdyB5b3UgdG8gZ2V0IGEgbG9jYWwgY29weSBvZiB0aGlzIHBhZ2UgcnVubmluZywgaW4gZmFjdC5cbiAgICAgICAgR29vZCBsdWNrIVxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEFzc3VtaW5nIHlvdSBoYXZlIGdvdHRlbiB0aGlzIGV4YW1wbGUgd29ya2luZywgdGhlcmUgaXMgb25lIHBvaW50IHRoYXQgbmVlZHMgbWFraW5nOlxuICAgICAgPC9wPlxuICAgICAgPG9sPlxuICAgICAgICA8bGk+XG5FYXN5VUkgZWxlbWVudHMgY3JlYXRlZCB1c2luZyBKU1ggbmVlZCB0byBiZSBwdXQgaW4gdGhlIERPTSBzb21laG93LlxuICAgICAgICA8L2xpPlxuICAgICAgPC9vbD5cbiAgICAgIDxwPlxuVGhlIGV4YW1wbGUgb24gdGhlIHJpZ2h0IGlzIGVxdWl2YWxlbnQgdG8gdGhlIHVzZSBvZiB0aGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+UmVhY3RET00ucmVuZGVyKC4uLik8L2NvZGU+IG1ldGhvZCBpbiBSZWFjdCBvciBSZWFjdGlvbi5cbiAgICAgICAgWW91IGF0IGxlYXN0IG5lZWQgdG8gZG8gdGhpcyBraW5kIG9mIHRoaW5nIG9uY2UsIGluIG9yZGVyIHRvIGdldCB0aGluZ3Mgc3RhcnRlZCBzbyB0byBzcGVhay5cbiAgICAgIDwvcD5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0UmlnaHRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPk5leHQ6IDwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdExlZnRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI2pzeElzR3JlYXRcIj5QcmV2aW91czogSlNYIGlzIGdyZWF0PC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L25hdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgKTsgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHZXR0aW5nU3RhcnRlZDtcbiJdfQ==
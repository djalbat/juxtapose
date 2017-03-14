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
      '. Good luck!'
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
      ' method in React or Reaction. You at least need to do this kind of thing once, in order to get started so to speak.'
    ),
    React.createElement(
      'nav',
      null,
      React.createElement(
        'span',
        { className: 'floatRight' },
        React.createElement(
          'a',
          { href: '#functionalElements' },
          'Next: Functional elements'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2dldHRpbmdTdGFydGVkLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJHZXR0aW5nU3RhcnRlZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGdCQUFSLEUsQ0FBMkI7O0FBRTNCLElBQU1DLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFNLFdBQVUsT0FBaEI7QUFBQTtBQUFBLEtBRkY7QUFnQkU7QUFBQTtBQUFBO0FBQUE7QUFFaUc7QUFBQTtBQUFBLFVBQUcsTUFBSyx1Q0FBUjtBQUFBO0FBQUEsT0FGakc7QUFBQTtBQUFBLEtBaEJGO0FBcUJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FyQkY7QUF3QkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLEtBeEJGO0FBNkJFO0FBQUE7QUFBQTtBQUFBO0FBQ21EO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRG5EO0FBQUE7QUFBQSxLQTdCRjtBQWlDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFlBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxxQkFBUjtBQUFBO0FBQUE7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBLFVBQU0sV0FBVSxXQUFoQjtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssYUFBUjtBQUFBO0FBQUE7QUFERjtBQUpGO0FBakNGLEdBRkY7QUE4Q0QsQ0EvQ0Q7O0FBaURBQyxPQUFPQyxPQUFQLEdBQWlCRixjQUFqQiIsImZpbGUiOiJnZXR0aW5nU3RhcnRlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vaW5kZXguanMnKTsgLy8vIGVhc3l1aS1qc3hcblxuY29uc3QgR2V0dGluZ1N0YXJ0ZWQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5HZXR0aW5nIHN0YXJ0ZWQ8L2gyPlxuICAgICAgPGNvZGUgY2xhc3NOYW1lPVwiYmxvY2tcIj57YHJlcXVpcmUoJ2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IEJvZHkgfSA9IGVhc3l1aTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbmJvZHkuYXBwZW5kKFxuXG4gIDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZVwiPlxuICAgIEFuIGVhc3kgZXhhbXBsZS5cbiAgPC9kaXY+XG5cbik7YH08L2NvZGU+XG4gICAgICA8cD5cbiAgICAgICAgSXQgaXMgbm90IGFsd2F5cyBlYXN5IHRvIGtub3cgd2hlcmUgdG8gc3RhcnQgYW5kIHRoZXJlIGFyZSBubyBpbnN0cnVjdGlvbnMgaGVyZSBmb3IgZ2V0dGluZyB0aGUgZXhhbXBsZSBvbiB0aGUgcmlnaHQgd29ya2luZy5cbiAgICAgICAgSG93ZXZlciwgdGhlcmUgYXJlIGluc3RydWN0aW9ucyBpbiB0aGUgcmVhZG1lIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIEVhc3lVSS1KU1ggcmVwb3NpdG9yeSBvbiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RqYWxiYXQvRWFzeVVJLUpTWFwiPkdpdEh1YjwvYT4uXG4gICAgICAgIEdvb2QgbHVjayFcbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBUaGVyZSBpcyBvbmUgcG9pbnQgdGhhdCBuZWVkcyBtYWtpbmcgYXQgdGhpcyBzdGFnZTpcbiAgICAgIDwvcD5cbiAgICAgIDxvbD5cbiAgICAgICAgPGxpPlxuRWFzeVVJIGVsZW1lbnRzIGNyZWF0ZWQgdXNpbmcgSlNYIG5lZWQgdG8gYmUgcHV0IGluIHRoZSBET00gc29tZWhvdy5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvb2w+XG4gICAgICA8cD5cblRoZSBleGFtcGxlIG9uIHRoZSByaWdodCBpcyBlcXVpdmFsZW50IHRvIHRoZSB1c2Ugb2YgdGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPlJlYWN0RE9NLnJlbmRlciguLi4pPC9jb2RlPiBtZXRob2QgaW4gUmVhY3Qgb3IgUmVhY3Rpb24uXG4gICAgICAgIFlvdSBhdCBsZWFzdCBuZWVkIHRvIGRvIHRoaXMga2luZCBvZiB0aGluZyBvbmNlLCBpbiBvcmRlciB0byBnZXQgc3RhcnRlZCBzbyB0byBzcGVhay5cbiAgICAgIDwvcD5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0UmlnaHRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI2Z1bmN0aW9uYWxFbGVtZW50c1wiPk5leHQ6IEZ1bmN0aW9uYWwgZWxlbWVudHM8L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRMZWZ0XCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNqc3hJc0dyZWF0XCI+UHJldmlvdXM6IEpTWCBpcyBncmVhdDwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9uYXY+XG4gICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICk7ICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2V0dGluZ1N0YXJ0ZWQ7XG4iXX0=
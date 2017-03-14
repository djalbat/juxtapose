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
          { href: '#jsxIsGreat' },
          'Previous: JSX is great'
        )
      )
    )
  );
};

module.exports = GettingStarted;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2dldHRpbmdTdGFydGVkLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJHZXR0aW5nU3RhcnRlZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGdCQUFSLEUsQ0FBMkI7O0FBRTNCLElBQU1DLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFNLFdBQVUsT0FBaEI7QUFBQTtBQUFBLEtBRkY7QUFnQkU7QUFBQTtBQUFBO0FBQUE7QUFFaUc7QUFBQTtBQUFBLFVBQUcsTUFBSyx1Q0FBUjtBQUFBO0FBQUEsT0FGakc7QUFBQTtBQUFBLEtBaEJGO0FBcUJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FyQkY7QUF3QkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLEtBeEJGO0FBNkJFO0FBQUE7QUFBQTtBQUFBO0FBQ21EO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRG5EO0FBQUE7QUFBQSxLQTdCRjtBQWlDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFlBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxxQkFBUjtBQUFBO0FBQUE7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxXQUFSO0FBQUE7QUFBQTtBQURGLE9BSkY7QUFPRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFdBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxhQUFSO0FBQUE7QUFBQTtBQURGO0FBUEY7QUFqQ0YsR0FGRjtBQWlERCxDQWxERDs7QUFvREFDLE9BQU9DLE9BQVAsR0FBaUJGLGNBQWpCIiwiZmlsZSI6ImdldHRpbmdTdGFydGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9pbmRleC5qcycpOyAvLy8gZWFzeXVpLWpzeFxuXG5jb25zdCBHZXR0aW5nU3RhcnRlZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkdldHRpbmcgc3RhcnRlZDwvaDI+XG4gICAgICA8Y29kZSBjbGFzc05hbWU9XCJibG9ja1wiPntgcmVxdWlyZSgnZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICAgIHsgQm9keSB9ID0gZWFzeXVpO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxuYm9keS5hcHBlbmQoXG5cbiAgPGRpdiBjbGFzc05hbWU9XCJleGFtcGxlXCI+XG4gICAgQW4gZWFzeSBleGFtcGxlLlxuICA8L2Rpdj5cblxuKTtgfTwvY29kZT5cbiAgICAgIDxwPlxuICAgICAgICBJdCBpcyBub3QgYWx3YXlzIGVhc3kgdG8ga25vdyB3aGVyZSB0byBzdGFydCBhbmQgdGhlcmUgYXJlIG5vIGluc3RydWN0aW9ucyBoZXJlIGZvciBnZXR0aW5nIHRoZSBleGFtcGxlIG9uIHRoZSByaWdodCB3b3JraW5nLlxuICAgICAgICBIb3dldmVyLCB0aGVyZSBhcmUgaW5zdHJ1Y3Rpb25zIGluIHRoZSByZWFkbWUgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgRWFzeVVJLUpTWCByZXBvc2l0b3J5IG9uIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGphbGJhdC9FYXN5VUktSlNYXCI+R2l0SHViPC9hPi5cbiAgICAgICAgR29vZCBsdWNrIVxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFRoZXJlIGlzIG9uZSBwb2ludCB0aGF0IG5lZWRzIG1ha2luZyBhdCB0aGlzIHN0YWdlOlxuICAgICAgPC9wPlxuICAgICAgPG9sPlxuICAgICAgICA8bGk+XG5FYXN5VUkgZWxlbWVudHMgY3JlYXRlZCB1c2luZyBKU1ggbmVlZCB0byBiZSBwdXQgaW4gdGhlIERPTSBzb21laG93LlxuICAgICAgICA8L2xpPlxuICAgICAgPC9vbD5cbiAgICAgIDxwPlxuVGhlIGV4YW1wbGUgb24gdGhlIHJpZ2h0IGlzIGVxdWl2YWxlbnQgdG8gdGhlIHVzZSBvZiB0aGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+UmVhY3RET00ucmVuZGVyKC4uLik8L2NvZGU+IG1ldGhvZCBpbiBSZWFjdCBvciBSZWFjdGlvbi5cbiAgICAgICAgWW91IGF0IGxlYXN0IG5lZWQgdG8gZG8gdGhpcyBraW5kIG9mIHRoaW5nIG9uY2UsIGluIG9yZGVyIHRvIGdldCBzdGFydGVkIHNvIHRvIHNwZWFrLlxuICAgICAgPC9wPlxuICAgICAgPG5hdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRSaWdodFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjZnVuY3Rpb25hbEVsZW1lbnRzXCI+TmV4dDogRnVuY3Rpb25hbCBlbGVtZW50czwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8YSBocmVmPVwiI2NvbnRlbnRzXCI+Q29udGVudHM8L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRMZWZ0XCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNqc3hJc0dyZWF0XCI+UHJldmlvdXM6IEpTWCBpcyBncmVhdDwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9uYXY+XG4gICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICk7ICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2V0dGluZ1N0YXJ0ZWQ7XG4iXX0=
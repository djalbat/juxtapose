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
      'It is not always easy to know where to start and there are no instructions here for getting the first example working. However, there are instructions in the readme file in the root of the EasyUI-JSX repository on ',
      React.createElement(
        'a',
        { href: 'https://github.com/djalbat/EasyUI-JSX' },
        'GitHub'
      ),
      ' on how to get this documentation running locally. From there is should only be a short step to getting the examples themselves working. Good luck!'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2dldHRpbmdTdGFydGVkLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJHZXR0aW5nU3RhcnRlZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGdCQUFSLEUsQ0FBMkI7O0FBRTNCLElBQU1DLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFNLFdBQVUsT0FBaEI7QUFBQTtBQUFBLEtBRkY7QUFnQkU7QUFBQTtBQUFBO0FBQUE7QUFFaUc7QUFBQTtBQUFBLFVBQUcsTUFBSyx1Q0FBUjtBQUFBO0FBQUEsT0FGakc7QUFBQTtBQUFBLEtBaEJGO0FBc0JFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F0QkY7QUF5QkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFDb0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURwRDtBQUFBO0FBQUE7QUFERixLQXpCRjtBQThCRTtBQUFBO0FBQUE7QUFBQTtBQUNtRDtBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQURuRDtBQUFBO0FBQUEsS0E5QkY7QUFrQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQU0sV0FBVSxNQUFoQjtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUsscUJBQVI7QUFBQTtBQUFBO0FBREYsT0FERjtBQUlFO0FBQUE7QUFBQSxVQUFNLFdBQVUsVUFBaEI7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGFBQVI7QUFBQTtBQUFBO0FBREYsT0FKRjtBQU9FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssV0FBUjtBQUFBO0FBQUE7QUFERjtBQVBGO0FBbENGLEdBRkY7QUFrREQsQ0FuREQ7O0FBcURBQyxPQUFPQyxPQUFQLEdBQWlCRixjQUFqQiIsImZpbGUiOiJnZXR0aW5nU3RhcnRlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vaW5kZXguanMnKTsgLy8vIGVhc3l1aS1qc3hcblxuY29uc3QgR2V0dGluZ1N0YXJ0ZWQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5HZXR0aW5nIHN0YXJ0ZWQ8L2gyPlxuICAgICAgPGNvZGUgY2xhc3NOYW1lPVwiYmxvY2tcIj57YHJlcXVpcmUoJ2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IEJvZHkgfSA9IGVhc3l1aTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbmJvZHkuYXBwZW5kKFxuXG4gIDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZVwiPlxuICAgIEFuIGVhc3kgZXhhbXBsZS5cbiAgPC9kaXY+XG5cbik7YH08L2NvZGU+XG4gICAgICA8cD5cbiAgICAgICAgSXQgaXMgbm90IGFsd2F5cyBlYXN5IHRvIGtub3cgd2hlcmUgdG8gc3RhcnQgYW5kIHRoZXJlIGFyZSBubyBpbnN0cnVjdGlvbnMgaGVyZSBmb3IgZ2V0dGluZyB0aGUgZmlyc3QgZXhhbXBsZSB3b3JraW5nLlxuICAgICAgICBIb3dldmVyLCB0aGVyZSBhcmUgaW5zdHJ1Y3Rpb25zIGluIHRoZSByZWFkbWUgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgRWFzeVVJLUpTWCByZXBvc2l0b3J5IG9uIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGphbGJhdC9FYXN5VUktSlNYXCI+R2l0SHViPC9hPiBvbiBob3cgdG8gZ2V0IHRoaXMgZG9jdW1lbnRhdGlvbiBydW5uaW5nIGxvY2FsbHkuXG4gICAgICAgIEZyb20gdGhlcmUgaXMgc2hvdWxkIG9ubHkgYmUgYSBzaG9ydCBzdGVwIHRvIGdldHRpbmcgdGhlIGV4YW1wbGVzIHRoZW1zZWx2ZXMgd29ya2luZy5cbiAgICAgICAgR29vZCBsdWNrIVxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFRoZXJlIGlzIG9uZSBwb2ludCB0aGF0IG5lZWRzIG1ha2luZyBhdCB0aGlzIHN0YWdlOlxuICAgICAgPC9wPlxuICAgICAgPG9sPlxuICAgICAgICA8bGk+XG5FYXN5VUkgZWxlbWVudHMgY3JlYXRlZCB1c2luZyBKU1ggbmVlZCB0byBiZSBwdXQgaW4gdGhlIERPTSA8ZW0+c29tZWhvdzwvZW0+LlxuICAgICAgICA8L2xpPlxuICAgICAgPC9vbD5cbiAgICAgIDxwPlxuVGhlIGV4YW1wbGUgb24gdGhlIHJpZ2h0IGlzIGVxdWl2YWxlbnQgdG8gdGhlIHVzZSBvZiB0aGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+UmVhY3RET00ucmVuZGVyKC4uLik8L2NvZGU+IG1ldGhvZCBpbiBSZWFjdCBvciBSZWFjdGlvbi5cbiAgICAgICAgWW91IGF0IGxlYXN0IG5lZWQgdG8gZG8gdGhpcyBraW5kIG9mIHRoaW5nIG9uY2UsIGluIG9yZGVyIHRvIGdldCBzdGFydGVkIHNvIHRvIHNwZWFrLlxuICAgICAgPC9wPlxuICAgICAgPG5hdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV4dFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjZnVuY3Rpb25hbEVsZW1lbnRzXCI+TmV4dDogRnVuY3Rpb25hbCBlbGVtZW50czwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmV2aW91c1wiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjanN4SXNHcmVhdFwiPlByZXZpb3VzOiBKU1ggaXMgZ3JlYXQ8L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPGEgaHJlZj1cIiNjb250ZW50c1wiPkNvbnRlbnRzPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L25hdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgKTsgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHZXR0aW5nU3RhcnRlZDtcbiJdfQ==
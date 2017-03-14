'use strict';

require('../../index.js'); /// easyui-jsx

var Introduction = function Introduction() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'h2',
      null,
      'Contents'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#introduction' },
          'Introduction'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#jsxIsGreat' },
          'JSX is great'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#gettingStarted' },
          'Getting started'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#functionalElements' },
          'Functional elements'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#easyUIElements' },
          'EasyUI elements'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#theRenderMethod' },
          'The ',
          React.createElement(
            'code',
            { className: 'inline' },
            'render()'
          ),
          ' method'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#extendingAnEasyUIClass' },
          'Extending an EasyUI class'
        )
      )
    )
  );
};

module.exports = Introduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L19pbnRyb2R1Y3Rpb24uanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkludHJvZHVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGdCQUFSLEUsQ0FBMkI7O0FBRTNCLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxlQUFSO0FBQUE7QUFBQTtBQURGLE9BREY7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGFBQVI7QUFBQTtBQUFBO0FBREYsT0FKRjtBQU9FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssaUJBQVI7QUFBQTtBQUFBO0FBREYsT0FQRjtBQVVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUsscUJBQVI7QUFBQTtBQUFBO0FBREYsT0FWRjtBQWFFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssaUJBQVI7QUFBQTtBQUFBO0FBREYsT0FiRjtBQWdCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGtCQUFSO0FBQUE7QUFBK0I7QUFBQTtBQUFBLGNBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsV0FBL0I7QUFBQTtBQUFBO0FBREYsT0FoQkY7QUFtQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyx5QkFBUjtBQUFBO0FBQUE7QUFERjtBQW5CRjtBQUZGLEdBRkY7QUE4QkQsQ0EvQkQ7O0FBaUNBQyxPQUFPQyxPQUFQLEdBQWlCRixZQUFqQiIsImZpbGUiOiJfaW50cm9kdWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9pbmRleC5qcycpOyAvLy8gZWFzeXVpLWpzeFxuXG5jb25zdCBJbnRyb2R1Y3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5Db250ZW50czwvaDI+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI2ludHJvZHVjdGlvblwiPkludHJvZHVjdGlvbjwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjanN4SXNHcmVhdFwiPkpTWCBpcyBncmVhdDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjZ2V0dGluZ1N0YXJ0ZWRcIj5HZXR0aW5nIHN0YXJ0ZWQ8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI2Z1bmN0aW9uYWxFbGVtZW50c1wiPkZ1bmN0aW9uYWwgZWxlbWVudHM8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI2Vhc3lVSUVsZW1lbnRzXCI+RWFzeVVJIGVsZW1lbnRzPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiN0aGVSZW5kZXJNZXRob2RcIj5UaGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+cmVuZGVyKCk8L2NvZGU+IG1ldGhvZDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjZXh0ZW5kaW5nQW5FYXN5VUlDbGFzc1wiPkV4dGVuZGluZyBhbiBFYXN5VUkgY2xhc3M8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICApOyAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludHJvZHVjdGlvbjtcbiJdfQ==
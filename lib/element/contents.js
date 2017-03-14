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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NvbnRlbnRzLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJJbnRyb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUSxnQkFBUixFLENBQTJCOztBQUUzQixJQUFNQyxlQUFlLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssZUFBUjtBQUFBO0FBQUE7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxhQUFSO0FBQUE7QUFBQTtBQURGLE9BSkY7QUFPRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGlCQUFSO0FBQUE7QUFBQTtBQURGLE9BUEY7QUFVRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLHFCQUFSO0FBQUE7QUFBQTtBQURGLE9BVkY7QUFhRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGlCQUFSO0FBQUE7QUFBQTtBQURGLE9BYkY7QUFnQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxrQkFBUjtBQUFBO0FBQStCO0FBQUE7QUFBQSxjQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLFdBQS9CO0FBQUE7QUFBQTtBQURGLE9BaEJGO0FBbUJFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUsseUJBQVI7QUFBQTtBQUFBO0FBREY7QUFuQkY7QUFGRixHQUZGO0FBOEJELENBL0JEOztBQWlDQUMsT0FBT0MsT0FBUCxHQUFpQkYsWUFBakIiLCJmaWxlIjoiY29udGVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL2luZGV4LmpzJyk7IC8vLyBlYXN5dWktanN4XG5cbmNvbnN0IEludHJvZHVjdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkNvbnRlbnRzPC9oMj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjaW50cm9kdWN0aW9uXCI+SW50cm9kdWN0aW9uPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNqc3hJc0dyZWF0XCI+SlNYIGlzIGdyZWF0PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNnZXR0aW5nU3RhcnRlZFwiPkdldHRpbmcgc3RhcnRlZDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjZnVuY3Rpb25hbEVsZW1lbnRzXCI+RnVuY3Rpb25hbCBlbGVtZW50czwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjZWFzeVVJRWxlbWVudHNcIj5FYXN5VUkgZWxlbWVudHM8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI3RoZVJlbmRlck1ldGhvZFwiPlRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5yZW5kZXIoKTwvY29kZT4gbWV0aG9kPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNleHRlbmRpbmdBbkVhc3lVSUNsYXNzXCI+RXh0ZW5kaW5nIGFuIEVhc3lVSSBjbGFzczwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICk7ICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50cm9kdWN0aW9uO1xuIl19
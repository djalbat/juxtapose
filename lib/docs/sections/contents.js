'use strict';

require('../../easyui-jsx');

var InlineCode = require('../inlineCode');

var Contents = function Contents() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        'span',
        { className: 'contents' },
        'Contents'
      )
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
          { href: '#appendingElementsToTheDOM' },
          'Appending elements to the DOM'
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
            InlineCode,
            null,
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
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#theExampleOfThisDocumentation' },
          'The example of this documentation'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#theElementClass' },
          'The ',
          React.createElement(
            InlineCode,
            null,
            'Element'
          ),
          ' class'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#aSimpleForm' },
          'A simple form'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#moreEasyUIElements' },
          'More EasyUI elements'
        ),
        React.createElement(
          'ul',
          null,
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: '#easyUILayout' },
              'EasyUI-Layout'
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: '#easyUIDragAndDrop' },
              'EasyUI-DragAndDrop'
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: 'easyUIRichTextarea' },
              'EasyUI-RichTextarea'
            )
          )
        )
      )
    )
  );
};

module.exports = Contents;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kb2NzL3NlY3Rpb25zL2NvbnRlbnRzLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJJbmxpbmVDb2RlIiwiQ29udGVudHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUSxrQkFBUjs7QUFFQSxJQUFNQyxhQUFhRCxRQUFRLGVBQVIsQ0FBbkI7O0FBRUEsSUFBTUUsV0FBVyxTQUFYQSxRQUFXLEdBQU07QUFDckIsU0FFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFVBQWhCO0FBQUE7QUFBQTtBQURGLEtBREY7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGVBQVI7QUFBQTtBQUFBO0FBREYsT0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssYUFBUjtBQUFBO0FBQUE7QUFERixPQUpGO0FBT0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxpQkFBUjtBQUFBO0FBQUE7QUFERixPQVBGO0FBVUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyw0QkFBUjtBQUFBO0FBQUE7QUFERixPQVZGO0FBYUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxxQkFBUjtBQUFBO0FBQUE7QUFERixPQWJGO0FBZ0JFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssaUJBQVI7QUFBQTtBQUFBO0FBREYsT0FoQkY7QUFtQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxrQkFBUjtBQUFBO0FBQStCO0FBQUMsc0JBQUQ7QUFBQTtBQUFBO0FBQUEsV0FBL0I7QUFBQTtBQUFBO0FBREYsT0FuQkY7QUFzQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyx5QkFBUjtBQUFBO0FBQUE7QUFERixPQXRCRjtBQXlCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGdDQUFSO0FBQUE7QUFBQTtBQURGLE9BekJGO0FBNEJFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssa0JBQVI7QUFBQTtBQUErQjtBQUFDLHNCQUFEO0FBQUE7QUFBQTtBQUFBLFdBQS9CO0FBQUE7QUFBQTtBQURGLE9BNUJGO0FBK0JFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssY0FBUjtBQUFBO0FBQUE7QUFERixPQS9CRjtBQWtDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLHFCQUFSO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFHLE1BQUssZUFBUjtBQUFBO0FBQUE7QUFERixXQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFHLE1BQUssb0JBQVI7QUFBQTtBQUFBO0FBREYsV0FKRjtBQU9FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBRyxNQUFLLG9CQUFSO0FBQUE7QUFBQTtBQURGO0FBUEY7QUFGRjtBQWxDRjtBQUpGLEdBRkY7QUEwREQsQ0EzREQ7O0FBNkRBQyxPQUFPQyxPQUFQLEdBQWlCRixRQUFqQiIsImZpbGUiOiJjb250ZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBJbmxpbmVDb2RlID0gcmVxdWlyZSgnLi4vaW5saW5lQ29kZScpO1xuXG5jb25zdCBDb250ZW50cyA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzZWN0aW9uPlxuICAgICAgPG5hdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudHNcIj5Db250ZW50czwvc3Bhbj5cbiAgICAgIDwvbmF2PlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNpbnRyb2R1Y3Rpb25cIj5JbnRyb2R1Y3Rpb248L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI2pzeElzR3JlYXRcIj5KU1ggaXMgZ3JlYXQ8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI2dldHRpbmdTdGFydGVkXCI+R2V0dGluZyBzdGFydGVkPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNhcHBlbmRpbmdFbGVtZW50c1RvVGhlRE9NXCI+QXBwZW5kaW5nIGVsZW1lbnRzIHRvIHRoZSBET008L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI2Z1bmN0aW9uYWxFbGVtZW50c1wiPkZ1bmN0aW9uYWwgZWxlbWVudHM8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI2Vhc3lVSUVsZW1lbnRzXCI+RWFzeVVJIGVsZW1lbnRzPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiN0aGVSZW5kZXJNZXRob2RcIj5UaGUgPElubGluZUNvZGU+cmVuZGVyKCk8L0lubGluZUNvZGU+IG1ldGhvZDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjZXh0ZW5kaW5nQW5FYXN5VUlDbGFzc1wiPkV4dGVuZGluZyBhbiBFYXN5VUkgY2xhc3M8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI3RoZUV4YW1wbGVPZlRoaXNEb2N1bWVudGF0aW9uXCI+VGhlIGV4YW1wbGUgb2YgdGhpcyBkb2N1bWVudGF0aW9uPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiN0aGVFbGVtZW50Q2xhc3NcIj5UaGUgPElubGluZUNvZGU+RWxlbWVudDwvSW5saW5lQ29kZT4gY2xhc3M8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI2FTaW1wbGVGb3JtXCI+QSBzaW1wbGUgZm9ybTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjbW9yZUVhc3lVSUVsZW1lbnRzXCI+TW9yZSBFYXN5VUkgZWxlbWVudHM8L2E+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI2Vhc3lVSUxheW91dFwiPkVhc3lVSS1MYXlvdXQ8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI2Vhc3lVSURyYWdBbmREcm9wXCI+RWFzeVVJLURyYWdBbmREcm9wPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImVhc3lVSVJpY2hUZXh0YXJlYVwiPkVhc3lVSS1SaWNoVGV4dGFyZWE8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICApOyAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRlbnRzO1xuIl19
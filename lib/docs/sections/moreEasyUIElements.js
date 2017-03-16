'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents');

var MoreEasyUIElements = function MoreEasyUIElements() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#easyUILayout' },
        'EasyUI Layout'
      ),
      React.createElement(
        Previous,
        { href: '#aSimpleForm' },
        'A simple form'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'More EasyUI elements'
    ),
    React.createElement(
      'p',
      null,
      'These are divided between three projects:'
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
    ),
    React.createElement(
      'p',
      null,
      'These are specialist projects to some extent and are not for everyone. Hopefully their number and utility will grow over time.'
    )
  );
};

module.exports = MoreEasyUIElements;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kb2NzL3NlY3Rpb25zL21vcmVFYXN5VUlFbGVtZW50cy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiTmV4dCIsIlByZXZpb3VzIiwiQ29udGVudHMiLCJNb3JlRWFzeVVJRWxlbWVudHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUSxrQkFBUjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01FLFdBQVdGLFFBQVEsYUFBUixDQURqQjtBQUFBLElBRU1HLFdBQVdILFFBQVEsYUFBUixDQUZqQjs7QUFJQSxJQUFNSSxxQkFBcUIsU0FBckJBLGtCQUFxQixHQUFNO0FBQy9CLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQyxZQUFEO0FBQUEsVUFBTSxNQUFLLGVBQVg7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFDLGdCQUFEO0FBQUEsVUFBVSxNQUFLLGNBQWY7QUFBQTtBQUFBLE9BRkY7QUFHRSwwQkFBQyxRQUFEO0FBSEYsS0FERjtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FORjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FQRjtBQVVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssZUFBUjtBQUFBO0FBQUE7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxvQkFBUjtBQUFBO0FBQUE7QUFERixPQUpGO0FBT0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxvQkFBUjtBQUFBO0FBQUE7QUFERjtBQVBGLEtBVkY7QUFxQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXJCRixHQUZGO0FBOEJELENBL0JEOztBQWlDQUMsT0FBT0MsT0FBUCxHQUFpQkYsa0JBQWpCIiwiZmlsZSI6Im1vcmVFYXN5VUlFbGVtZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBOZXh0ID0gcmVxdWlyZSgnLi4vbmV4dCcpLFxuICAgICAgUHJldmlvdXMgPSByZXF1aXJlKCcuLi9wcmV2aW91cycpLFxuICAgICAgQ29udGVudHMgPSByZXF1aXJlKCcuLi9jb250ZW50cycpO1xuXG5jb25zdCBNb3JlRWFzeVVJRWxlbWVudHMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxOZXh0IGhyZWY9XCIjZWFzeVVJTGF5b3V0XCI+RWFzeVVJIExheW91dDwvTmV4dD5cbiAgICAgICAgPFByZXZpb3VzIGhyZWY9XCIjYVNpbXBsZUZvcm1cIj5BIHNpbXBsZSBmb3JtPC9QcmV2aW91cz5cbiAgICAgICAgPENvbnRlbnRzIC8+XG4gICAgICA8L25hdj5cbiAgICAgIDxoMj5Nb3JlIEVhc3lVSSBlbGVtZW50czwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgVGhlc2UgYXJlIGRpdmlkZWQgYmV0d2VlbiB0aHJlZSBwcm9qZWN0czpcbiAgICAgIDwvcD5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjZWFzeVVJTGF5b3V0XCI+RWFzeVVJLUxheW91dDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjZWFzeVVJRHJhZ0FuZERyb3BcIj5FYXN5VUktRHJhZ0FuZERyb3A8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiZWFzeVVJUmljaFRleHRhcmVhXCI+RWFzeVVJLVJpY2hUZXh0YXJlYTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8cD5cbiAgICAgICAgVGhlc2UgYXJlIHNwZWNpYWxpc3QgcHJvamVjdHMgdG8gc29tZSBleHRlbnQgYW5kIGFyZSBub3QgZm9yIGV2ZXJ5b25lLlxuICAgICAgICBIb3BlZnVsbHkgdGhlaXIgbnVtYmVyIGFuZCB1dGlsaXR5IHdpbGwgZ3JvdyBvdmVyIHRpbWUuXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICk7ICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTW9yZUVhc3lVSUVsZW1lbnRzO1xuIl19
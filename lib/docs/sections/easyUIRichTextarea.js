'use strict';

require('../../easyui-jsx');

var Previous = require('../previous'),
    Contents = require('../contents');

var EasyUIRichTextarea = function EasyUIRichTextarea() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Previous,
        { href: '#easyUIDragAndDrop' },
        'EasyUI DragAndDrop'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'EasyUI RichTextarea'
    ),
    React.createElement(
      'p',
      null,
      'A textarea element that handles and hands off events well.'
    )
  );
};

module.exports = EasyUIRichTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kb2NzL3NlY3Rpb25zL2Vhc3lVSVJpY2hUZXh0YXJlYS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiUHJldmlvdXMiLCJDb250ZW50cyIsIkVhc3lVSVJpY2hUZXh0YXJlYSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGtCQUFSOztBQUVBLElBQU1DLFdBQVdELFFBQVEsYUFBUixDQUFqQjtBQUFBLElBQ01FLFdBQVdGLFFBQVEsYUFBUixDQURqQjs7QUFHQSxJQUFNRyxxQkFBcUIsU0FBckJBLGtCQUFxQixHQUFNO0FBQy9CLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQyxnQkFBRDtBQUFBLFVBQVUsTUFBSyxvQkFBZjtBQUFBO0FBQUEsT0FERjtBQUVFLDBCQUFDLFFBQUQ7QUFGRixLQURGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GLEdBRkY7QUFjRCxDQWZEOztBQWlCQUMsT0FBT0MsT0FBUCxHQUFpQkYsa0JBQWpCIiwiZmlsZSI6ImVhc3lVSVJpY2hUZXh0YXJlYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBQcmV2aW91cyA9IHJlcXVpcmUoJy4uL3ByZXZpb3VzJyksXG4gICAgICBDb250ZW50cyA9IHJlcXVpcmUoJy4uL2NvbnRlbnRzJyk7XG5cbmNvbnN0IEVhc3lVSVJpY2hUZXh0YXJlYSA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzZWN0aW9uPlxuICAgICAgPG5hdj5cbiAgICAgICAgPFByZXZpb3VzIGhyZWY9XCIjZWFzeVVJRHJhZ0FuZERyb3BcIj5FYXN5VUkgRHJhZ0FuZERyb3A8L1ByZXZpb3VzPlxuICAgICAgICA8Q29udGVudHMgLz5cbiAgICAgIDwvbmF2PlxuICAgICAgPGgyPkVhc3lVSSBSaWNoVGV4dGFyZWE8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIEEgdGV4dGFyZWEgZWxlbWVudCB0aGF0IGhhbmRsZXMgYW5kIGhhbmRzIG9mZiBldmVudHMgd2VsbC5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgKTsgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFYXN5VUlSaWNoVGV4dGFyZWE7XG4iXX0=
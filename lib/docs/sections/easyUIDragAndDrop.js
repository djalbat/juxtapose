'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents');

var EasyUIDragAndDrop = function EasyUIDragAndDrop() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#easyUIRichTextarea' },
        'EasyUI RichTextarea'
      ),
      React.createElement(
        Previous,
        { href: '#easyUILayout' },
        'EasyUI Layout'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'EasyUI DragAndDrop'
    ),
    React.createElement(
      'p',
      null,
      'Drag and drop elements including an explorer and a rubbish bin.'
    )
  );
};

module.exports = EasyUIDragAndDrop;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kb2NzL3NlY3Rpb25zL2Vhc3lVSURyYWdBbmREcm9wLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJOZXh0IiwiUHJldmlvdXMiLCJDb250ZW50cyIsIkVhc3lVSURyYWdBbmREcm9wIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVEsa0JBQVI7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNRSxXQUFXRixRQUFRLGFBQVIsQ0FEakI7QUFBQSxJQUVNRyxXQUFXSCxRQUFRLGFBQVIsQ0FGakI7O0FBSUEsSUFBTUksb0JBQW9CLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUMsWUFBRDtBQUFBLFVBQU0sTUFBSyxxQkFBWDtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUMsZ0JBQUQ7QUFBQSxVQUFVLE1BQUssZUFBZjtBQUFBO0FBQUEsT0FGRjtBQUdFLDBCQUFDLFFBQUQ7QUFIRixLQURGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU5GO0FBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGLEdBRkY7QUFlRCxDQWhCRDs7QUFrQkFDLE9BQU9DLE9BQVAsR0FBaUJGLGlCQUFqQiIsImZpbGUiOiJlYXN5VUlEcmFnQW5kRHJvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBOZXh0ID0gcmVxdWlyZSgnLi4vbmV4dCcpLFxuICAgICAgUHJldmlvdXMgPSByZXF1aXJlKCcuLi9wcmV2aW91cycpLFxuICAgICAgQ29udGVudHMgPSByZXF1aXJlKCcuLi9jb250ZW50cycpO1xuXG5jb25zdCBFYXN5VUlEcmFnQW5kRHJvcCA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzZWN0aW9uPlxuICAgICAgPG5hdj5cbiAgICAgICAgPE5leHQgaHJlZj1cIiNlYXN5VUlSaWNoVGV4dGFyZWFcIj5FYXN5VUkgUmljaFRleHRhcmVhPC9OZXh0PlxuICAgICAgICA8UHJldmlvdXMgaHJlZj1cIiNlYXN5VUlMYXlvdXRcIj5FYXN5VUkgTGF5b3V0PC9QcmV2aW91cz5cbiAgICAgICAgPENvbnRlbnRzIC8+XG4gICAgICA8L25hdj5cbiAgICAgIDxoMj5FYXN5VUkgRHJhZ0FuZERyb3A8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIERyYWcgYW5kIGRyb3AgZWxlbWVudHMgaW5jbHVkaW5nIGFuIGV4cGxvcmVyIGFuZCBhIHJ1YmJpc2ggYmluLlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICApOyAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVhc3lVSURyYWdBbmREcm9wO1xuIl19